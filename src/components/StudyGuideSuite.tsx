/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Loader2,
  AlertCircle,
  FileText,
  FileQuestion,
  Award
} from "lucide-react";
import { HistorySynthesis, SavedLesson, StudyGuide, StudyFlashcard } from "../types";

interface StudyGuideSuiteProps {
  data: HistorySynthesis | SavedLesson;
  onSaveStudyCache?: (guide: StudyGuide) => void;
}

export function StudyGuideSuite({ data, onSaveStudyCache }: StudyGuideSuiteProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [guide, setGuide] = useState<StudyGuide | null>((data as SavedLesson).studyGuide || null);
  const [activeSubTab, setActiveSubTab] = useState<"revision" | "flashcards">("revision");
  
  // Flashcard states
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [scoreUp, setScoreUp] = useState<number[]>([]); // Tracks which cards the student mastered
  const [feedbackViewed, setFeedbackViewed] = useState(false);

  // Generates materials from the model on backend
  const handleGenerateStudyGuide = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/study-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title,
          language: data.language,
          summary: data.summary,
          era: data.era,
          timeline: data.timeline,
          lessons: data.lessons,
        }),
      });

      if (!response.ok) {
        let errMsg = "Failed to compile study guide. Scriptorium archives are loaded.";
        try {
          const errData = await response.json();
          if (errData && errData.error) {
            errMsg = errData.error;
          }
        } catch (_) {}
        throw new Error(errMsg);
      }

      const generatedGuide: StudyGuide = await response.json();
      setGuide(generatedGuide);
      if (onSaveStudyCache) {
        onSaveStudyCache(generatedGuide);
      }
    } catch (err: any) {
      console.error("Failed to generate student materials:", err);
      setError(err?.message || "Lost connection to the student syllabus parser.");
    } finally {
      setLoading(false);
    }
  };

  const handleNextCard = () => {
    if (!guide) return;
    setIsFlipped(false);
    setFeedbackViewed(false);
    setCurrentCardIndex((prev) => (prev + 1) % guide.flashcards.length);
  };

  const handlePrevCard = () => {
    if (!guide) return;
    setIsFlipped(false);
    setFeedbackViewed(false);
    setCurrentCardIndex((prev) => (prev - 1 + guide.flashcards.length) % guide.flashcards.length);
  };

  const handleToggleMastered = (idx: number) => {
    if (scoreUp.includes(idx)) {
      setScoreUp(scoreUp.filter((i) => i !== idx));
    } else {
      setScoreUp([...scoreUp, idx]);
    }
  };

  return (
    <div className="mt-8 bg-amber-50/25 border border-amber-200/50 rounded-2xl p-6 sm:p-8">
      {/* Decorative Study Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-amber-200/40 pb-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="bg-amber-100 border border-amber-200 p-2.5 rounded-xl text-amber-900 shadow-sm shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
              <span>Student Practice & Revision Suite</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold font-mono px-2 py-0.5 rounded-full uppercase border border-emerald-200/30">
                Study Active
              </span>
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
              Deconstruct complex historical sagas into friendly questions, flashcards, and key takeaways tailored for classroom exam review.
            </p>
          </div>
        </div>

        {!guide && !loading && (
          <button
            onClick={handleGenerateStudyGuide}
            id="btn-generate-syllabus"
            className="bg-stone-900 hover:bg-amber-900 text-[#FAF8F5] text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition duration-250 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Generate Study Guide</span>
          </button>
        )}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="py-12 text-center space-y-4">
          <div className="relative w-12 h-12 flex items-center justify-center mx-auto">
            <Loader2 className="w-10 h-10 text-amber-800 animate-spin" />
            <BookOpen className="w-4 h-4 text-stone-400 absolute" />
          </div>
          <p className="font-mono text-xs text-amber-800 uppercase tracking-widest animate-pulse">
            Compiling active study questions & high-yield revision facts...
          </p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex gap-3 items-start my-4">
          <AlertCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
          <p className="text-red-700 text-xs sm:text-sm">{error}</p>
        </div>
      )}

      {/* Main Study guide materials */}
      {guide && (
        <div className="space-y-6">
          {/* Sub menu tabs */}
          <div className="flex border-b border-stone-200 mb-6 bg-white/50 p-1 rounded-xl w-max">
            <button
              onClick={() => setActiveSubTab("revision")}
              id="sub-tab-revision"
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer transition ${
                activeSubTab === "revision"
                  ? "bg-amber-800 text-[#FAF8F5] shadow-xs"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>High-Yield Revision Sheet</span>
            </button>
            <button
              onClick={() => setActiveSubTab("flashcards")}
              id="sub-tab-flashcards"
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer transition ${
                activeSubTab === "flashcards"
                  ? "bg-amber-800 text-[#FAF8F5] shadow-xs"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
            >
              <FileQuestion className="w-4 h-4" />
              <span>Interactive Q&A Cards</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                {guide.flashcards.length}
              </span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeSubTab === "revision" ? (
              <motion.div
                key="revision-panel"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                {/* Visual guidelines & tips */}
                <div className="md:col-span-4 bg-white/60 border border-stone-250 p-5 rounded-xl space-y-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-800" />
                    <h4 className="font-serif font-bold text-stone-800 text-sm">Exam Prep Strategy</h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    These points provide simplified explanations of key timeline actions, rulers, and milestones. Write them in your exam answer sheets for high grades!
                  </p>
                  <div className="border-t border-stone-200/55 pt-3">
                    <span className="block font-mono text-[9px] text-stone-400 uppercase mb-1">Revision Status</span>
                    <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-600 h-1.5 transition-all duration-500" 
                        style={{ width: `${(scoreUp.length / guide.flashcards.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-stone-500 font-mono mt-1 block">
                      {scoreUp.length} of {guide.flashcards.length} Flashcards Mastered ({Math.round((scoreUp.length / guide.flashcards.length) * 100)}%)
                    </span>
                  </div>
                </div>

                {/* Main list of high yield revision fact points */}
                <div className="md:col-span-8 bg-white border border-stone-200/75 rounded-xl p-5 sm:p-6 space-y-4">
                  <h4 className="font-serif font-bold text-stone-950 text-base border-b border-stone-100 pb-2">
                    Key Revision Chronicle Bulletins
                  </h4>
                  <ul className="space-y-3.5">
                    {guide.studyPoints.map((pt, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="w-5.2 h-5.2 rounded-full border border-amber-800/25 bg-amber-100/30 text-amber-800 text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-stone-750 text-sm sm:text-base leading-relaxed font-sans font-medium">
                          {pt}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="flashcards-panel"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="max-w-2xl mx-auto space-y-6 text-center"
              >
                {/* Active Flip Card Stage */}
                <div className="relative min-h-[260px] w-full flex items-center justify-center">
                  <div 
                    onClick={() => {
                      setIsFlipped(!isFlipped);
                      setFeedbackViewed(true);
                    }}
                    id={`study-flashcard-${currentCardIndex}`}
                    className={`w-full min-h-[250px] bg-white border-2 cursor-pointer transition-all duration-300 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between items-center text-center relative hover:shadow-md border-amber-200 ${
                      isFlipped ? "bg-[#FAF7F0] border-amber-400" : "hover:border-amber-300"
                    }`}
                  >
                    <span className="absolute top-4 right-5 text-[10px] font-mono text-stone-400 tracking-wider">
                      {isFlipped ? "REVEALED EXPLANATION" : "CLICK TO REVEAL KEY ANALYSIS"}
                    </span>

                    {/* Progress tracking badge */}
                    <div className="absolute top-4 left-5">
                      <span className="text-[10px] font-mono font-bold uppercase text-amber-800 bg-amber-100/50 px-2 py-0.5 rounded border border-amber-200">
                        Card {currentCardIndex + 1} / {guide.flashcards.length}
                      </span>
                    </div>

                    <div className="my-auto py-4">
                      {isFlipped ? (
                        <div className="space-y-3">
                          <span className="text-[10px] font-mono tracking-wider text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded uppercase">
                            Core Study Answer
                          </span>
                          <p className="text-stone-850 font-serif text-base sm:text-lg leading-relaxed max-w-lg font-medium">
                            {guide.flashcards[currentCardIndex].answer}
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <span className="text-stone-400 block font-serif text-sm">Student Question:</span>
                          <h4 className="font-serif text-stone-900 text-lg sm:text-xl font-bold leading-snug">
                            {guide.flashcards[currentCardIndex].question}
                          </h4>
                        </div>
                      )}
                    </div>

                    {/* User feedback checkpoint */}
                    <div className="text-[11px] font-mono text-stone-400 flex items-center gap-1 border-t border-stone-100 pt-3 w-full justify-center">
                      <p>
                        {isFlipped 
                          ? "Flipped back to hide answer. Use this to quiz yourself!" 
                          : "Can you recall why this event occurred?"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Flip navigation and check-off controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-stone-200/60 p-4 rounded-xl">
                  {/* Previous / Next buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevCard}
                      id="card-nav-prev"
                      className="px-3.5 py-2 bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs sm:text-sm font-semibold rounded-lg cursor-pointer transition flex items-center gap-1"
                    >
                      &larr; Prev
                    </button>
                    <button
                      onClick={handleNextCard}
                      id="card-nav-next"
                      className="px-3.5 py-2 bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs sm:text-sm font-semibold rounded-lg cursor-pointer transition flex items-center gap-1"
                    >
                      Next &rarr;
                    </button>
                  </div>

                  {/* Mark as Mastered checkbox helper */}
                  <button
                    onClick={() => handleToggleMastered(currentCardIndex)}
                    id="btn-mark-mastered"
                    className={`flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 rounded-lg cursor-pointer transition shadow-xs ${
                      scoreUp.includes(currentCardIndex)
                        ? "bg-emerald-700 text-[#FAF8F5]"
                        : "bg-white text-stone-700 border border-stone-250 hover:border-emerald-600 hover:text-emerald-800"
                    }`}
                  >
                    <CheckCircle2 className={`w-4.5 h-4.5 ${scoreUp.includes(currentCardIndex) ? "text-[#FAF8F5]" : "text-emerald-600"}`} />
                    <span>
                      {scoreUp.includes(currentCardIndex)
                        ? "✓ Mastered & Exam Ready"
                        : "Mark as Exam Ready"}
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
