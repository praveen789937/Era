/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BookOpen, Calendar, MapPin, Sparkles, Trash2, Edit3, Bookmark, Library, FileText, FileDown } from "lucide-react";
import { SavedLesson, SouthIndianLanguage, StudyGuide } from "../types";
import { exportToWord, exportToPDF } from "../utils/exporter";
import { StudyGuideSuite } from "./StudyGuideSuite";
import { AdBanner } from "./AdBanner";

interface CurriculumNotebookProps {
  savedLessons: SavedLesson[];
  activeLessonId: string | null;
  onSelectLesson: (id: string | null) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onDeleteLesson: (id: string) => void;
  onSaveStudyGuide: (id: string, guide: StudyGuide) => void;
  language: SouthIndianLanguage;
  isPro: boolean;
  strings: {
    notebookHeader: string;
    notebookSub: string;
    emptyCurriculum: string;
    reflectTitle: string;
    reflectPlaceholder: string;
    btnSaveReflect: string;
    reflectSavedToast: string;
    eraLabel: string;
    significanceLabel: string;
    locationLabel: string;
    proNotice: string;
    proDescription: string;
    exploreCategories: string;
  };
}

export function CurriculumNotebook({
  savedLessons,
  activeLessonId,
  onSelectLesson,
  onUpdateNotes,
  onDeleteLesson,
  onSaveStudyGuide,
  language,
  isPro,
  strings,
}: CurriculumNotebookProps) {
  const [noteText, setNoteText] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const handleNotebookExport = (type: "pdf" | "word", lesson: any) => {
    if (!isPro) {
      alert("🔒 Complete 50-Mark Document Export is locked for BASIC plans. Please upgrade to ERA PRO for only ₹50 to unlock instant Word & PDF downloads!");
      window.dispatchEvent(new Event("trigger-era-checkout"));
      return;
    }
    if (type === "pdf") {
      exportToPDF(lesson);
    } else {
      exportToWord(lesson);
    }
  };

  const categories = ["all", ...Array.from(new Set(savedLessons.map((l) => l.category || "General")))];

  const filteredLessons = savedLessons.filter((lesson) => {
    if (filterCategory === "all") return true;
    return (lesson.category || "General").toLowerCase() === filterCategory.toLowerCase();
  });

  const activeLesson = savedLessons.find((l) => l.id === activeLessonId) || null;

  const handleSaveNotes = () => {
    if (activeLesson) {
      onUpdateNotes(activeLesson.id, noteText);
      alert(strings.reflectSavedToast);
    }
  };

  // Sync state whenever active lesson switches
  const handleSelectLesson = (lesson: SavedLesson | null) => {
    onSelectLesson(lesson ? lesson.id : null);
    if (lesson) {
      setNoteText(lesson.userNotes || "");
    } else {
      setNoteText("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-5">
      {/* Sidebar - Course Index List */}
      <div className="lg:col-span-4 bg-white border border-stone-200/80 rounded-2xl p-5 shadow-xs">
        <div className="mb-5 pb-3 border-b border-stone-100 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-800 flex items-center gap-2">
              <Library className="w-5 h-5 text-amber-800" />
              {strings.notebookHeader}
            </h3>
            <span className="text-xs text-stone-400 font-mono">
              {savedLessons.length} CODES REGISTERED
            </span>
          </div>
        </div>

        {/* Categories Pills */}
        {savedLessons.length > 0 && (
          <div className="mb-4">
            <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-2">
              {strings.exploreCategories}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  id={`cat-filter-${cat}`}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-all duration-200 uppercase tracking-tight font-mono font-medium cursor-pointer ${
                    filterCategory === cat
                      ? "bg-stone-800 text-stone-100 border-stone-800"
                      : "bg-stone-50 hover:bg-stone-100 text-stone-600 border-stone-200/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sidebar Shelf List */}
        {filteredLessons.length === 0 ? (
          <div className="py-12 px-4 text-center border-2 border-dashed border-stone-200 rounded-xl bg-stone-50/50">
            <p className="text-stone-500 font-serif text-sm leading-relaxed">
              {strings.emptyCurriculum}
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {filteredLessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson)}
                id={`shelf-lesson-${lesson.id}`}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-30 hover:shadow-md cursor-pointer ${
                  activeLessonId === lesson.id
                    ? "bg-amber-100/40 border-amber-800/40 shadow-xs"
                    : "bg-stone-50/50 hover:bg-white border-stone-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-mono font-semibold text-amber-800 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/10">
                      {lesson.language.toUpperCase()} • {lesson.category || "General"}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      {lesson.era}
                    </span>
                  </div>
                  
                  <h4 className="font-serif font-bold text-stone-800 line-clamp-1">
                    {lesson.title}
                  </h4>
                  
                  {lesson.nativeTitle && lesson.nativeTitle !== lesson.title && (
                    <p className="font-serif text-xs text-amber-800/80 truncate font-medium mt-0.5">
                      {lesson.nativeTitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/30 text-[10px] text-stone-400 font-mono">
                  <span>
                    Saved {new Date(lesson.savedAt).toLocaleDateString()}
                  </span>
                  {lesson.userNotes && (
                    <span className="inline-flex items-center gap-0.5 text-amber-800 font-medium">
                      <Edit3 className="w-3 h-3" /> Annoted
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Pro Plan Card */}
        <div className="mt-6 p-4 bg-amber-50/40 border border-amber-200/60 rounded-xl space-y-2">
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-800 text-[#FAF8F5] text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase">
              {strings.proNotice}
            </span>
          </div>
          <p className="text-stone-600 text-[11px] leading-relaxed">
            {strings.proDescription}
          </p>
        </div>
      </div>

      {/* Main Content Area - Active Ledger Reader */}
      <div className="lg:col-span-8 bg-white border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
        {activeLesson ? (
          <div className="space-y-8">
            {/* Header Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-stone-100 pb-4 gap-4">
              <span className="inline-flex items-center gap-1.6 text-xs text-stone-400 font-mono">
                <Bookmark className="w-3.5 h-3.5 text-amber-800 fill-amber-800" />
                CURRICULUM MODULE
              </span>
              
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleNotebookExport("pdf", activeLesson)}
                  id="btn-notebook-pdf"
                  className="bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs px-3 py-2 rounded-xl transition font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-red-650" />
                  <span>Export PDF</span>
                </button>
                <button
                  onClick={() => handleNotebookExport("word", activeLesson)}
                  id="btn-notebook-word"
                  className="bg-stone-50 hover:bg-stone-100 text-stone-700 border border-stone-200 text-xs px-3 py-2 rounded-xl transition font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <FileDown className="w-3.5 h-3.5 text-sky-650" />
                  <span>Export Word</span>
                </button>
                <button
                  onClick={() => {
                    if (confirm("Are you sure you want to discard this scroll?")) {
                      onDeleteLesson(activeLesson.id);
                      handleSelectLesson(null);
                    }
                  }}
                  id="btn-delete-lesson"
                  className="text-stone-400 hover:text-red-750 p-2 rounded-xl hover:bg-stone-50 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Discard
                </button>
              </div>
            </div>

            {/* Document Header */}
            <div>
              <span className="font-mono text-xs text-amber-800 bg-amber-100/50 px-2.5 py-1 rounded inline-block mb-2 font-medium">
                {strings.eraLabel}: {activeLesson.era}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                {activeLesson.title}
              </h2>
              {activeLesson.nativeTitle && (
                <p className="font-serif text-lg text-amber-850 font-medium mt-1">
                  {activeLesson.nativeTitle}
                </p>
              )}
              
              <div className="mt-4 p-4 bg-stone-50 border border-stone-100 rounded-xl">
                <p className="text-stone-700 italic text-sm leading-relaxed font-serif">
                  {activeLesson.summary}
                </p>
              </div>
            </div>

            {/* Revenue-Driving Sponsor Spotlight */}
            <AdBanner 
              isPro={isPro} 
              onUpgradeClick={() => window.dispatchEvent(new Event("trigger-era-checkout"))} 
              adImpressions={savedLessons.length + 3}
              language={language}
            />

            {/* Interactive Timeline Tabs */}
            <div>
              <h4 className="font-serif text-base font-bold text-stone-800 border-b border-stone-200 pb-2 mb-4">
                Chronological Events Map
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeLesson.timeline.map((evt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-stone-150 bg-[#FAF8F5]/80 hover:shadow-xs transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-mono text-xs font-bold text-amber-800 bg-white border border-stone-200/50 px-1.5 py-0.5 rounded">
                        {evt.date}
                      </span>
                      {evt.location && (
                        <span className="text-[10px] text-stone-500 font-mono flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-amber-700 shrink-0" /> {evt.location}
                        </span>
                      )}
                    </div>
                    <h5 className="font-serif text-sm font-bold text-stone-800 mb-1 leading-snug">
                      {evt.title}
                    </h5>
                    <p className="text-stone-600 text-xs leading-relaxed line-clamp-3">
                      {evt.description}
                    </p>
                    {evt.importance && (
                      <div className="border-t border-stone-200/50 mt-2.5 pt-2 flex items-start gap-1">
                        <Sparkles className="w-3 h-3 text-amber-700 shrink-0 mt-0.5" />
                        <span className="text-[10px] text-stone-500 font-serif leading-relaxed line-clamp-2">
                          {evt.importance}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actionable Lessons Display */}
            <div>
              <h4 className="font-serif text-base font-bold text-stone-800 border-b border-stone-200 pb-2 mb-4">
                Derived Actionable Wisdom
              </h4>
              <div className="space-y-3">
                {activeLesson.lessons.map((lsn, i) => (
                  <div
                    key={i}
                    className="p-4 bg-stone-55 rounded-xl border border-stone-150 flex gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-800 text-[#FAF8F5] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-bold text-stone-900 leading-snug">
                        {lsn.title}
                      </h5>
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-1">
                        {lsn.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection Digital Notepad */}
            <div className="border-t border-stone-200 pt-6">
              <div className="flex items-center gap-1.5 mb-3">
                <Edit3 className="w-5 h-5 text-amber-800" />
                <h4 className="font-serif text-base font-bold text-stone-800">
                  {strings.reflectTitle}
                </h4>
              </div>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder={strings.reflectPlaceholder}
                className="w-full min-h-[140px] p-4 font-sans text-sm border border-stone-200 hover:border-stone-300 focus:border-amber-700/60 focus:outline-none rounded-xl bg-[#FAF8F5]/50 focus:bg-white resize-y leading-relaxed shadow-inner"
              />
              <div className="mt-3 flex justify-end">
                <button
                  onClick={handleSaveNotes}
                  className="bg-stone-800 hover:bg-amber-900 text-[#FAF8F5] text-xs sm:text-sm font-semibold px-4.5 py-2.5 rounded-xl transition duration-200 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4" />
                  {strings.btnSaveReflect}
                </button>
              </div>
            </div>

            {/* Student Revision Section */}
            <div className="border-t border-stone-200 pt-6">
              <StudyGuideSuite 
                data={activeLesson} 
                onSaveStudyCache={(guide) => onSaveStudyGuide(activeLesson.id, guide)} 
              />
            </div>
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-stone-200/80">
              <Library className="w-8 h-8 text-stone-400" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-800">
              Consult the Codex
            </h3>
            <p className="text-stone-500 text-sm max-w-sm mx-auto mt-2 leading-relaxed">
              Select one of your registered modules from the side shelf to view its structured chronological timeline, lessons, and add customized reflection journals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
