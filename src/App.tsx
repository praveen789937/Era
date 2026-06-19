/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  BookOpen,
  Compass,
  Sparkles,
  Clock,
  Globe,
  Check,
  AlertCircle,
  Loader2,
  BookmarkCheck,
  Award,
  Hourglass,
  Quote,
  Feather,
  FileText,
  FileDown
} from "lucide-react";
import { HistoricalEvent, HistoricalLesson, HistorySynthesis, SavedLesson, SouthIndianLanguage } from "./types";
import { TimelineVisualizer } from "./components/TimelineVisualizer";
import { LessonsCard } from "./components/LessonsCard";
import { SuggestionsList } from "./components/SuggestionsList";
import { CurriculumNotebook } from "./components/CurriculumNotebook";
import { StudyGuideSuite } from "./components/StudyGuideSuite";
import { AccessGateway } from "./components/AccessGateway";
import { AdBanner } from "./components/AdBanner";
import { localizations } from "./utils/localizer";
import { exportToWord, exportToPDF } from "./utils/exporter";

const PREBUILT_QUOTES = [
  {
    quote: "To be ignorant of what occurred before you were born is to remain always a child.",
    author: "Cicero"
  },
  {
    quote: "History, despite its wrenching pain, cannot be unlived, but faced with courage, need not be lived again.",
    author: "Maya Angelou"
  },
  {
    quote: "A people without the knowledge of their past history, origin and culture is like a tree without roots.",
    author: "Marcus Garvey"
  },
  {
    quote: "History is a gallery of pictures in which there are few originals and many copies.",
    author: "Alexis de Tocqueville"
  }
];

