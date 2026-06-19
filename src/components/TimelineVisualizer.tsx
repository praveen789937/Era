/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MapPin, Sparkles, Calendar, Quote, Landmark } from "lucide-react";
import { HistoricalEvent, SouthIndianLanguage } from "../types";

interface TimelineVisualizerProps {
  timeline: HistoricalEvent[];
  language: SouthIndianLanguage;
  title: string;
  nativeTitle: string;
  era: string;
  summary: string;
  labels: {
    eraLabel: string;
    significanceLabel: string;
    locationLabel: string;
  };
}

export function TimelineVisualizer({
  timeline,
  title,
  nativeTitle,
  era,
  summary,
  labels,
}: TimelineVisualizerProps) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-6 sm:p-8 shadow-sm">
      {/* Editorial Header Block */}
      <div className="text-center max-w-2xl mx-auto mb-10 border-b border-stone-200 pb-8">
        <span className="font-mono text-xs text-amber-800 bg-amber-100/50 px-3 py-1 rounded-full uppercase tracking-widest font-medium inline-block mb-3">
          {labels.eraLabel}: {era}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
          {title}
        </h2>
        {nativeTitle && nativeTitle !== title && (
          <p className="font-serif text-xl sm:text-2xl text-amber-800/90 mt-2 font-medium">
            {nativeTitle}
          </p>
        )}
        
        <div className="mt-6 relative px-6 py-4 bg-white/70 border border-stone-200/60 rounded-xl max-w-xl mx-auto">
          <Quote className="absolute -top-3 -left-2 w-6 h-6 text-stone-300 opacity-60" />
          <p className="text-stone-700 italic text-sm leading-relaxed text-left">
            {summary}
          </p>
        </div>
      </div>

      {/* Timeline Steps Track */}
      <div className="relative border-l-2 border-amber-800/20 ml-4 sm:ml-6 md:ml-32 space-y-10 py-2">
        {timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: index * 0.12 }}
            id={`timeline-node-${index}`}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Year/Era Side Rail - Visible on MD+ Screens */}
            <div className="hidden md:block absolute -left-32 top-1 text-right w-24">
              <span className="font-mono text-sm font-semibold text-amber-800 bg-amber-100/40 px-2 py-0.5 rounded-md border border-amber-200/30">
                {event.date}
              </span>
            </div>

            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-800 border-4 border-[#FAF8F5] group-hover:bg-amber-600 transition-colors duration-200 shadow-sm" />

            {/* Event Description Card */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 relative">
              {/* Year/Era Inline - Visible on Mobile < MD */}
              <div className="md:hidden inline-flex items-center gap-1.5 bg-amber-100/50 border border-amber-200/30 px-2.5 py-1 rounded-md text-amber-900 font-mono text-xs font-semibold mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {event.date}
              </div>

              {/* Title & Location Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-stone-100 pb-3 mb-3">
                <h4 className="font-serif text-lg font-bold text-stone-800 leading-tight group-hover:text-amber-900 transition-colors">
                  {event.title}
                </h4>
                
                {event.location && (
                  <span className="inline-flex items-center text-xs text-stone-500 font-medium gap-1 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200/40">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>{event.location}</span>
                  </span>
                )}
              </div>

              {/* Narrative Content */}
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Actionable Historical Significance Capsule */}
              {event.importance && (
                <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-3 sm:p-4 flex gap-3 items-start">
                  <div className="bg-amber-100 text-amber-800 p-1.5 rounded-lg shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] font-bold text-amber-800 uppercase tracking-widest mb-1">
                      {labels.significanceLabel}
                    </span>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-serif italic">
                      {event.importance}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
