/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HistoricalEvent {
  date: string;
  title: string;
  description: string;
  importance: string;
  location: string;
}

export interface HistoricalLesson {
  title: string;
  content: string;
}

export interface HistorySynthesis {
  query: string;
  language: string;
  title: string;
  nativeTitle: string;
  era: string;
  summary: string;
  lessons: HistoricalLesson[];
  timeline: HistoricalEvent[];
}

export interface SavedLesson extends HistorySynthesis {
  id: string;
  savedAt: string;
  userNotes: string;
  category: string;
  studyGuide?: StudyGuide; // cached study guide response if generated
}

export interface StudyFlashcard {
  question: string;
  answer: string;
}

export interface StudyGuide {
  studyPoints: string[];
  flashcards: StudyFlashcard[];
}

export type SouthIndianLanguage = 'en' | 'ta' | 'te' | 'kn' | 'ml';

export interface LanguageConfig {
  code: SouthIndianLanguage;
  name: string;
  nativeName: string;
  flag: string;
  suggestions: string[];
  placeholder: string;
}