export default function App() {
  const [language, setLanguage] = useState<SouthIndianLanguage>("en");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingQuoteIndex, setLoadingQuoteIndex] = useState(0);
  const [activeTab, setActiveTab ] = useState<"archives" | "curriculum">("archives");
  const [historicalResult, setHistoricalResult] = useState<HistorySynthesis | null>(null);
  const [savedLessons, setSavedLessons] = useState<SavedLesson[]>([]);
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // User auth & premium states
  const [userEmail, setUserEmail] = useState<string | null>(() => {
    return localStorage.getItem("scriba_user_email") || null;
  });
  const [isPro, setIsPro] = useState<boolean>(() => {
    return localStorage.getItem("scriba_pro") === "true";
  });
  const [adImpressions, setAdImpressions] = useState<number>(0);

  // Trigger login
  const handleUserLogin = (email: string) => {
    setUserEmail(email);
    localStorage.setItem("scriba_user_email", email);
  };

  // Trigger logout
  const handleUserLogout = () => {
    setUserEmail(null);
    setIsPro(false);
    localStorage.removeItem("scriba_user_email");
    localStorage.removeItem("scriba_pro");
  };

  // Upgrade to Pro
  const handleUpgradeToPro = () => {
    setIsPro(true);
    localStorage.setItem("scriba_pro", "true");
  };

  // Load language strings dynamically
  const strings = localizations[language] || localizations.en;

  // Auto-translate the current active search results when language choice changes
  const prevLanguageRef = useRef(language);
  useEffect(() => {
    if (prevLanguageRef.current !== language) {
      prevLanguageRef.current = language;
      if (historicalResult && historicalResult.query) {
        handleHistorySearch(historicalResult.query, language);
      }
    }
  }, [language, historicalResult]);

  // Track quotes rotating on loading screen
  useEffect(() => {
    let timerID: NodeJS.Timeout;
    if (loading) {
      timerID = setInterval(() => {
        setLoadingQuoteIndex((prev) => (prev + 1) % PREBUILT_QUOTES.length);
      }, 5000);
    }
    return () => clearInterval(timerID);
  }, [loading]);

  // Load Saved Lessons on Mount
  useEffect(() => {
    try {
      const items = localStorage.getItem("scriba_curriculum_lessons");
      if (items) {
        setSavedLessons(JSON.parse(items));
      }
    } catch (e) {
      console.error("Failed to load local curriculum codex:", e);
    }
  }, []);

  // Save changes to LocalStorage
  const persistLessons = (updated: SavedLesson[]) => {
    setSavedLessons(updated);
    try {
      localStorage.setItem("scriba_curriculum_lessons", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to persist curriculum codex:", e);
    }
  };

  // Triggers API query to server
  const handleHistorySearch = async (targetQuery: string, overrideLanguage?: SouthIndianLanguage) => {
    if (!targetQuery.trim() || loading) return;

    setLoading(true);
    setError(null);
    setHistoricalResult(null);

    const activeLanguage = overrideLanguage || language;

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: targetQuery.trim(),
          language: activeLanguage,
        }),
      });

      if (!response.ok) {
        const errDetails = await response.json();
        throw new Error(errDetails.error || "Ancient archives failed to respond.");
      }

      const parsedData: HistorySynthesis = await response.json();
      setHistoricalResult({
        ...parsedData,
        query: targetQuery,
        language: activeLanguage,
      });
    } catch (err: any) {
      console.error("Timeline recall failed:", err);
      setError(err?.message || "Lost connection to the Scriptorium. Please check server status or API configuration.");
    } finally {
      setLoading(false);
      setAdImpressions((prev) => prev + 1);
    }
  };

  // Triggers suggestion query directly
  const handleSelectSuggestion = (topicName: string) => {
    setQuery(topicName);
    handleHistorySearch(topicName);
  };

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleHistorySearch(query);
  };

  // Saves resulting synthesis to Notebook
  const handleSaveResult = () => {
    if (!historicalResult) return;

    // Prevent duplicate entries
    const exists = savedLessons.some(
      (l) => l.title.toLowerCase() === historicalResult.title.toLowerCase() && l.language === historicalResult.language
    );
    if (exists) {
      alert(strings.btnAlreadySaved);
      return;
    }

    // Auto classify category based on query contents
    const qLower = historicalResult.query.toLowerCase();
    let category = "General";
    if (qLower.includes("chola") || qLower.includes("pallava") || qLower.includes("dynasty") || qLower.includes("empire") || qLower.includes("samrajya") || qLower.includes("vamsh")) {
      category = "Dynasties";
    } else if (qLower.includes("battle") || qLower.includes("fight") || qLower.includes("war") || qLower.includes("rebellion") || qLower.includes("fall") || qLower.includes("por")) {
      category = "Conflicts";
    } else if (qLower.includes("civilization") || qLower.includes("harappa") || qLower.includes("indus") || qLower.includes("ancient") || qLower.includes("nagareekata")) {
      category = "Civilizations";
    }

    const newLesson: SavedLesson = {
      ...historicalResult,
      id: Date.now().toString(),
      savedAt: new Date().toISOString(),
      userNotes: "",
      category,
    };

    const updated = [newLesson, ...savedLessons];
    persistLessons(updated);
    setActiveLessonId(newLesson.id);
  };

  // Deletes curriculum book
  const handleDeleteLesson = (id: string) => {
    const filter = savedLessons.filter((l) => l.id !== id);
    persistLessons(filter);
    if (activeLessonId === id) {
      setActiveLessonId(null);
    }
  };

  // Save annotations from within notes
  const handleUpdateNotes = (id: string, text: string) => {
    const updated = savedLessons.map((l) => {
      if (l.id === id) {
        return { ...l, userNotes: text };
      }
      return l;
    });
    persistLessons(updated);
  };

  // Keep generated study guides cached persistently
  const handleSaveStudyGuide = (id: string, guide: any) => {
    const updated = savedLessons.map((l) => {
      if (l.id === id) {
        return { ...l, studyGuide: guide };
      }
      return l;
    });
    persistLessons(updated);
  };

  // Handles premium exports of 50-mark chronicles
  const handlePremiumExport = (type: "pdf" | "word", data: any) => {
    if (!isPro) {
      alert("🔒 Complete 50-Mark Document Export is locked for BASIC plans. Please upgrade to ERA PRO for only ₹50 to unlock instant Word & PDF downloads!");
      window.dispatchEvent(new Event("trigger-era-checkout"));
      return;
    }
    if (type === "pdf") {
      exportToPDF(data);
    } else {
      exportToWord(data);
    }
  };

  const isAlreadySaved = historicalResult
    ? savedLessons.some(
        (l) => l.title.toLowerCase() === historicalResult.title.toLowerCase() && l.language === historicalResult.language
      )
    : false;

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-amber-100 selection:text-amber-900">
      <AccessGateway 
        userEmail={userEmail} 
        onLogin={handleUserLogin} 
        onLogout={handleUserLogout} 
        isPro={isPro} 
        onUpgradeToPro={handleUpgradeToPro} 
        language={language}
      />

      {/* Editorial Navigation Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-stone-200/60 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-stone-900 flex items-center justify-center rounded-xl shadow-inner">
              <Feather className="w-5.2 h-5.2 text-[#FAF8F5]" />
            </div>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-baseline gap-1.5">
                {strings.title}
                <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-amber-100/50 text-amber-800 font-bold border border-amber-200/10">
                  SOUTH-INDIAN MULTILINGUAL ED.
                </span>
              </h1>
              <p className="text-xs text-stone-400 font-medium">
                {strings.subtitle}
              </p>
            </div>
          </div>

          {/* South Indian Language Tabs bar */}
          <div className="flex flex-wrap items-center gap-1 bg-stone-50 border border-stone-200/50 p-1 rounded-xl">
            {(["en", "ta", "te", "kn", "ml"] as const).map((lang) => {
              const info = {
                en: { native: "English", emoji: "🇬🇧" },
                ta: { native: "தமிழ்", emoji: "🦚" },
                te: { native: "తెలుగు", emoji: "🌅" },
                kn: { native: "ಕನ್ನಡ", emoji: "🏰" },
                ml: { native: "മലയാളം", emoji: "🥥" },
              }[lang];
              return (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang);
                    setAdImpressions((prev) => prev + 1);
                    if (historicalResult && historicalResult.query) {
                      handleHistorySearch(historicalResult.query, lang);
                    }
                  }}
                  id={`lang-sel-${lang}`}
                  className={`flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.8 rounded-lg transition-all cursor-pointer font-serif font-medium ${
                    language === lang
                      ? "bg-amber-800 text-[#FAF8F5] shadow-xs"
                      : "text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  <span className="text-xs sm:text-sm">{info.emoji}</span>
                  <span>{info.native}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Primary Container Stage */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        {/* Navigation Tabs between Scriptorium Search & Notebook Library */}
        <div className="flex border-b border-stone-200 mb-8 max-w-sm">
          <button
            onClick={() => setActiveTab("archives")}
            id="tab-archives"
            className={`font-serif text-sm sm:text-base font-bold pb-2.5 px-4 transition-all border-b-2 cursor-pointer ${
              activeTab === "archives"
                ? "border-amber-800 text-amber-900"
                : "border-transparent text-stone-400 hover:text-stone-600"
            }`}
          >
            {strings.tabArchives}
          </button>
          <button
            onClick={() => setActiveTab("curriculum")}
            id="tab-curriculum"
            className={`font-serif text-sm sm:text-base font-bold pb-2.5 px-4 transition-all border-b-2 relative cursor-pointer ${
              activeTab === "curriculum"
                ? "border-amber-800 text-amber-900"
                : "border-transparent text-stone-400 hover:text-stone-600"
            }`}
          >
            {strings.tabCurriculum}
            {savedLessons.length > 0 && (
              <span className="absolute -top-1 right-0 w-4.5 h-4.5 bg-amber-800 text-[#FAF8F5] text-[9px] font-mono font-bold rounded-full flex items-center justify-center border-2 border-[#FAF8F5]">
                {savedLessons.length}
              </span>
            )}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "archives" ? (
            <motion.div
              key="archives-stage"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Search form section */}
              <div className="bg-white border border-stone-200/85 rounded-2xl p-6 sm:p-8 shadow-sm">
                <form onSubmit={handleManualSearch} className="max-w-3xl mx-auto text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                      Consult the Chronicles of Time
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm">
                      Input global history or South Indian timelines directly. Our AI brain will research medieval archives and compile a clean chronological map.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch gap-2">
                    <div className="relative flex-grow">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={strings.searchPlaceholder}
                        className="w-full pl-11 pr-4 py-3.5 bg-stone-50 hover:bg-stone-100/50 border border-stone-200 focus:border-amber-800/60 focus:bg-white rounded-xl focus:outline-none transition text-sm text-stone-850"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading || !query.trim()}
                      id="btn-trigger-recall"
                      className="bg-stone-900 hover:bg-amber-900 text-[#FAF8F5] font-semibold text-sm px-6 py-3.5 rounded-xl transition duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Loader2 className="w-4.5 h-4.5 animate-spin" />
                      ) : (
                        <Hourglass className="w-4.5 h-4.5" />
                      )}
                      <span>{strings.btnSearch}</span>
                    </button>
                  </div>
                </form>

                {/* Prebuilt Suggestions section */}
                <SuggestionsList
                  language={language}
                  onSelect={handleSelectSuggestion}
                  titleText={strings.suggestedTopics}
                />
              </div>

              {/* Loader with rotating comforting Quotes */}
              {loading && (
                <div className="bg-white border border-stone-200/60 rounded-2xl p-12 text-center shadow-xs flex flex-col items-center justify-center space-y-6">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <Loader2 className="w-12 h-12 text-amber-800 animate-spin absolute" />
                    <Compass className="w-6 h-6 text-stone-400" />
                  </div>
                  
                  <div className="space-y-2 max-w-md">
                    <h4 className="font-serif font-bold text-stone-800 text-lg">
                      {strings.loadingTitle}
                    </h4>
                    <p className="font-mono text-xs text-amber-700 uppercase tracking-widest animate-pulse">
                      {loadingQuoteIndex === 0 && strings.loadingQuote1}
                      {loadingQuoteIndex === 1 && strings.loadingQuote2}
                      {loadingQuoteIndex === 2 && strings.loadingQuote3}
                      {loadingQuoteIndex === 3 && "Binding pages in appropriate South Indian scripts..."}
                    </p>
                  </div>

                  {/* Rotating philosophical general quotes */}
                  <div className="relative border-t border-stone-100 pt-6 max-w-lg mt-4 text-center">
                    <Quote className="w-5 h-5 text-stone-200 mx-auto mb-2" />
                    <p className="text-stone-500 italic text-xs leading-relaxed">
                      "{PREBUILT_QUOTES[loadingQuoteIndex].quote}"
                    </p>
                    <span className="block font-mono text-[9px] text-stone-400 uppercase tracking-wider mt-1.5">
                      — {PREBUILT_QUOTES[loadingQuoteIndex].author}
                    </span>
                  </div>
                </div>
              )}

              {/* Errors Block */}
              {error && (
                <div className="bg-red-50 border border-red-200/70 p-5 rounded-2xl flex gap-3.5 items-start">
                  <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-red-955 text-sm">
                      Saga retrieval disrupted
                    </h4>
                    <p className="text-red-700 text-xs sm:text-sm mt-1 leading-relaxed">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              {/* Research compiled outcome */}
              {historicalResult && (
                <div className="space-y-8">
                  {/* Synthesis actions float bar */}
                  <div className="bg-stone-900 text-[#FAF8F5] p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm border border-stone-800">
                    <div className="flex items-center gap-2">
                      <BookmarkCheck className="w-5 h-5 text-amber-400" />
                      <div>
                        <span className="block text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest leading-none mb-1">
                          Timeline Synthesis Prepared
                        </span>
                        <p className="text-xs text-stone-300 font-serif leading-none">
                          Fully compiled and translated into {strings.title.split(" ")[0]} ({language.toUpperCase()})
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => handlePremiumExport("pdf", historicalResult)}
                        id="btn-export-pdf"
                        className="bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-750 text-xs px-4 py-2.5 rounded-xl transition font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <FileText className="w-4 h-4 text-red-400" />
                        <span>Export PDF</span>
                      </button>

                      <button
                        onClick={() => handlePremiumExport("word", historicalResult)}
                        id="btn-export-word"
                        className="bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-750 text-xs px-4 py-2.5 rounded-xl transition font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <FileDown className="w-4 h-4 text-sky-400" />
                        <span>Export Word</span>
                      </button>

                      <button
                        onClick={handleSaveResult}
                        disabled={isAlreadySaved}
                        id="btn-save-curric"
                        className={`text-xs px-4.5 py-2.5 rounded-xl transition font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                          isAlreadySaved
                            ? "bg-stone-800 text-stone-400 cursor-not-allowed border border-stone-700"
                            : "bg-amber-700 text-[#FAF8F5] hover:bg-amber-600 shadow-sm"
                        }`}
                      >
                        {isAlreadySaved ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-500" />
                            <span>{strings.btnAlreadySaved}</span>
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-4 h-4" />
                            <span>{strings.btnSaveLesson}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Revenue-Driving Sponsor Spotlight */}
                  <AdBanner 
                    isPro={isPro} 
                    onUpgradeClick={() => window.dispatchEvent(new Event("trigger-era-checkout"))} 
                    adImpressions={adImpressions}
                    language={language}
                  />

                  {/* Vertical Timelines tree */}
                  <TimelineVisualizer
                    timeline={historicalResult.timeline}
                    title={historicalResult.title}
                    nativeTitle={historicalResult.nativeTitle}
                    era={historicalResult.era}
                    summary={historicalResult.summary}
                    language={language}
                    labels={{
                      eraLabel: strings.eraLabel,
                      significanceLabel: strings.significanceLabel,
                      locationLabel: strings.locationLabel,
                    }}
                  />

                  {/* Derived actionable takeaways */}
                  <LessonsCard
                    lessons={historicalResult.lessons}
                    titleText={strings.lessonsHeader}
                    subText={strings.lessonsSub}
                  />

                  {/* Active Student Study & revision partner */}
                  <StudyGuideSuite 
                    data={historicalResult} 
                    onSaveStudyCache={(guide) => {
                      setHistoricalResult(prev => prev ? { ...prev, studyGuide: guide } : null);
                    }}
                  />
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="curriculum-stage"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Notebook digital ledger with reflection notepad */}
              <CurriculumNotebook
                savedLessons={savedLessons}
                activeLessonId={activeLessonId}
                onSelectLesson={setActiveLessonId}
                onUpdateNotes={handleUpdateNotes}
                onDeleteLesson={handleDeleteLesson}
                onSaveStudyGuide={handleSaveStudyGuide}
                language={language}
                isPro={isPro}
                strings={{
                  notebookHeader: strings.notebookHeader,
                  notebookSub: strings.notebookSub,
                  emptyCurriculum: strings.emptyCurriculum,
                  reflectTitle: strings.reflectTitle,
                  reflectPlaceholder: strings.reflectPlaceholder,
                  btnSaveReflect: strings.btnSaveReflect,
                  reflectSavedToast: strings.reflectSavedToast,
                  eraLabel: strings.eraLabel,
                  significanceLabel: strings.significanceLabel,
                  locationLabel: strings.locationLabel,
                  proNotice: strings.proNotice,
                  proDescription: strings.proDescription,
                  exploreCategories: strings.exploreCategories,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Modern museum footer */}
      <footer className="mt-16 border-t border-stone-200 bg-white py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 divide-y divide-stone-100 space-y-4">
          <p className="text-stone-400 text-xs tracking-wide leading-relaxed max-w-md mx-auto">
            Grounded on modern historical scholarship and translated dynamically with high-precision server intelligence. Synthesize, store, and review world history natively.
          </p>
          <div className="pt-4 text-[10px] font-mono text-stone-400">
            © {new Date().getFullYear()} Regional Access Scriptorium. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
