import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { SouthIndianLanguage } from "./src/types";
import { generateDynamicFallback, generateFallbackStudyGuide } from "./serverFallback";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper to initialize Gemini client lazily to avoid startup crashes if key is initially absent in local setups
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not configured in Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Robust helper to strip markdown wrappers and parse JSON safely
function cleanAndParseJSON(rawText: string): any {
  let cleaned = rawText.trim();
  cleaned = cleaned.replace(/^```(?:json)?\s*/i, "");
  cleaned = cleaned.replace(/\s*```$/, "");
  return JSON.parse(cleaned.trim());
}

// Maps language code to descriptive name
const languageNames: Record<string, string> = {
  en: "English",
  ta: "Tamil (தமிழ்)",
  te: "Telugu (తెలుగు)",
  kn: "Kannada (ಕನ್ನಡ)",
  ml: "Malayalam (മലയാളം)",
};

// JSON Schema for structured output - Expanded to generate the depth needed for a 50-Mark Essay!
const responseSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "The primary historical title in English (e.g., 'The Chola Empire Empire: Strategic Depth').",
    },
    nativeTitle: {
      type: Type.STRING,
      description: "The title of the historical topic beautifully translated and written in the selected language script.",
    },
    era: {
      type: Type.STRING,
      description: "The approximate chronological years or era of this topic (e.g., '300 BCE - 1279 CE').",
    },
    summary: {
      type: Type.STRING,
      description: "An incredibly deep, academic main master lesson (at least 3 long, exhaustive narrative paragraphs, minimum 350 words). Must include historical context, geopolitical analysis, administrative structures, social-cultural critiques, and economic factors. Must represent a complete master thesis introductory essay suitable for high-scoring university exams.",
    },
    lessons: {
      type: Type.ARRAY,
      description: "Exactly 4 critical, deeply academic strategic analysis modules. Each module must read like an exhaustive textbook subsection focusing on governance, military warfare strategy, architectural patronage, trade dynamics, or administrative systems.",
      items: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "The header or title of this analytical lesson (e.g., 'I. Decentralized Maritime Administration' or 'II. Foreign Trade and Guild Guilds').",
          },
          content: {
            type: Type.STRING,
            description: "An extremely detailed, multi-paragraph analysis (at least 150-200 words per lesson) packed with scholarly terms, strategic principles, governance takeaways, and critical analysis suitable for a 50-mark long-form answer.",
          },
        },
        required: ["title", "content"],
      },
    },
    timeline: {
      type: Type.ARRAY,
      description: "A chronological ordered sequence of 6 to 8 critical milestone chapters. Make sure the milestones represent dense masterclasses of information rather than simple quick facts.",
      items: {
        type: Type.OBJECT,
        properties: {
          date: {
            type: Type.STRING,
            description: "The year, date or specific calendar era.",
          },
          title: {
            type: Type.STRING,
            description: "The name of the major event or military victory.",
          },
          description: {
            type: Type.STRING,
            description: "A complete detailed narrative paragraph (minimum 100 words per milestone event) detailing the historical actors, tactical details, primary factors, and the direct chain of events.",
          },
          importance: {
            type: Type.STRING,
            description: "The structural long-term historical consequence, cultural heritage preservation, and administrative precedent set, written as an exhaustive academic analysis paragraph.",
          },
          location: {
            type: Type.STRING,
            description: "The exact ancient and modern location names.",
          },
        },
        required: ["date", "title", "description", "importance", "location"],
      },
    },
  },
  required: ["title", "nativeTitle", "era", "summary", "lessons", "timeline"],
};

