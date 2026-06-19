/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SouthIndianLanguage } from "../types";

interface SuggestionsListProps {
  language: SouthIndianLanguage;
  onSelect: (topic: string) => void;
  titleText: string;
}

interface SuggestionItem {
  id: string;
  name: Record<SouthIndianLanguage, string>;
  category: "South Indian" | "Global" | "Civilization";
}

const SUGGESTIONS: SuggestionItem[] = [
  {
    id: "cholas",
    name: {
      en: "The Chola Dynasty Golden Age",
      ta: "சோழ வம்சத்தின் பொற்காலம்",
      te: "చోళ సామ్రాజ్య స్వర్ణయుగం",
      kn: "ಚೋಳ ವಂಶದ ಸುವರ್ಣ ಯುಗ",
      ml: "ചോള രാജവംശത്തിന്റെ സുവർണ്ണ കാലഘട്ടം",
    },
    category: "South Indian",
  },
  {
    id: "vijayanagara",
    name: {
      en: "The Vijayanagara Empire",
      ta: "விஜயநகர பேரரசின் எழுச்சி",
      te: "విజయనగర సామ్రాజ్య వైభవం",
      kn: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಇತಿಹಾಸ",
      ml: "വിജയനഗര സാമ്രാജ്യത്തിന്റെ ചരിത്രം",
    },
    category: "South Indian",
  },
  {
    id: "talikota",
    name: {
      en: "Battle of Talikota 1565",
      ta: "தலைக்கோட்டைப் போர் 1565",
      te: "తళ్ళికోట యుద్ధము 1565",
      kn: "ತಾಳಿಕೋಟೆಯ ಕದನ 1565",
      ml: "തളിക്കോട്ട യുദ്ധം 1565",
    },
    category: "South Indian",
  },
  {
    id: "pallavas",
    name: {
      en: "Pallava Art and Mahabalipuram",
      ta: "பல்லவர் கலை மற்றும் மாமல்லபுரம்",
      te: "పల్లవ కళ మరియు మహాబలిపురం",
      kn: "ಪಲ್ಲವ ಕಲೆ ಮತ್ತು ಮಹಾಬಲಿಪುರಂ",
      ml: "പല്ലവ കലയും മഹാബലിപുരവും",
    },
    category: "South Indian",
  },
  {
    id: "maruthu_pandiyar",
    name: {
      en: "Maruthu Pandiyar & South Indian Rebellion",
      ta: "மருது பாண்டியர்கள் மற்றும் தென்னிந்திய கிளர்ச்சி",
      te: "మరుదు పాండియార్ తిరుగుబాటు",
      kn: "ಮರುದು ಪಾಂಡ್ಯರ್ ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದ ದಂಗೆ",
      ml: "മരുതു പാണ്ഡ്യരും ദക്ഷിണേന്ത്യൻ കലാപവും",
    },
    category: "South Indian",
  },
  {
    id: "roman_empire",
    name: {
      en: "The Fall of the Roman Empire",
      ta: "ரோமானிய பேரரசின் வீழ்ச்சி",
      te: "రోమన్ సామ్రాజ్య పతనం",
      kn: "ರೋಮನ್ ಸಾಮ್ರಾಜ್ಯದ ಪತನ",
      ml: "റോമാ സാമ്രാജ്യത്തിന്റെ തകർച്ച",
    },
    category: "Global",
  },
  {
    id: "indus_valley",
    name: {
      en: "The Indus Valley Civilization",
      ta: "சிந்து சமவெளி நாகரிகம்",
      te: "సింధు లోయ నాగరికత",
      kn: "ಸಿಂಧೂ ಬಯಲಿನ ನಾಗರಿಕತೆ",
      ml: "സിന്ധൂ നദീതട സംസ്കാരം",
    },
    category: "Civilization",
  },
  {
    id: "maratha",
    name: {
      en: "Chhatrapati Shivaji Maharaj & Marathas",
      ta: "சத்ரபதி சிவாஜி மற்றும் மராட்டிய பேரரசு",
      te: "ఛత్రపతి శివాజీ మరియు మరాఠా చక్రవర్తులు",
      kn: "ಛತ್ರಪತಿ ಶಿವಾಜಿ ಮಹಾರಾಜ್ ಮತ್ತು ಮರಾಠರು",
      ml: "ഛത്രപതി ശിവാജി മഹാരാജും മറാഠാ സാമ്രാജ്യവും",
    },
    category: "Global",
  }
];

export function SuggestionsList({ language, onSelect, titleText }: SuggestionsListProps) {
  return (
    <div className="mt-8">
      <h3 className="font-serif text-lg font-semibold text-stone-700 mb-4 tracking-tight border-b border-stone-200 pb-2">
        {titleText}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {SUGGESTIONS.map((item) => {
          const localizedName = item.name[language] || item.name["en"];
          return (
            <button
              key={item.id}
              onClick={() => onSelect(localizedName)}
              id={`suggest-btn-${item.id}`}
              className="group p-4 bg-white hover:bg-stone-50 border border-stone-200/80 hover:border-amber-700/50 rounded-xl transition-all duration-300 text-left flex flex-col justify-between shadow-xs hover:shadow-md cursor-pointer h-full"
            >
              <div>
                <span className={`inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full mb-3 font-medium ${
                  item.category === "South Indian"
                    ? "bg-amber-100/70 text-amber-900 border border-amber-200/55"
                    : item.category === "Global"
                    ? "bg-blue-100/70 text-blue-900 border border-blue-200/55"
                    : "bg-emerald-100/70 text-emerald-900 border border-emerald-200/55"
                }`}>
                  {item.category}
                </span>
                <p className="font-serif text-sm font-medium text-stone-800 leading-snug group-hover:text-amber-900 transition-colors">
                  {localizedName}
                </p>
              </div>
              <span className="text-[11px] text-amber-700 font-medium group-hover:translate-x-1 transition-transform inline-flex lg:items-center mt-3 gap-0.5">
                Explore &rarr;
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
