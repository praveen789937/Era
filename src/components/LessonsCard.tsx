/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Shield, Flame, Compass } from "lucide-react";
import { HistoricalLesson } from "../types";

interface LessonsCardProps {
  lessons: HistoricalLesson[];
  titleText: string;
  subText: string;
}

const icons = [
  <LandmarkIcon key="shield" className="w-5 h-5 text-amber-800" />,
  <WisdomIcon key="compass" className="w-5 h-5 text-emerald-800" />,
  <FlameIcon key="flame" className="w-5 h-5 text-red-800" />,
];

function LandmarkIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return <Shield className={props.className} />;
}

function WisdomIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return <Compass className={props.className} />;
}

function FlameIcon(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return <Flame className={props.className} />;
}

export function LessonsCard({ lessons, titleText, subText }: LessonsCardProps) {
  if (!lessons || lessons.length === 0) return null;

  return (
    <div className="mt-8 bg-stone-100 border border-stone-200/80 rounded-2xl p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2 tracking-tight">
          <BookOpen className="w-6 h-6 text-amber-800" />
          {titleText}
        </h3>
        <p className="text-stone-500 text-sm mt-1">{subText}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {lessons.slice(0, 3).map((lesson, index) => (
          <div
            key={index}
            id={`lesson-card-${index}`}
            className="bg-white border border-stone-200/60 rounded-xl p-5 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className={`p-2.5 rounded-lg w-max mb-4 ${
                index === 0
                  ? "bg-amber-100"
                  : index === 1
                  ? "bg-emerald-100"
                  : "bg-red-100"
              }`}>
                {icons[index % icons.length]}
              </div>
              
              <h4 className="font-serif font-bold text-stone-800 mb-2 leading-snug">
                {lesson.title}
              </h4>
              
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                {lesson.content}
              </p>
            </div>
            <div className="mt-4 border-t border-stone-100 pt-3 text-[10px] font-mono text-stone-400">
              STRATEGIC RECONSTRUCTION #{index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