// API Endpoint for Historical Synthesis
app.post("/api/search", async (req, res) => {
  const { query, language } = req.body;

  if (!query || typeof query !== "string" || !query.trim()) {
    return res.status(400).json({ error: "Search query is required." });
  }

  const langCode = (language || "en") as SouthIndianLanguage;

  try {
    const targetLanguageName = languageNames[langCode] || "English";

    // Initialize Gemini safely
    const ai = getGeminiClient();

    const systemInstruction = 
      `You are the world's most outstanding, rigorous, and academic Personal Master Historian and Professor of Global History. ` +
      `Your purpose is to research queries and synthesize incredibly rich, detailed, comprehensive, and exhaustive historical curricula suitable for students trying to score ultimate high marks (specifically preparing for rigorous '50-mark questions' in master-level exams). ` +
      `The user has selected the target language: ${targetLanguageName}.\n\n` +
      `CROSS-LANGUAGE TRANSLATION DIRECTIVE:\n` +
      `- If the user's search query is typed in a language other than the selected target language (e.g. they typed in English but selected ${targetLanguageName}, or they typed in ${targetLanguageName} but selected English), you MUST translate and process the query's historical concept correctly.\n` +
      `- The entire synthesized result (the 'summary', all 'lessons', and all 'timeline' milestones) MUST be written FULLY in the selected target language (${targetLanguageName}) using its correct native script (unless English is selected).\n` +
      `- For 'nativeTitle', always provide the beautiful localized title in the native South Indian script (Tamil/Telugu/Kannada/Malayalam) even if English is selected.\n\n` +
      `CRITICAL SCHOLARLY WRITING DIRECTIVE:\n` +
      `- Avoid short points, quick summaries, fragments, listicles, or basic bullet styles.\n` +
      `- Write with maximum academic density, precise vocabulary, administrative detail, policy impact, dates, and historical debates.\n` +
      `- Structure everything so a student can copy your output to answer or construct 50-mark long-essay answers successfully.\n` +
      `- Every milestone description, administrative takeaway, and overarching summary must be highly comprehensive (minimum of 150-200 words apiece).\n\n` +
      `CRITICAL REQUIREMENT:\n` +
      `- You MUST write the 'summary', all 'lessons' (titles and content), and all 'timeline' milestones (date, title, description, importance, location) FULLY in the selected language (${targetLanguageName}) using its correct native script (unless English is selected).\n` +
      `- Ensure correct historical terminology in Tamil, Telugu, Kannada, or Malayalam.`;

    const prompt = `Synthesize history research for: "${query}". Generate a complete chronological timeline and learning notebook guide in ${targetLanguageName}.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema,
        temperature: 0.2, // Low temperature for high factual accuracy
      },
    });

    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("No response generated from the historian model.");
    }

    const parsedData = cleanAndParseJSON(textOutput);
    return res.json(parsedData);
  } catch (error: any) {
    console.warn("Historical search API encountered an issue. Activating localized Scriptorium offline fallback engine:", error?.message || error);
    try {
      const fallbackData = generateDynamicFallback(query, langCode as SouthIndianLanguage);
      return res.json(fallbackData);
    } catch (fallbackError: any) {
      console.error("Critical fallback failure:", fallbackError);
      return res.status(500).json({
        error: error?.message || "An unexpected error occurred while consulting the archives.",
      });
    }
  }
});

// JSON Schema for study guide
const studyGuideSchema = {
  type: Type.OBJECT,
  properties: {
    studyPoints: {
      type: Type.ARRAY,
      description: "A chronological list of exactly 6-7 high-yield, high-retention revision bullet points summarizing critical historical breakthroughs, actors, and dates. Written in simple language optimized for student memorization.",
      items: {
        type: Type.STRING,
      },
    },
    flashcards: {
      type: Type.ARRAY,
      description: "Exactly 5 comprehensive interactive student study exam questions and deep, explanatory answers. No simple single-word answers.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: {
            type: Type.STRING,
            description: "An engaging question that tests historical comprehension, strategic decisions, or key figure actions.",
          },
          answer: {
            type: Type.STRING,
            description: "The complete, detailed, easy-to-understand explanation that a student can read to master the answer.",
          },
        },
        required: ["question", "answer"],
      },
    },
  },
  required: ["studyPoints", "flashcards"],
};

// API Endpoint for Student Study Guide Generation
app.post("/api/study-guide", async (req, res) => {
  const { title, language, summary, timeline, lessons } = req.body;

  if (!title || !timeline || !Array.isArray(timeline)) {
    return res.status(400).json({ error: "Contextual historical analysis is required." });
  }

  const langCode = (language || "en") as SouthIndianLanguage;

  try {
    const targetLanguageName = languageNames[langCode] || "English";
    const ai = getGeminiClient();

    const systemInstruction = 
      `You are an elite, highly supportive Academic Dean and Student Success Historian. ` +
      `Your task is to transform complex academic historical narratives into friendly, highly memorable study revision guides. ` +
      `The student is studying in: ${targetLanguageName}.\n\n` +
      `CRITICAL INSTRUCTIONS:\n` +
      `- Write both 'studyPoints' and all 'flashcards' (questions and answers) FULLY in the selected language script (${targetLanguageName}).\n` +
      `- Maximize conceptual clarity for secondary-school/college students. Keep prose encouraging and exciting, while explaining tricky historical vocabulary dynamically.\n` +
      `- Avoid dry bullet points that lack substance; make every revision fact thoroughly descriptive.`;

    const prompt = 
      `Create a complete high-yield Student Study Revision Guide and Interactive Flashcard deck for: "${title}".\n\n` +
      `Here is the context to extract historical questions and revision points from:\n` +
      `Chronological Era: ${req.body.era || ""}\n` +
      `Summary Lesson: ${summary || ""}\n` +
      `Key Events:\n${JSON.stringify(timeline)}\n` +
      `Derived Wisdom:\n${JSON.stringify(lessons)}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: studyGuideSchema,
        temperature: 0.3,
      },
    });

    const textOutput = response.text;
    if (!textOutput) {
      throw new Error("No study materials generated.");
    }

    const parsedData = cleanAndParseJSON(textOutput);
    return res.json(parsedData);
  } catch (error: any) {
    console.warn("Study Guide API encountered an issue. Activating localized Scriptorium study planner offline fallback:", error?.message || error);
    try {
      const fallbackData = generateFallbackStudyGuide(title, langCode as SouthIndianLanguage);
      return res.json(fallbackData);
    } catch (fallbackError: any) {
      console.error("Critical study guide fallback failure:", fallbackError);
      return res.status(500).json({
        error: error?.message || "Historical archives were busy and couldn't construct the revision sheet.",
      });
    }
  }
});

// Setup Vite middleware or static serving
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Historian server active at indeed http://localhost:${PORT}`);
  });
}

bootstrap();
