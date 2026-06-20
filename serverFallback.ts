/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HistorySynthesis, StudyGuide, SouthIndianLanguage } from "./src/types";

// Helper keys mapped to descriptive language names
export const FALLBACK_LANGUAGES: Record<SouthIndianLanguage, string> = {
  en: "English",
  ta: "Tamil",
  te: "Telugu",
  kn: "Kannada",
  ml: "Malayalam"
};

// High-quality pre-synthesized data for common queries
export const OFFLINE_CURRICULA: Record<string, Record<SouthIndianLanguage, HistorySynthesis>> = {
  cholas: {
    en: {
      query: "The Chola Dynasty Golden Age",
      language: "en",
      title: "The Chola Dynasty Golden Age",
      nativeTitle: "ராஜராஜ சோழன் / சோழப் பேரரசு",
      era: "9th Century to 13th Century CE",
      summary: "The Imperial Cholas of Thanjavur re-established one of the longest-ruling dynasties in world history. Under the legendary leadership of Rajaraja Chola I and his illustrious successor Rajendra Chola I, the dynasty entered its golden age. They unified the far south of India, built magnificent temples of granite showcasing monumental Dravidian architecture, and established a sophisticated, decentralized system of village self-governance. Additionally, their formidable marine fleet crossed the Bay of Bengal, leading successful naval expeditions to Sri Lanka, the Maldives, and Southeast Asia (Srivijaya kingdom), which served to foster robust maritime trade networks and deep cultural exchanges.",
      lessons: [
        {
          title: "Strategic Naval & Maritime Hegemony",
          content: "The Cholas recognized that true empire-building in the Indian Ocean required absolute control over maritime trade routes rather than just static land defense. By building an elite naval fleet, they successfully safe-guarded international merchants and expanded military-cultural influence across Southeast Asia, proving that economic power is strongly linked to modern sea-route security."
        },
        {
          title: "Decentralized Democratic Auditing",
          content: "The historic Uttaramethur inscriptions reveal an advanced system of village self-government (Sabhaj) characterized by ballot-based elections (Kudavolai) and strict disqualification criteria for corrupt administrators. It teaches us that robust local governance and transparent public accountability form the cornerstone of lasting state stability."
        }
      ],
      timeline: [
        {
          date: "850 CE",
          title: "Assault of Vijayalaya Chola & Capture of Thanjavur",
          description: "Vijayalaya Chola, a feudatory of the Pallavas, seized Thanjavur from Muttaraiyar chieftains, lay-founding the Imperial Chola epoch on the banks of River Cauvery and establishing a new base of administrative consolidation.",
          importance: "This critical shift signaled the resurrection of the Cholas from historical eclipse, serving as the foundational territorial pivot for all future expansions.",
          location: "Thanjavur, Tamil Nadu, India"
        },
        {
          date: "985 CE - 1014 CE",
          title: "Zenith of Rajaraja Chola I and Construction of Brihadisvara Temple",
          description: "Rajaraja Chola I ascended the throne, launching massive administrative reforms, land-surveys, and architectural wonders. He commissioned the grand Brihadisvara Temple (Big Temple) in Thanjavur, a 216-foot tall granite masterpiece completed in 1010 CE.",
          importance: "The temple was not merely a spiritual house but acted as an economic hub, central bank, and employment generator, anchoring state soft power and consolidating regional loyalty.",
          location: "Thanjavur (Tanjore), South India"
        },
        {
          date: "1014 CE - 1044 CE",
          title: "Reign of Rajendra Chola I & Overseas Expeditions to Srivijaya",
          description: "Succeeding his father, Rajendra Chola I took Chola arms up north to the Ganges (earning the title Gangaikonda Chola) and initiated a highly sophisticated naval campaign across the oceans to conquer ports of Srivijaya (modern Indonesia and Malaysia) to secure unobstructed maritime trade.",
          importance: "This marked the ultimate physical limit of South Indian geopolitical projection across Southeast Asia, creating a permanent cultural imprint that survives in Southeast Asian arts.",
          location: "Srivijaya (Indonesia & Malaysia) and Gangaikondacholapuram"
        }
      ]
    },
    ta: {
      query: "The Chola Dynasty Golden Age",
      language: "ta",
      title: "சோழ வம்சத்தின் பொற்காலம்",
      nativeTitle: "ராஜராஜ சோழன் / சோழப் பேரரசு",
      era: "கி.பி. 9-ஆம் நூற்றாண்டு முதல் 13-ஆம் நூற்றாண்டு வரை",
      summary: "தஞ்சாவூர் பிற்காலச் சோழர்கள் உலக வரலாற்றில் மிக நீண்ட காலம் ஆட்சி செய்த வம்சங்களுள் ஒன்றாகும். முதலாம் ராஜராஜ சோழன் மற்றும் அவரது புதல்வர் முதலாம் ராஜேந்திர சோழன் ஆகியோரின் கீழ் சோழப் பேரரசு உன்னத பொற்காலத்தை எட்டியது. இவர்கள் தென்னிந்தியாவை ஒருங்கிணைத்து, உலகப் புகழ்பெற்ற தஞ்சை பிரகதீஸ்வரர் ஆலயத்தை கருங்கற்களைக் கொண்டு கட்டினர். சோழர்களின் கடற்படை வங்காள விரிகுடா கடந்து இலங்கை, மாலத்தீவுகள் மற்றும் தென்கிழக்கு ஆசியாவின் ஸ்ரீவிஜய பேரரசு வரை சென்று கடல்வழி வர்த்தகத்தைப் பாதுகாத்ததுடன், பண்பாட்டு உறவுகளையும் வலுப்படுத்தியது.",
      lessons: [
        {
          title: "கடற்படை ஆதிக்கமும் உலகளாவிய வணிகமும்",
          content: "வெறும் நிலப்பரப்பை மட்டும் காக்காமல் கடற்பாதைகளையும் வணிகத் தடங்களையும் கட்டுப்படுத்துவது பேரரசின் பொருளாதார பலத்திற்கு இன்றியமையாதது என்பதைச் சோழர்கள் உணர்த்தியுள்ளனர்."
        },
        {
          title: "குடவோலை தேர்தல் முறை மற்றும் உள்ளாட்சி நிர்வாகம்",
          content: "உத்திரமேரூர் கல்வெட்டுகள் மூலம் அறியப்படும் குடவோலை முறை, தகுதியான மற்றும் ஊழலற்ற பிரதிநிதிகளைத் தேர்ந்தெடுக்கும் மக்களாட்சி அமைப்பை அன்றே வெற்றிகரமாகச் செயல்படுத்தியதைக் காட்டுகிறது."
        }
      ],
      timeline: [
        {
          date: "கி.பி. 850",
          title: "விஜயாலய சோழன் தஞ்சாவூரைக் கைப்பற்றுதல்",
          description: "முத்தரையர்களிடமிருந்து தஞ்சாவூரைக் கைப்பற்றி பிற்காலச் சோழப் பேரரசின் எழுச்சிக்கு அடிக்கல் நாட்டினார்.",
          importance: "சோழர்களின் வரலாற்றில் புதிய சகாப்தத்தின் தொடக்கம்.",
          location: "தஞ்சாவூர், தமிழ்நாடு"
        },
        {
          date: "கி.பி. 985 - 1014",
          title: "முதலாம் ராஜராஜன் ஆட்சி மற்றும் தஞ்சைப் பெருவுடையார் கோயில்",
          description: "நிர்வாகச் சீர்திருத்தங்கள், நில அளவை ஆகியவற்றைக் கொண்டுவந்து உலகப் புகழ்பெற்ற 216 அடி உயர தஞ்சைப் பெரிய கோயிலைக் கட்டிமுடித்தார்.",
          importance: "ஆன்மீகம் தாண்டி சமூக, கலை மற்றும் பொருளாதார மையமாக இக்கோயில் விளங்கியது.",
          location: "தஞ்சாவூர், தென்னிந்தியா"
        },
        {
          date: "கி.பி. 1014 - 1044",
          title: "முதலாம் ராஜேந்திரன் கங்கை மற்றும் கடாரப் படையெடுப்புகள்",
          description: "கங்கை வரை படையெடுத்துக் கங்கைகொண்ட சோழபுரத்தை நிறுவி, ஸ்ரீவிஜய (கடாரம்) பேரரசுக்குக் கப்பல்களை அனுப்பி கடல் வணிகத்தை நிலைநாட்டினார்.",
          importance: "தமிழர்களின் கடல்வழி இராணுவ வலிமையின் உச்சக்கட்டம்.",
          location: "தென்கிழக்கு ஆசியா மற்றும் கங்கைகொண்ட சோழபுரம்"
        }
      ]
    },
    te: {
      query: "The Chola Dynasty Golden Age",
      language: "te",
      title: "చోళ సామ్రాజ్య స్వర్ణయుగం",
      nativeTitle: "రాజరాజ చోళుడు / చోళ సామ్రాజ్యం",
      era: "9వ శతాబ్దం నుండి 13వ శతాబ్దం వరకు",
      summary: "తంజావూరు సామ్రాజ్య చోళులు ప్రపంచ చరిత్రలో అత్యంత సుదీర్ఘ కాలం పరిపాలించిన రాజవంశాలలో ఒకటి. మొదటి రాజరాజ చోళుడు, మొదటి రాజేంద్ర చోళుడుల నాయకత్వంలో చోళ సామ్రాజ్యం అత్యున్నత వైభవాన్ని సాధించింది. వీరు దక్షిణ భారతదేశాన్ని సమైక్యం చేయడమే కాకుండా, అద్భుతమైన గ్రానైట్ రాళ్లతో బృహదీశ్వర దేవాలయాన్ని నిర్మించారు. వీరు శక్తివంతమైన నౌకాదళం ద్వారా సముద్ర వాణిజ్యాన్ని పరిరక్షించి, శ్రీలంక, ఆగ్నేయాసియాలోని శ్రీవిజయ సామ్రాజ్యంతో బలమైన సాంస్కృతిక సంబంధాలను ఏర్పరచారు.",
      lessons: [
        {
          title: "వ్యూహాత్మక నౌకాదళ ఆధిపత్యం",
          content: "కేవలం భూ పరిపాలనకు పరిమితం కాకుండా, సముద్ర మార్గాలపై గుత్తాధిపత్యం సంపాదించడం ద్వారానే ఆర్థిక సుస్థిరత లభిస్తుందని చోళుల చరిత్ర రుజువు చేస్తోంది."
        },
        {
          title: "వికేంద్రీకృత స్థానిక స్వపరిపాలన",
          content: "ఉత్తరమేరూరు శాసనాల ప్రకారం, ప్రాచీన కాలంలోనే కుడవాలై (ఓటింగ్ విధానం) ద్వారా గ్రామీణ స్థాయిలోనే అవినీతి రహిత ప్రాతినిధ్యాన్ని చోళులు అమలు పరిచారు."
        }
      ],
      timeline: [
        {
          date: "క్రీ.శ. 850",
          title: "విజయాలయ చోళుని తంజావూరు ఆక్రమణ",
          description: "పల్లవుల సామంత రాజుగా ఉంటూనే ముత్తరైయార్లను ఓడించి గొప్ప చోళ సామ్రాజ్య పునరుజ్జీవనానికి పునాది వేశారు.",
          importance: "చోళుల చరిత్రలో అత్యంత కీలకమైన రాజకీయ మలుపు ఇది.",
          location: "తంజావూరు, తమిళనాడు"
        },
        {
          date: "క్రీ.శ. 985 - 1014",
          title: "మొదటి రాజరాజ చోళుని పాలన & బృహదీశ్వరాలయ నిర్మాణం",
          description: "భారతీయ నిర్మాణ కళాఖండంగా నిలిచే 216 అడుగుల ఎత్తైన తంజావూరు బృహదీశ్వరాలయం (పెద్ద గుడి) నిర్మాణాన్ని పూర్తి చేశారు.",
          importance: "ఈ ఆలయం కేవలం ఆధ్యాత్మిక కేంద్రంగానే కాక ఆర్థిక వ్యవస్థకు పట్టుగొమ్మలా నిలిచింది.",
          location: "తంజావూరు, దక్షిణ భారతం"
        },
        {
          date: "క్రీ.శ. 1014 - 1044",
          title: "రాజేంద్ర చోళుని గంగా, ఆగ్నేయాసియా దిగ్విజయ యాత్రలు",
          description: "గంగ నది వరకు దండయాత్ర చేసి 'గంగైకొండ చోళ' బిరుదును ధరించి, శ్రీవిజయ రాజ్యాలపై నౌకా విజయాలు సాధించారు.",
          importance: "ఆగ్నేయాసియా దేశాల్లో భారతీయ సంస్కృతి, కళల వ్యాప్తికి ఇది తోడ్పడింది.",
          location: "ఆగ్నేయాసియా మరియు గంగైకొండచోళపురం"
        }
      ]
    },
    kn: {
      query: "The Chola Dynasty Golden Age",
      language: "kn",
      title: "ಚೋಳ ವಂಶದ ಸುವರ್ಣ ಯುಗ",
      nativeTitle: "ರಾಜರಾಜ ಚೋಳ ಮತ್ತು ಚೋಳ ಸಾಮ್ರಾಜ್ಯ",
      era: "೯ನೇ ಶತಮಾನದಿಂದ ೧೩ನೇ ಶತಮಾನದವರೆಗೆ",
      summary: "ತಂಜಾವೂರಿನ ಚೋಳರು ವಿಶ್ವ ಇತಿಹಾಸದಲ್ಲೇ ಸುದೀರ್ಘ ಕಾಲ ಆಳಿದ ಪ್ರತಿಷ್ಠಿತ ಸಾಮ್ರಾಜ್ಯಗಳಲ್ಲೊಂದು. ರಾಜರಾಜ ಚೋಳ ಮತ್ತು ರಾಜೇಂದ್ರ ಚೋಳರ ಕಾಲಾವಧಿಯಲ್ಲಿ ಈ ವಂಶವು ತನ್ನ ಸುವರ್ಣ ಯುಗವನ್ನು ಕಂಡಿತು. ಭವ್ಯ ಗ್ರಾನೈಟ್ ಶಿಲೆಯ ಕಲಾವಂತಿಕೆಯನ್ನು ತೋರಿಸುವ ಮಹೋನ್ನತ ಬೃಹದೀಶ್ವರ ದೇವಾಲಯವನ್ನು ನಿರ್ಮಿಸಿದ ಕೀರ್ತಿ ಇವರದ್ದಾಗಿದೆ. ಅತ್ಯುತ್ತಮ ನೌಕಾಪಡೆಯನ್ನು ಹೊಂದಿದ್ದ ಚೋಳರು ಶ್ರೀಲಂಕಾ ಮತ್ತು ಶ್ರೀವಿಜಯ (ಆಗ್ನೇಯ ಏಷ್ಯಾ) ದೇಶಗಳ ಮೇಲೆ ಜಯ ಸಾಧಿಸಿ ಪ್ರಮುಖ ಜಲಮಾರ್ಗ ವ್ಯಾಪಾರ ಮತ್ತು ಸಂಸ್ಕೃತಿ ವಿನಿಮಯವನ್ನು ತಂದರು.",
      lessons: [
        {
          title: "ನೌಕಾ ಶಕ್ತಿ ಮತ್ತು ವಾಣಿಜ್ಯ ಸುರಕ್ಷತೆ",
          content: "ಬಲಾಢ್ಯ ನೌಕಾ ಪಡೆಯ ಮೂಲಕ ವ್ಯಾಪಾರ ಮಾರ್ಗಗಳನ್ನು ಸುಭದ್ರಪಡಿಸಿಕೊಂಡು ಆರ್ಥಿಕ ತಳಹದಿಯನ್ನು ಗಟ್ಟಿಗೊಳಿಸುವುದನ್ನು ಚೋಳರು ಇತಿಹಾಸಕ್ಕೆ ತೋರಿಸಿಕೊಟ್ಟಿದ್ದಾರೆ."
        },
        {
          title: "ವಿಕೇಂದ್ರೀಕರಣ ಮತ್ತು ಸ್ಥಳೀಯ ಆಡಳಿತ",
          content: "ಉತ್ತರಮೇರೂರು ಶಾಸನದ ಪ್ರಕಾರ ಹಳ್ಳಿಯ ಮಟ್ಟದಲ್ಲೇ ಅತ್ಯುತ್ತಮ ಚುನಾವಣಾ ಪದ್ಧತಿ ಹಾಗೂ ಕಠಿಣ ಆಡಳಿತ ನಿಯಮಾವಳಿಗಳನ್ನು ಜಾರಿಗೊಳಿಸಿದ್ದರು."
        }
      ],
      timeline: [
        {
          date: "ಕ್ರಿ.ಶ. ೮೫೦",
          title: "ವಿಜಯಾಲಯ ಚೋಳನಿಂದ ತಂಜಾವೂರು ವಶ",
          description: "ತನ್ನ ಸೋದರ ಸಾಮ್ರಾಜ್ಯಗಳನ್ನು ಸೋಲಿಸಿ ತಂಜಾವೂರನ್ನು ತನ್ನ ಹೊಸ ರಾಜಧಾನಿಯನ್ನಾಗಿ ಮಾಡಿ ಚೋಳ ಸಾಮ್ರಾಜ್ಯದ ಪುನರುತ್ಥಾನಕ್ಕೆ ಕಾರಣನಾದನು.",
          importance: "ಇದು ಭವಿಷ್ಯದ ಅತಿ ದೊಡ್ಡ ದಕ್ಷಿಣ ಭಾರತೀಯ ಸಾಮ್ರಾಜ್ಯಕ್ಕೆ ಬುನಾದಿಯಾಯಿತು.",
          location: "ತಂಜಾವೂರು, ತಮಿಳುನಾಡು"
        },
        {
          date: "ಕ್ರಿ.ಶ. ೯೮೫ - ೧೦೧೪",
          title: "ರಾಜರಾಜ ಚೋಳನ ಸಾಮ್ರಾಜ್ಯ ವಿಸ್ತರಣೆ ಮತ್ತು ಬೃಹದೀಶ್ವರ ದೇಗುಲ",
          description: "೨೧೬ ಅಡಿ ಎತ್ತರದ ಹೆಮ್ಮೆಯ ಗ್ರಾನೈಟ್ ಶಿಲ್ಪಕಲೆಯ ಬೃಹದೀಶ್ವರ ದೇವಸ್ಥಾನವನ್ನು ಕ್ರಿ.ಶ. ೧೦೧೦ರಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸಿದನು.",
          importance: "ಈ ದೇವಸ್ಥಾನವು ನೃತ್ಯ, ಕಲೆ, ಆರ್ಥಿಕತೆ ಮತ್ತು ಶಿಕ್ಷಣದ ಮಹಾ ಕೇಂದ್ರವಾಗಿ ಮಾರ್ಪಟ್ಟಿತು.",
          location: "ತಂಜಾವೂರು, ದಕ್ಷಿಣ ಭಾರತ"
        },
        {
          date: "ಕ್ರಿ.ಶ. ೧೦೧೪ - ೧೦೪೪",
          title: "ರಾಜೇಂದ್ರ ಚೋಳನಿಂದ ಗಂಗಾ ತಟ ಹಾಗೂ ಆಗ್ನೇಯ ಏಷ್ಯಾ ದಂಡಯಾತ್ರೆ",
          description: "ಗಂಗಾ ನದಿಯವರೆಗೂ ದಂಡೆತ್ತಿ ಹೋಗಿ ವಿಜಯ ಸಾಬೀತುಪಡಿಸಿದನು ಹಾಗೂ ಬಂಗಾಳ ಕೊಲ್ಲಿಯ ತಟವನ್ನು ಆವರಿಸಿ ಶ್ರೀವಿಜಯದ ಮೇಲೆ ದಾಳಿ ನಡೆಸಿದನು.",
          importance: "ಭಾರತೀಯ ಇತಿಹಾಸದಲ್ಲೇ ಅತ್ಯಂತ ವೈಶಿಷ್ಟ್ಯಮಯ ದ್ವೀಪಾಂತರ ಆಡಳಿತ ನಿರ್ವಹಣೆ ಇದಾಗಿದೆ.",
          location: "ಆಗ್ನೇಯ ಏಷ್ಯಾ ಮತ್ತು ಗಂಗೈಕೊಂಡಚೋಳಪುರಂ"
        }
      ]
    },
    ml: {
      query: "The Chola Dynasty Golden Age",
      language: "ml",
      title: "ചോള രാജവംശത്തിന്റെ സുവർണ്ണ കാലഘട്ടം",
      nativeTitle: "രാജരാജ ചോളൻ / ചോള സാമ്രാജ്യം",
      era: "9-ാം നൂറ്റാണ്ട് മുതൽ 13-ാം നൂറ്റാണ്ട് വരെ",
      summary: "വിശ്വചരിത്രത്തിലെ ഏറ്റവും ദീർഘകാലം നിലനിന്ന രാജവംശങ്ങളിലൊന്നാണ് തഞ്ചാവൂരിലെ ചോള രാജവംശം. രാജരാജ ചോളൻ ഒന്നാമൻ, അദ്ദേഹത്തിന്റെ പുത്രൻ രാജേന്ദ്ര ചോളൻ ഒന്നാമൻ എന്നിവരുടെ കാലത്താണ് ചോള സാമ്രാജ്യം ഔന്നത്യത്തിൽ എത്തിയത്. അവർ ദക്ഷിണേന്ത്യയെ ഒന്നിപ്പിക്കുകയും മഹാമേരുവായ ബൃഹദീശ്വര ക്ഷേത്രം നിർമ്മിക്കുകയും ചെയ്തു. ഇവരുടെ ശക്തമായ നാവികസേന ബംഗാൾ ഉൾക്കടൽ വഴി ആഗ്നേയ ഏഷ്യൻ രാജ്യങ്ങളായ ശ്രീവിജയ വരെ എത്തി സമുദ്രവ്യാപാരത്തെ സുരക്ഷിതമാക്കുകയും വലിയ സാംസ്കാരിക സ്വാധീനം ചെലുത്തുകയും ചെയ്തു.",
      lessons: [
        {
          title: "നാവിക മേധാവിത്വവും ആഗോള വ്യാപാരവും",
          content: "ഒരു വലിയ ഭരണകൂടത്തിന് കരയിലെ അധികാരം മാത്രം പോരാ എന്നും, കടലിലെ വ്യാപാര പാതകളുടെ സുരക്ഷയാണ് യഥാർത്ഥ വികസനത്തിന് വഴിവെക്കുന്നതെന്നും ചോളന്മാർ പഠിപ്പിച്ചു."
        },
        {
          title: "വികേന്ദ്രീകൃത ജനാധിപത്യ ഭരണരീതി",
          content: "ഉത്തരമേരൂർ ശിലാശാസനങ്ങളിൽ വിവരിക്കുന്ന കുടവോല സമ്പ്രദായം വഴി ഗ്രാമങ്ങളിൽ അഴിമതിരഹിതമായ പ്രാദേശിക തിരഞ്ഞെടുപ്പ് വിജയകരമായി അക്കാലത്ത് നടപ്പിലാക്കി എന്ന് കാണാം."
        }
      ],
      timeline: [
        {
          date: "എ.ഡി. 850",
          title: "വിജയാലയ ചോളൻ തഞ്ചാവൂർ കീഴടക്കുന്നു",
          description: "മുത്തരായരിൽ നിന്ന് തഞ്ചാവൂർ പിടിച്ചെടുത്ത് മഹത്തായ സാമ്രാജ്യപ്പതാക ഉയർത്തി ചോള ചരിത്രത്തിന്റെ പുതിയ ഒരു കാലഘട്ടത്തിന് തുടക്കം കുറിച്ചു.",
          importance: "ചോള ചരിത്രത്തിന്റെ പുനരുജ്ജീവനത്തിന്റെ അടിത്തറയാണിത്.",
          location: "തഞ്ചാവൂർ, തമിഴ്നാട്"
        },
        {
          date: "എ.ഡി. 985 - 1014",
          title: "രാജരാജ ചോളൻ ഒന്നാമന്റെ ഭരണം, ബൃഹദീശ്വര ക്ഷേത്രം",
          description: "ഭരണ പരിഷ്കാരങ്ങളും ശാസ്ത്രീയ സർവ്വേകളും കൊണ്ടുവന്ന രാജരാജൻ 216 അടി ഉയരമുള്ള അദ്ഭുത നിർമ്മിതിയായ തഞ്ചാവൂർ വലിയ അമ്പലം നിർമ്മിച്ചു.",
          importance: "ക്ഷേത്രം വെറുമൊരു പ്രാർത്ഥനാസ്ഥലം എന്നതിലുപരി വലിയ സാമ്പത്തിക സ്ഥാപനം കൂടിയായിരുന്നു.",
          location: "തഞ്ചാവൂർ, ദക്ഷിണേന്ത്യ"
        },
        {
          date: "എ.ഡി. 1014 - 1044",
          title: "രാജേന്ദ്ര ചോളൻ ഒന്നാമന്റെ ഗംഗാ, കടാരം നാവിക പടയോട്ടം",
          description: "ഗംഗാ നദി വരെ ആക്രമിച്ചു ജയിച്ചു തലസ്ഥാനത്ത് വലിയ ജലസംഭരണി തീർക്കുകയും, ശ്രീവിജയ നാവികസേനയെ തോൽപ്പിച്ച് തങ്ങളുടെ പ്രാതിനിധ്യം പരത്തുകയും ചെയ്തു.",
          importance: "ഇന്ത്യൻ നാവിക ചരിത്രത്തിലെ പ്രതാപകാലം.",
          location: "ആഗ്നേയ ഏഷ്യയും ഗംഗൈകൊണ്ടചോളപുരവും"
        }
      ]
    }
  },
  vijayanagara: {
    en: {
      query: "The Vijayanagara Empire",
      language: "en",
      title: "The Vijayanagara Empire",
      nativeTitle: "விஜயநகரப் பேரரசு / విజయనగర సామ్రాజ్యం",
      era: "1336 CE to 1646 CE",
      summary: "Found on the southern banks of the Tungabhadra River by brothers Harihara and Bukka, the Vijayanagara Empire (meaning 'City of Victory') stood as a monumental synthesis of Deccan architecture, commerce, and defense. It served as a major regional shield defending Southern Indian arts, literatures, and cultures. At its peak under Emperor Krishnadevaraya, the empire carried on bustling trade with the Portuguese, Persians, and Chinese, while transforming the capital, Hampi, into one of the largest and most prosperous metropolises on earth, celebrated globally by visiting travelers.",
      lessons: [
        {
          title: "Administrative Devolution via Nayankara",
          content: "The territory was governed via the Nayankara system, where military chiefs (Nayakas) held lands and administrative responsibilities. While ensuring rapid mobilization, this demonstrates the power and vulnerability of decentralized military structures."
        },
        {
          title: "Resource Management in Arid Regions",
          content: "By engineering extensive networks of water tanks, step-wells (pushkarinis), and aqueducts, they turned dry, rocky terrains into rich fertile crop lands, a direct lesson in progressive resource resilience."
        }
      ],
      timeline: [
        {
          date: "1336 CE",
          title: "Founding of Vijayanagara by Sangama Brothers",
          description: "Harihara I and Bukka Raya I, under the spiritual guidance of Saint Vidyaranya of Sringeri, established the Vijayanagara dynasty at Hampi.",
          importance: "Secured a protective regional bulwark in Southern India during periods of severe geopolitical chaos.",
          location: "Hampi, Karnataka, India"
        },
        {
          date: "1509 CE - 1529 CE",
          title: "Reign of Emperor Krishnadevaraya",
          description: "The Tuluva dynasty ruler ascended the throne, launching triumphant military campaigns and presiding over the 'Prabandha' golden age of Telugu and Sanskrit literature.",
          importance: "Brought political cohesion, military dominance, and unrivaled artistic richness to South India.",
          location: "Hampi and South India"
        }
      ]
    },
    ta: {
      query: "The Vijayanagara Empire",
      language: "ta",
      title: "விஜயநகர பேரரசு",
      nativeTitle: "விஜயநகரப் பேரரசு",
      era: "கி.பி. 1336 முதல் 1646 வரை",
      summary: "துங்கபத்திரை ஆற்றின் தென்கரையில் ஹரிஹரர் மற்றும் புக்கர் ஆகிய சகோதரர்களால் தோற்றுவிக்கப்பட்டது இந்த சகாப்தம். 'வெற்றி நகரம்' என்று அழைக்கப்படும் விஜயநகரப் பேரரசு பண்பாடு, இலக்கியம் மற்றும் கடல் கடந்த வணிகத்தின் உறைவிடமாக விளங்கியது. கிருஷ்ணதேவராயரின் பொற்கால ஆட்சியில் இது உலக நாடுகள் வியக்கும் வண்ணம் செழித்தோங்கியது.",
      lessons: [
        {
          title: "நாயங்கார நிர்வாக அமைப்பு",
          content: "இராணுவத் தளபதிகளுக்கு நிலங்களைப் வழங்கிப் பாதுகாப்பை உறுதி செய்ததன் மூலம் துடிப்பான இரகசிய இராணுவப் பாதுகாப்பை நிலைநிறுத்தியது."
        }
      ],
      timeline: [
        {
          date: "கி.பி. 1336",
          title: "சங்கம சகோதரர்களால் பேரரசு தோற்றுவிக்கப்படுதல்",
          description: "வித்யாரண்யரின் ஆன்மீக வழிகாட்டுதலுடன் ஹரிஹரர் மற்றும் புக்கர் ஆகியோர் ஹம்பியைத் தலைநகராகக் கொண்டு ஆட்சியைத் தொடங்கினர்.",
          importance: "தென்னிந்தியாவின் கலை மற்றும் இறையாண்மையை மீட்டெடுத்தல்.",
          location: "ஹம்பி, கர்நாடகா"
        }
      ]
    },
    te: {
      query: "The Vijayanagara Empire",
      language: "te",
      title: "విజయనగర సామ్రాజ్య వైభవం",
      nativeTitle: "విజయనగర సామ్రాజ్యం",
      era: "క్రీ.శ. 1336 నుండి 1646 వరకు",
      summary: "తుంగభద్ర నది తీరాన హరిహర రాయలు మరియు బుక్క రాయలు అనే సోదరుల ద్వారా స్థాపించబడిన విజయనగర సామ్రాజ్యం (విజయ నగరం) గొప్ప వైభవాన్ని గడించింది. శ్రీకృష్ణదేవరాయల పాలనలో ఈ సామ్రాజ్యం పోర్చుగీసు, పర్షియా దేశాలతో వర్తక వ్యాపారాలు సాగించి ప్రపంచంలోనే అత్యంత సంపన్న నగరంగా కీర్తించబడింది.",
      lessons: [
        {
          title: "నాయంకర ఉమ్మడి సేవలు",
          content: "సైన్యాధ్యక్షులకు భూములివ్వడం మరియు స్థానిక శాంతి భద్రతలను వారికి అప్పగించడం ద్వారా పరిపాలనను విస్తృతం చేసింది."
        }
      ],
      timeline: [
        {
          date: "క్రీ.శ. 1336",
          title: "విజయనగర స్థాపన",
          description: "శృంగేరి విద్యాశంకరుల ఆశీస్సులతో హరిహర బుక్కరాయలు హంపి ప్రధాన కేంద్రంగా సామ్రాజ్యాన్ని నిర్మించారు.",
          importance: "దక్షిణ భారత సంస్కృతి పరిరక్షణకు ఆలంబన లభించింది.",
          location: "హంపి, కర్ణాటక"
        }
      ]
    },
    kn: {
      query: "The Vijayanagara Empire",
      language: "kn",
      title: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಇತಿಹಾಸ",
      nativeTitle: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯ",
      era: "೧೩೩೬ CE ರಿಂದ ೧೬೪೬ CE",
      summary: "ತುಂಗಭದ್ರಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿ ಹರಿಹರ ಮತ್ತು ಬುಕ್ಕರಾಯರಿಂದ ಸ್ಥಾಪನೆಯಾದ ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯವು ದಕ್ಷಿಣ ಭಾರತದ ಕಲೆ ಮತ್ತು ಅಸ್ಮಿತೆಯನ್ನು ಎತ್ತಿಹಿಡಿಯಿತು. ಕೃಷ್ಣದೇವರಾಯನ ಆಳ್ವಿಕೆಯಲ್ಲಿ ಇದು ಇಡೀ ವಿಶ್ವವೇ ನಿಬ್ಬೆರಗಾಗುವಂತೆ ಸಮೃದ್ಧವಾಗಿ ವೈಭವೋಪೇತ ನಗರವಾಗಿ ಹೊರಹೊಮ್ಮಿತು.",
      lessons: [
        {
          title: "ನೀರಿನ ಸಂರಕ್ಷಣೆ ಮತ್ತು ನೀರಾವರಿ ಕ್ರಾಂತಿ",
          content: "ಹಂಪಿಯ ಸುತ್ತಮುತ್ತ ಜಲಾಶಯಗಳು, ಕಾಲುವೆಗಳು ಮತ್ತು ಕಲ್ಯಾಣಿಗಳನ್ನು ನಿರ್ಮಿಸಿ ಕೃಷಿಯನ್ನು ಉನ್ನತೀಕರಿಸಿದರು."
        }
      ],
      timeline: [
        {
          date: "೧೩೩೬",
          title: "ಹಂಪಿ ರಾಜಧಾನಿ ನಿರ್ಮಾಣ ಹಾಗೂ ಸಾಮ್ರಾಜ್ಯದ ಹುಟ್ಟು",
          description: "ವಿದ್ಯಾರಣ್ಯರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಸಂಗಮ ಸಹೋದರರು ಸಾಮ್ರಾಜ್ಯದ ಉದ್ಘಾಟನೆ ಕೈಗೊಂಡರು.",
          importance: "ದಕ್ಷಿಣ ಭಾರತ ರಾಜಕೀಯ ಮತ್ತು ಕಲೆಯ ಉನ್ನತಿ.",
          location: "ಹಂಪಿ, ಕರ್ನಾಟಕ"
        }
      ]
    },
    ml: {
      query: "The Vijayanagara Empire",
      language: "ml",
      title: "വിജയനഗര സാമ്രാജ്യത്തിന്റെ ചരിത്രം",
      nativeTitle: "വിജയനഗര സാമ്രാജ്യം",
      era: "എ.ഡി. 1336 മുതൽ 1646 വരെ",
      summary: "തുങ്ഭദ്ര നദിയുടെ തെക്കേത്തീരത്ത് ഹരിഹരൻ, ബുക്കൻ എന്നീ സഹോദരന്മാരാൽ സ്ഥാപിതമായ വിജയനഗര സാമ്രാജ്യം ദക്ഷിണേന്ത്യൻ സംസ്കാരത്തിന്റെ സംരക്ഷകരായി മാറി. കൃഷ്ണദേവരായരുടെ ഭരണകാലത്ത് വലിയ പ്രശസ്തി നേടി.",
      lessons: [
        {
          title: "ജലസംരക്ഷണ രീതികൾ",
          content: "ഹംപി പോലെയുള്ള വരണ്ട പാറപ്രദേശങ്ങളിൽ കുളങ്ങളും ചാലുകളും നിർമ്മിച്ച് കൃഷി പ്രോത്സാഹിപ്പിച്ചു."
        }
      ],
      timeline: [
        {
          date: "എ.ഡി. 1336",
          title: "വിജയനഗര സാമ്രാജ്യ സ്ഥാപനം",
          description: "വിദ്യാരണ്യ സ്വാമികളുടെ അനുഗ്രഹത്തോടെ സഹോദരന്മാർ സംയുക്തമായി ഭരണം തുടങ്ങി.",
          importance: "ദക്ഷിണേന്ത്യയിലെ മികച്ച കലാ സാംസ്കാരിക സുവർണ്ണകാലം.",
          location: "ഹംപി, കർണാടക"
        }
      ]
    }
  },
  talikota: {
    en: {
      query: "Battle of Talikota 1565",
      language: "en",
      title: "Battle of Talikota 1565",
      nativeTitle: "தலைக்கோட்டைப் போர் 1565 / తళ్ళికోట యుద్ధము 1565",
      era: "January 23 - 26, 1565 CE",
      summary: "The Battle of Talikota was a critical watershed clash in South Indian medieval history. It was fought between the active armies of the Vijayanagara Empire (led by the octogenarian Prime Minister Aliya Rama Raya) and the combined allied forces of the Deccan Sultanates (Golconda, Bijapur, Ahmadnagar, and Bidar). Despite having numerical advantages, Vijayanagara suffered sudden, catastrophic defeat due to tactical betrayals by key mercenary commanders. This immediate defeat led directly to the looting and ultimate ruin of the capital city, Hampi.",
      lessons: [
        {
          title: "Mercenary Fragility & Loyalty Risk",
          content: "Relying heavily on foreign or mercenary commanders (specifically the Gilani brothers who switched sides during battle) exposes military enterprises to high, unhedged risks during critical moments."
        }
      ],
      timeline: [
        {
          date: "January 1565",
          title: "Forces Assemble on the Banks of Krishna River",
          description: "The armies of Vijayanagara and the Deccan alliance met along the northern borders to stage the decisive defense of the Deccan plateau.",
          importance: "It marked the biggest assembly of fire-arms and artillery weapons seen in South India up to that era.",
          location: "Talikota (Rakkasagi-Tangadagi), Karnataka"
        }
      ]
    },
    ta: {
      query: "Battle of Talikota 1565",
      language: "ta",
      title: "தலைக்கோட்டைப் போர் 1565",
      nativeTitle: "தலைக்கோட்டைப் போர் 1565",
      era: "கி.பி. 1565, ஜனவரி 26",
      summary: "விஜயநகரப் பேரரசுக்கும் தக்காண சுல்தான்களின் கூட்டுப் படைகளுக்கும் இடையே நடைபெற்ற மிக முக்கியமான போர் இத்தலைக்கோட்டைப் போர் ஆகும். நம்பகமற்ற சில தளபதிகளின் துரோகத்தால் விஜயநகரம் வீழ்ந்து, அதன் தலைநகரான ஹம்பி சூறையாடப்பட்டது.",
      lessons: [
        {
          title: "இராணுவப் படைகளின் நம்பகத்தன்மை",
          content: "அந்நிய இராணுவ வீரர்கள் மற்றும் பிற மொழி தளபதிகளை அதிகம் நம்புவது போர்க்காலத்தில் பெரும் பின்னடைவை உருவாக்கும் என்று உணர்த்துகிறது."
        }
      ],
      timeline: [
        {
          date: "கி.பி. 1565",
          title: "தலைக்கோட்டையில் நடைபெற்ற கொடூரப் போர்",
          description: "இரு தரப்பு இராணுவங்களும் கிருஷ்ணா நதிக்கரையில் மோதிக்கொண்டன.",
          importance: "ஹம்பியின் வீழ்ச்சிக்கும் விஜயநகர ஆட்சியின் மாற்றத்திற்கும் வழிவகுத்தது.",
          location: "தலைக்கோட்டை, கர்நாடகா"
        }
      ]
    },
    te: {
      query: "Battle of Talikota 1565",
      language: "te",
      title: "తళ్ళికోట యుద్ధము 1565",
      nativeTitle: "తళ్ళికోట యుద్ధము 1565",
      era: "క్రీ.శ. 1565, జనవరి 26",
      summary: "తళ్ళికోట యుద్ధం సుప్రసిద్ధ విజయనగర సామ్రాజ్య పతనానికి దారితీసిన విషాదకర సంఘటన. దక్కన్ సుల్తానుల ఉమ్మడి సైన్యంతో జరిగిన ఈ యుద్ధంలో గిలానీ సోదరుల ద్రోహం వల్ల విజయనగర సైన్యం పరాజయం పాలైంది, తద్వారా హంపి నగరం నేలమట్టమైంది.",
      lessons: [
        {
          title: "కూటమి రాజకీయం & విశ్వసనీయత",
          content: "నమ్మకద్రోహులను మరియు పరాయి సైనిక బలగాలను గుడ్డిగా నమ్మడం వల్ల అత్యవసర వేళల్లో పెను నష్టం సంభవిస్తుంది."
        }
      ],
      timeline: [
        {
          date: "క్రీ.శ. 1565",
          title: "నదీతీరాన చారిత్రక సుదీర్ఘ ఘర్షణ",
          description: "కృష్ణా నది ఒడ్డున రాక్షస-తంగడి వద్ద ఇరు పక్షాలు హోరాహోరీగా తలపడ్డాయి.",
          importance: "దక్షిణ భారత మధ్యయుగ చరిత్రలోనే అతి పెద్ద రాజకీయ సంక్షోభం.",
          location: "తళ్ళికోట, కర్ణాటక సరిహద్దులు"
        }
      ]
    },
    kn: {
      query: "Battle of Talikota 1565",
      language: "kn",
      title: "ತಾಳಿಕೋಟೆಯ ಕದನ 1565",
      nativeTitle: "ತಾಳಿಕೋಟೆಯ ಕದನ (ರಾಕ್ಷಸ-ತಂಗಡಿ ಕದನ)",
      era: "೧೫೬೫",
      summary: "ತಾಳಿಕೋಟೆ ಕದನವು ವಿಜಯನಗರದ ಭವಿಷ್ಯವನ್ನೇ ಬದಲಾಯಿಸಿತು. ಬಹಮನಿ ಸುಲ್ತಾನರ ಒಕ್ಕೂಟ ಹಾಗೂ ರಾಮರಾಯನ ಸೈನ್ಯದ ನಡುವೆ ನಡೆದ ಈ ಕದನದಲ್ಲಿ ಹಂಪಿ ಪೂರ್ಣವಾಗಿ ಮೂಲೆಗುಂಪಾಯಿತು.",
      lessons: [
        {
          title: "ನಂಬಿಕೆ ದ್ರೋಹದ ಭೀತಿ",
          content: "ಯುದ್ಧದ ನಿರ್ಣಾಯಕ ಹಂತದಲ್ಲಿ ಸೈನ್ಯ ವಿಭಜನೆ ಹಾಗೂ ಕೂಟ ಸೇನೆಯ ವಿಶ್ವಾಸದ್ರೋಹ ರಾಷ್ಟ್ರದ ಅಳಿವು ತರಬಲ್ಲದು."
        }
      ],
      timeline: [
        {
          date: "೧೫೬೫",
          title: "ರಾಕ್ಷಸ ತಂಗಡಿ ಕದನ ಹಾಗೂ ದುರಂತ ಅಂತ್ಯ",
          description: "ಹಂಪಿಯ ಭವ್ಯ ಕೋಟೆಗಳು ಸುಲ್ತಾನರ ದಾಳಿಗೆ ತುತ್ತಾಗಿ ಹಾಳಾದವು.",
          importance: "ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಸಂಪೂರ್ಣ ಪ್ರಸಿದ್ಧಿಯ ಅಂತ್ಯ.",
          location: "ತಾಳಿಕೋಟೆ, ಕರ್ನಾಟಕ"
        }
      ]
    },
    ml: {
      query: "Battle of Talikota 1565",
      language: "ml",
      title: "തളിക്കോട്ട യുദ്ധം 1565",
      nativeTitle: "തളിക്കോട്ട യുദ്ധം",
      era: "എ.ഡി. 1565 ജനവരി 26",
      summary: "വിജയനഗര സാമ്രാജ്യത്തിന്റെ പതനത്തിന് കാരണമായ വലിയ യുദ്ധമാണ് തളിക്കോട്ട യുദ്ധം. കൃഷ്ണ നദീതീരത്ത് വെച്ച് നടന്ന വലിയ കൂട്ടക്കൊലയിലൂടെ ഹംപി തകർക്കപ്പെട്ടു.",
      lessons: [
        {
          title: "കൂട്ടായ ആക്രമണം",
          content: "സൈന്യങ്ങളുടെ വിശ്വാസ്യതയും ഐക്യവും യുദ്ധമുഖത്ത് എത്രത്തോളം പ്രാധാന്യമുള്ളതാണ് എന്ന് ഇത് ഓർമ്മിപ്പിക്കുന്നു."
        }
      ],
      timeline: [
        {
          date: "എ.ഡി. 1565",
          title: "രാക്ഷസ-തങ്കടി യുദ്ധമുഖം",
          description: "ബഹമനി സുൽത്താൻമാരുടെ സുസംഘടിത സൈന്യം ഒത്തുചേർന്ന് ആക്രമിച്ചു.",
          importance: "ഹമ്പിയുടെ നാശത്തിലേക്ക് വഴിതെളിച്ചു.",
          location: "തളിക്കോട്ട, കർണാടക"
        }
      ]
    }
  },
  pallavas: {
    en: {
      query: "Pallava Art and Mahabalipuram",
      language: "en",
      title: "Pallava Art and Mahabalipuram",
      nativeTitle: "பல்லவர் கலை மற்றும் மாமல்லபுரம்",
      era: "3rd Century to 9th Century CE",
      summary: "The Pallava dynasty governed northern Tamil Nadu and parts of Andhra Pradesh, leaving a permanent legacy in subcontinental stone architecture. From simple rock-cut cave shrines under Mahendravarman I, to the stunning monolithic Rathas (chariots) and the coastal Shore Temple in Mahabalipuram commissioned by Narasimhavarman I and II, they laid the stylistic foundation of Dravidian architecture. Mahabalipuram served as a legendary maritime port city, connecting South Indian merchants directly with South East Asia and China.",
      lessons: [
        {
          title: "Artistic Expression as Political Identity",
          content: "The Pallavas transformed sheer rocks into enduring, beautiful story panels (such as 'Arjuna's Penance') proving that intellectual expression and soft-power artistic creation strengthen a regime's diplomatic historical standing."
        }
      ],
      timeline: [
        {
          date: "640 CE",
          title: "Initiation of Monolithic Rathas at Mamallapuram",
          description: "King Narasimhavarman I, also known as 'Mamalla' (the Great Wrestler), commissioned the carving of monolithic stone Rathas from solitary granite outcrops.",
          importance: "This style bypassed structural assembly, proving masterful subtractive stone engineering at scale.",
          location: "Mahabalipuram, Tamil Nadu"
        }
      ]
    },
    ta: {
      query: "Pallava Art and Mahabalipuram",
      language: "ta",
      title: "பல்லவர் கலை மற்றும் மாமல்லபுரம்",
      nativeTitle: "பல்லவர் கலை மற்றும் மாமல்லபுரம்",
      era: "கி.பி. 3-ஆம் நூற்றாண்டு முதல் 9-ஆம் நூற்றாண்டு வரை",
      summary: "பல்லவ மன்னர்கள் தென்னிந்தியக் குகைக் கோயில் மற்றும் குடைவரைக் கலைகளின் முன்னோடிகளாவர். மாமல்லபுரத்து ஒற்றைக்கல் இரதங்கள் மற்றும் கடற்கரைக் கோயில் ஆகியவை இவர்களின் உன்னத கலைக்கண்ணோக்கிற்குச் சான்றுகளாகும்.",
      lessons: [
        {
          title: "கலை மற்றும் கலாச்சாரத் தூதுமை",
          content: "பாறைகளை ஓவியங்களாகவும் சிற்பங்களாகவும் வடிவமைத்ததன் மூலம் பல்லவர்கள் தங்களை உலக அரங்கில் கலாச்சார அடையாளமாக நிலைநிறுத்தினர்."
        }
      ],
      timeline: [
        {
          date: "கி.பி. 640",
          title: "மாமல்லபுரம் ஒற்றைக்கல் இரதங்கள் செதுக்கப்படுதல்",
          description: "நரசிம்மவர்ம பல்லவன் மிக நேர்த்தியான பஞ்ச பாண்டவ இரதங்களை ஒரே கல்லில் வடித்தார்.",
          importance: "இந்திய கட்டிடக்கலையின் உன்னத மைல்கல்.",
          location: "மாமல்லபுரம், தமிழ்நாடு"
        }
      ]
    },
    te: {
      query: "Pallava Art and Mahabalipuram",
      language: "te",
      title: "పల్లవ కళ మరియు మహాబలిపురం",
      nativeTitle: "పల్లవ కళ మరియు మహాబలిపురం",
      era: "3వ శతాబ్దం నుండి 9వ శతాబ్దం వరకు",
      summary: "పల్లవులు రాతి శిల్పకళను సమున్నత స్థాయికి తీసుకెళ్లిన శిల్పకళా ప్రవీణులు. మహాబలిపురంలోని ఏకశిలా రథాలు మరియు తీర దేవాలయాలు ప్రాచీన పల్లవ శిల్ప నైపుణ్యానికి నిదర్శనాలు. ఆ రోజుల్లో మహాబలిపురం చైనాతో వాణిజ్య సంబంధాలు నడిపిన ప్రముఖ ఓడరేవు.",
      lessons: [
        {
          title: "శిల్పకళ ద్వారా సాంస్కృతిక బ్రాండింగ్",
          content: "నిర్జీవ శిలలను సజీవ కళాఖండాలుగా మార్చి పల్లవులు తమ శాశ్వత కీర్తిని నిర్మించుకున్నారు."
        }
      ],
      timeline: [
        {
          date: "క్రీ.శ. 640",
          title: "ఏకశిలా రథాల నిర్మాణం",
          description: "మొదటి నరసింహవర్మన్ లేదా 'మామల్ల' మహాబలిపురంలో ఏకశిలా రథాలను చెక్కడం ప్రారంభించారు.",
          importance: "రాతిని తొలిచే కళా నైపుణ్య అభివృద్ధికి ఇది నాంది.",
          location: "మహాబలిపురం, తమిళనాడు"
        }
      ]
    },
    kn: {
      query: "Pallava Art and Mahabalipuram",
      language: "kn",
      title: "ಪಲ್ಲವ ಕಲೆ ಮತ್ತು ಮಹಾಬಲಿಪುರಂ",
      nativeTitle: "ಪಲ್ಲವ ಶೈಲಿಯ ಕಲೆಗಳು",
      era: "೩ನೇ ಶತಮಾನದಿಂದ ೯ನೇ ಶತಮಾನ",
      summary: "ಪಲ್ಲವರು ದ್ರಾವಿಡ ಶೈಲಿಯ ವಾಸ್ತುಶಿಲ್ಪಕ್ಕೆ ಉತ್ತಮ ಕೊಡುಗೆ ನೀಡಿದರು. ಮಹಾಬಲಿಪುರದ ಪಂಚರಥಗಳು ಮತ್ತು ಸಮುದ್ರ ತಟದ ದೇಗುಲಗಳು ಇತಿಹಾಸಕ್ಕೆ ಇವರ ಧೀಮಂತ ಕೊಡುಗೆಗಳಾಗಿವೆ.",
      lessons: [
        {
          title: "ಕಲೆಯ ಮೂಲಕ ಸಾರ್ವಭೌಮತ್ವ",
          content: "ಬಂಡೆಗಳನ್ನು ಕಡೆದು ನಟರಾಜ, ಭಗೀರಥ ತಪಸ್ಸಿನಂತಹ ಅದ್ಭುತ ಕಲಾ ರಚನೆಗಳ ಮೂಲಕ ಸಾರ್ವಕಾಲಿಕ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಯನ್ನು ಕಾಪಾಡಿದರು."
        }
      ],
      timeline: [
        {
          date: "೬೪೦ CE",
          title: "ಪಂಚ ರಥಗಳ ಕೆತ್ತನೆ ಆರಂಭ",
          description: "ರಾಜ ನರಸಿಂಹವರ್ಮನ್ ಹಡಗು ಬಂದರಿನ ತಟದಲ್ಲಿ ಜಗತ್ ಪ್ರಸಿದ್ಧ ಕಲ್ಲಿನ ರಥಗಳನ್ನು ನಿರ್ಮಿಸಿದನು.",
          importance: "ದ್ರಾವಿಡ ಶಿಲ್ಪಕಲೆಗೆ ಶೈಕ್ಷಣಿಕ ಹೊಸ ರೂಪ ನೀಡಿಕೆ.",
          location: "ಮಹಾಬಲಿಪುರಂ, ತಮಿಳುನಾಡು"
        }
      ]
    },
    ml: {
      query: "Pallava Art and Mahabalipuram",
      language: "ml",
      title: "പല്ലവ കലയും മഹാബലിപുരവും",
      nativeTitle: "പല്ലവ കല",
      era: "എ.ഡി. 3-ാം നൂറ്റാണ്ട് മുതൽ 9-ാം നൂറ്റാണ്ട് വരെ",
      summary: "പല്ലവ രാജാക്കന്മാർ നിർമ്മിച്ച മഹാബലിപുരത്തെ തീരദേശ ക്ഷേത്രങ്ങളും പത്മരഥങ്ങളും ദക്ഷിണേന്ത്യൻ വാസ്തുവിദ്യയുടെ വിസ്മയങ്ങളാണ്. ഇവിടുത്തെ കല്ലിൽ തീർത്ത ശില്പങ്ങൾ ഇന്നും അദ്ഭുതമായി നിലനിൽക്കുന്നു.",
      lessons: [
        {
          title: "കലാപരമായ വൈദഗ്ദ്ധ്യം",
          content: "കല്ലുകളെ മനോഹരമായ ചരിത്ര കാവ്യങ്ങളാക്കി മാറ്റിയ പല്ലവർ മികച്ച പ്രോത്സാഹനമാണ് നൽകിയത്."
        }
      ],
      timeline: [
        {
          date: "എ.ഡി. 640",
          title: "ഒറ്റക്കല്ലിൽ പണിത രഥങ്ങൾ",
          description: "നരസിംഹവർമൻ ഒന്നാമൻ ഒരൊറ്റ പാറയിൽ മഹാബലിപുരത്ത് സുന്ദര ശില്പം കൊത്തിയെടുത്തു.",
          importance: "വാസ്തുവിദ്യയുടെ ഉത്തമമാതൃക.",
          location: "മഹാബലിപുരം, തമിഴ്നാട്"
        }
      ]
    }
  },
  maruthu_pandiyar: {
    en: {
      query: "Maruthu Pandiyar & South Indian Rebellion",
      language: "en",
      title: "Maruthu Pandiyar & South Indian Rebellion",
      nativeTitle: "மருது பாண்டியர்கள் மற்றும் தென்னிந்திய கிளர்ச்சி",
      era: "Late 18th Century (1780 - 1801 CE)",
      summary: "The Maruthu Pandiyars, Periya Maruthu and Chinna Maruthu, were pioneering freedom fighters who governed Sivagangai with administrative brilliance. They actively led the South Indian Rebellion of 1800-1801 alongside Veerapandiya Kattabomman's sibling Oomathurai and Dheeran Chinnamalai. They issued the historic 'Trichinopoly Proclamation' of 1801 which served as the first written call for subcontinental integration and rebellion against British East India Company colonial rule.",
      lessons: [
        {
          title: "Strategic Alliance Integration",
          content: "They demonstrated that regional differences must be set aside to construct a unified front against exploitation, forming an alliance of resistance across vast distinct dynasties."
        }
      ],
      timeline: [
        {
          date: "June 1801",
          title: "The Trichinopoly Proclamation of 1801",
          description: "Chinna Maruthu issued an open call of rebellion, pasting sheets on the walls of the Srirangam Temple and Tiruchirappalli Fort demanding absolute sovereignty and unity against British East India Company rule.",
          importance: "It is globally documented as the first collective nationalistic call urging regional native states to repel European colonizers.",
          location: "Tiruchirappalli (Trichy), South India"
        }
      ]
    },
    ta: {
      query: "Maruthu Pandiyar & South Indian Rebellion",
      language: "ta",
      title: "மருது பாண்டியர்கள் மற்றும் தென்னிந்திய கிளர்ச்சி",
      nativeTitle: "மருது பாண்டியர்கள் மற்றும் தென்னிந்திய கிளர்ச்சி",
      era: "கி.பி. 18-ஆம் நூற்றாண்டின் பிற்பகுதி (1780 - 1801)",
      summary: "மருது சகோதரர்கள் சிவகங்கையை ஆண்ட மாவீரர்களாவர். ஆங்கிலேயக் கிழக்கிந்திய கம்பெமியின் கொடுங்கோல் ஆட்சிக்கு எதிராகத் தென்னிந்திய கிளர்ச்சியைக் கூட்டாகத் திரட்டி, 1801-ல் வரலாற்றுச் சிறப்புமிக்க 'திருச்சி பிரகடனத்தை' வெளியிட்டனர்.",
      lessons: [
        {
          title: "மக்களின் ஒருங்கிணைப்பு மற்றும் புரட்சி",
          content: "சாதி மற்றும் பிராந்திய எல்லைகளைக் கடந்து, அந்நிய ஆதிக்கத்திற்கு எதிராக ஒன்றிணைந்த போராட்டமே வெற்றி தரும் என்பதை இவர்கள் மெய்ப்பித்தனர்."
        }
      ],
      timeline: [
        {
          date: "ஜூன் 1801",
          title: "திருச்சி பிரகடனம் வெளியிடப்படல்",
          description: "ஸ்ரீரங்கம் கோயில் மற்றும் திருச்சி கோட்டைச் சுவர்களில் ஆங்கிலேயர்களுக்கு எதிரான எதிர்ப்பு அறிக்கை ஒட்டப்பட்டது.",
          importance: "இந்திய மண்ணில் ஆங்கிலேயரை எதிர்க்க விடுக்கப்பட்ட முதல் மக்கள் பிரகடனம்.",
          location: "திருச்சிராப்பள்ளி, தமிழ்நாடு"
        }
      ]
    },
    te: {
      query: "Maruthu Pandiyar & South Indian Rebellion",
      language: "te",
      title: "మరుదు పాండియార్ తిరుగుబాటు",
      nativeTitle: "మరుదు పాండియార్ తిరుగుబాటు",
      era: "18వ శతాబ్దం చివరలో (1780 - 1801 క్రీ.శ.)",
      summary: "శివగంగ ప్రాంతాన్ని పాలించిన మరుదు సోదరులు (పెరియ మరుదు మరియు చిన్న మరుదు) బ్రిటిష్ వారి దాస్య శృంఖలాలకు వ్యతిరేకంగా తిరుగుబాటు బావుటా ఎగరేశారు. వీరు 1801 లో విప్లవాత్మక 'త్రిచినోపల్లి ప్రకటన' విడుదల చేశారు, ఇది భారతదేశంలో బ్రిటిష్ పాలనకు వ్యతిరేకంగా స్వదేశీయులను ఏకం చేసిన తొలి రికార్డు పత్రం.",
      lessons: [
        {
          title: "సమిష్టి విప్లవాత్మక కూటమి",
          content: "బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ వ్యతిరేక పోరాటంలో భిన్న రాజ్యాలను ఏకతాటిపైకి తెచ్చి సంఘటిత శక్తిని చూపించారు."
        }
      ],
      timeline: [
        {
          date: "జూన్ 1801",
          title: "చారిత్రాత్మక త్రిచినోపల్లి ప్రకటన",
          description: "శ్రీరంగం దేవాలయ గూడులు మరియు త్రిచినోపల్లి కోట గోడలపై స్వదేశీయులను ఏకంచేస్తూ చిన్న మరుదు ప్రకటన అతికించారు.",
          importance: "భారతీయ స్వాతంత్ర్య సమరంలో బ్రిటీష్ వారికి వ్యతిరేకంగా వ్రాయబడిన తొలి జాతీయవాద పిలుపు.",
          location: "తిరుచిరాపల్లి, తమిళనాడు"
        }
      ]
    },
    kn: {
      query: "Maruthu Pandiyar & South Indian Rebellion",
      language: "kn",
      title: "ಮರುದು ಪಾಂಡ್ಯರ್ ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದ ದಂಗೆ",
      nativeTitle: "ಮರುದು ಸಹೋದರರು ಮತ್ತು ದಂಗೆಯ ನೆನಪು",
      era: "೧೮ನೇ ಶತಮಾನದ ಅಂತ್ಯ (೧೭೮೦ - ೧೮೦೧)",
      summary: "ಶಿವಗಂಗೆಯ ಆಡಳಿತಗಾರರಾದ ಮರುದು ಸಹೋದರರು ಬ್ರಿಟಿಷ್ ಭಾರತದ ವಿರುದ್ಧ ಧೀರ ಕದನ ಸಾರಿದರು. ೧೮೦೧ರಲ್ಲಿ ಅವರು ಹೊರಡಿಸಿದ 'ತ್ರಿಚಿನೋಪಲ್ಲಿ ಜಂಟಿ ಘೋಷಣೆ' ಬ್ರಿಟಿಷರ ವಿರುದ್ಧ ಭಾರತೀಯ ನಾಯಕರನ್ನೆಲ್ಲಾ ಒಟ್ಟುಗೂಡಿಸಲು ಯತ್ನಿಸಿತು.",
      lessons: [
        {
          title: "ಸ್ವಾತಂತ್ರ್ಯದ ಮೊದಲ ಕಹಳೆ",
          content: "ವಿದೇಶಿ ಶಕ್ತಿಗಳನ್ನು ಉಚ್ಛಾಟಿಸಲು ಸ್ಥಳೀಯ ಸಂಸ್ಥಾನಗಳು ಒಂದಾಗಿ ಹೋರಾಡುವುದು ಅವಶ್ಯ ಎಂದು ಮರುದು ಸಹೋದರರು ಸಾರಿದರು."
        }
      ],
      timeline: [
        {
          date: "೧೮೦೧",
          title: "ತ್ರಿಚಿನೋಪಲ್ಲಿ ದಂಗೆಯ ಪ್ರತಿಜ್ಞಾ ಪತ್ರ",
          description: "ಬ್ರಿಟಿಷ್ ಅಧಿಕಾರಿಗಳನ್ನು ದೇಶದಿಂದ ಓಡಿಸಲು ಶ್ರೀರಂಗಂ ದೇವಸ್ಥಾನದ ಗೋಡೆಗಳ ಮೇಲೆ ಪ್ರತಿಜ್ಞಾಪತ್ರ ಲಗತ್ತಿಸಿದರು.",
          importance: "ಸಂಘಟಿತ ದಕ್ಷಿಣ ಭಾರತೀಯ ಮೊಟ್ಟಮೊದಲ ಕ್ರಾಂತಿಕಾರಿ ಸ್ವಾತಂತ್ರ್ಯ ಯತ್ನ.",
          location: "ತಿರುಚಿರಾಪಳ್ಳಿ, ತಮಿಳುನಾಡು"
        }
      ]
    },
    ml: {
      query: "Maruthu Pandiyar & South Indian Rebellion",
      language: "ml",
      title: "മരുതു പാണ്ഡ്യരും ദക്ഷിണേന്ത്യൻ കലാപവും",
      nativeTitle: "മരുതു പാണ്ഡ്യർ",
      era: "എ.ഡി. 18-ാം നൂറ്റാണ്ടിന്റെ അവസാനം",
      summary: "ശിവഗംഗ വീരഭരണാധികാരികളായ മരുതു സഹോദരന്മാർ ഇംഗ്ലീഷ് ഈസ്റ്റ് ഇന്ത്യാ കമ്പനിക്കെതിരെ ആദ്യമായി ശക്തമായ സായുധ പോരാട്ടത്തിന് നേതൃത്വം നൽകി. 1801-ലെ ഇവരുടെ 'തൃച്ചി പ്രഖ്യാപനം' വിപ്ലവകാരികൾക്ക് വലിയ ഊർജ്ജം പകർന്നു.",
      lessons: [
        {
          title: "ഇന്ത്യൻ സ്വാതന്ത്ര്യസമരം",
          content: "ആദ്യമായി വിദേശ ശക്തികളെ തുരത്താൻ നാട്ടുരാജ്യങ്ങളുടെ യോജിപ്പ് ആവശ്യമാണ് എന്ന് പ്രഖ്യാപിച്ചു."
        }
      ],
      timeline: [
        {
          date: "എ.ഡി. 1801",
          title: "തൃച്ചി വിപ്ലവ പ്രഖ്യാപനം",
          description: "ആംഗ്ലേയര ഭരണത്തിന് എതിരെ ശ്രീരംഗം ക്ഷേത്രചുമരിൽ മരുതു പാണ്ഡ്യൻ വിപ്ലവ നോട്ടീസ് പതിച്ചു.",
          importance: "ഇന്ത്യയിലെ ആദ്യത്തെ വിപ്ലവകരമായ സന്ദേശം.",
          location: "തിരുച്ചിറപ്പള്ളി, തമിഴ്നാട്"
        }
      ]
    }
  },
  roman_empire: {
    en: {
      query: "The Fall of the Roman Empire",
      language: "en",
      title: "The Fall of the Roman Empire",
      nativeTitle: "ரோமானிய பேரரசின் வீழ்ச்சி / రోమన్ సామ్రాజ్య పతనం",
      era: "395 CE to 476 CE",
      summary: "The Fall of the Western Roman Empire was a massive, decades-long systemic collapse rather than a single event. Pressured by successive waves of migrating Germanic tribes ('barbarians' like the Goths and Vandals), crippled by economic hyper-inflation, excessive military over-stretch, heavy reliance on mercenaries, and administrative decadence, the empire gradually fragmented. The final blow fell in 476 CE when Germanic Chieftain Odoacer deposed the last Roman child-emperor, Romulus Augustulus, ushering the European continent into the fragmented Feudal Middle Ages.",
      lessons: [
        {
          title: "Fiscal Control & Anti-inflationary Protocols",
          content: "The debasement of silver Roman denarii currency directly triggered extreme hyper-inflation, proving that fiscal discipline and absolute asset transparency form the life-support of any stable state."
        }
      ],
      timeline: [
        {
          date: "476 CE",
          title: "Deposition of Romulus Augustulus by Odoacer",
          description: "Germanic mercenary commander Odoacer deposed the young Roman Emperor Romulus Augustulus and refused to recognize another Roman claimant.",
          importance: "Traditionally marks the formal dissolution of the Western Roman administrative state, signaling the dawn of tribal European feudalism.",
          location: "Ravenna, Italy"
        }
      ]
    },
    ta: {
      query: "The Fall of the Roman Empire",
      language: "ta",
      title: "ரோமானிய பேரரசின் வீழ்ச்சி",
      nativeTitle: "ரோமானிய பேரரசின் வீழ்ச்சி",
      era: "கி.பி. 395 முதல் 476 வரை",
      summary: "ரோமானிய பேரரசின் வீழ்ச்சி உலக வரலாற்றை மாற்றியமைத்தது. பொருளாதார வீழ்ச்சி, ஊழல் மற்றும் ஜெர்மானிய பழங்குடியினரின் தொடர் படையெடுப்புகளால் பிரமாண்ட ரோமானிய சாம்ராஜ்யம் சிதைந்தது.",
      lessons: [
        {
          title: "பொருளாதார ஸ்திரத்தன்மை",
          content: "அதிகப்படியான பணவீக்கம் மற்றும் நாணய மதிப்பிழப்பு ஆகியவை பேரரசைக் காப்பாற்ற முடியாத அளவிற்குச் சிதைக்கும் என்பதைப் பறைசாற்றுகிறது."
        }
      ],
      timeline: [
        {
          date: "கி.பி. 476",
          title: "கடைசி பேரரசர் ரொமுலஸ் அகஸ்டுலஸ் பதவி நீக்கம்",
          description: "ஜெர்மானிய தளபதி ஒடோவாகர் கடைசி ரோமானிய பேரரசரை நீக்கினார்.",
          importance: "மேற்கு ரோமானிய பேரரசின் அதிகாரப்பூர்வ இறுதி முடிவு.",
          location: "ரவென்னா, இத்தாலி"
        }
      ]
    },
    te: {
      query: "The Fall of the Roman Empire",
      language: "te",
      title: "రోమన్ సామ్రాజ్య పతనం",
      nativeTitle: "రోమన్ సామ్రాజ్య పతనం",
      era: "క్రీ.శ. 395 నుండి 476 వరకు",
      summary: "ప్రాచీన రోమన్ సామ్రాజ్య పతనం అంతర్గత ఆర్థిక సంక్షోభం, ద్రవ్యోల్బణం, లంచగొండితనం మరియు జర్మానిక్ తెగల దాడుల వల్ల క్రమంగా సంభవించింది. 476 క్రీ.శ.లో చివరి రోమన్ చక్రవర్తి రోములస్ అగస్టలస్‌ పతనం అవడంతో ఐరోపా అజ్ఞాత మధ్యయుగంలోకి ప్రవేశించింది.",
      lessons: [
        {
          title: "ద్రవ్య నియంత్రణ & సుస్థిరత",
          content: "రోమన్ నాణేల విలువ క్షీణించడం వల్ల కలిగిన తీవ్ర ఆర్థిక నష్టాలు దేశాల పతనానికి కారణమవుతాయి."
        }
      ],
      timeline: [
        {
          date: "క్రీ.శ. 476",
          title: "ఒడోయాకర్ చేతిలో చక్రవర్తి పదవీచ్యుతుడు",
          description: "జర్మానిక్ సేనాపతి ఒడోయాకర్ చివరి రోమన్ చక్రవర్తి అయిన రోములస్ ను తొలగించారు.",
          importance: "పాశ్చాత్య రోమన్ సామ్రాజ్య వ్యవస్థ అధికారికంగా సమాప్తమైంది.",
          location: "రావెన్నా, ఇటలీ"
        }
      ]
    },
    kn: {
      query: "The Fall of the Roman Empire",
      language: "kn",
      title: "ರೋಮನ್ ಸಾಮ್ರಾಜ್ಯದ ಪತನ",
      nativeTitle: "ರೋಮನ್ ಯುಗದ ಅಂತ್ಯ",
      era: "೩೯೫ ರಿಂದ ೪೭೬ CE",
      summary: "ರೋಮನ್ ಸಾಮ್ರಾಜ್ಯದ ಅವನತಿಯು ಆರ್ಥಿಕ ತೀವ್ರ ಹಿಂಜರಿಕೆ, ರಾಜಕೀಯ ಭ್ರಷ್ಟಾಚಾರಗಳು ಮತ್ತು ಹೊರಗಿನ ಬಾರ್ಬೇರಿಯನ್ ದಾಳಿಗಳಿಂದಾಗಿ ಕ್ರಮೇಣವಾಗಿ ಉಂಟಾಯಿತು.",
      lessons: [
        {
          title: "ಆಡಳಿತಾತ್ಮಕ ಶಿಥಿಲತೆ",
          content: "ಸೇನೆಯಲ್ಲಿ ಹೆಚ್ಚಿದ ಸುಲಿಗೆಯ ಪ್ರವೃತ್ತಿ ಮತ್ತು ದುರ್ಬಲ ಆಡಳಿತಗಾರರು ಒಂದು ಭವ್ಯ ಆಡಳಿತವನ್ನು ಮುಳುಗಿಸಬಲ್ಲವು."
        }
      ],
      timeline: [
        {
          date: "೪೭೬ CE",
          title: "ರೋಮುಲಸ್ ಅಗಸ್ಟಲಸ್ ಪದಚ್ಯುತಿ",
          description: "ಜರ್ಮಾನಿಕ್ ನಾಯಕ ಒಡೊಯೇಸರ್ ಕೊನೆಯ ಬಾಲ ರೋಮನ್ ರಾಜನನ್ನು ಸಿಂಹಾಸನದಿಂದ ಇಳಿಸಿದನು.",
          importance: "ಪಾಶ್ಚಾತ್ಯ ರೋಮ್ ಸಾಂಸ್ಕೃತಿಕ ಅವನತಿ ಮತ್ತು ಮಧ್ಯಯುಗದ ಪ್ರವೇಶ.",
          location: "ರವೆನ್ನಾ, ಇಟಲಿ"
        }
      ]
    },
    ml: {
      query: "The Fall of the Roman Empire",
      language: "ml",
      title: "റോമാ സാമ്രാജ്യത്തിന്റെ തകർച്ച",
      nativeTitle: "റോമൻ പതനം",
      era: "എ.ഡി. 395 മുതൽ 476 വരെ",
      summary: "ആഗോളതലത്തിൽ ചരിത്രത്തെ പിടിച്ചുലച്ച ഒന്നാണ് പടിഞ്ഞാറൻ റോമാ സാമ്രാജ്യത്തിന്റെ തകർച്ച. സാമ്പത്തിക അതിപ്രസരവും പടയോട്ട ആക്രമണങ്ങളും ഇതിന് കാരണമായി.",
      lessons: [
        {
          title: "നാണ്യപെരുപ്പം തടയുക",
          content: "സാമ്പത്തിക വികേന്ദ്രീകരണവും കൃത്യമായ ധനകാര്യ മേൽനോട്ടവും ഏതൊരു ഭരണത്തിലും അത്യന്താപേക്ഷിതമാണ്."
        }
      ],
      timeline: [
        {
          date: "എ.ഡി. 476",
          title: "റോമുലസ് അഗസ്റ്റസിന്റെ പതനം",
          description: "ജർമ്മൻ കൊള്ളത്തലവനായ ഒഡോവാക്കർ അവസാന റോമൻ ചക്രവർത്തിയെ നിഷ്ക്കാസിതനാക്കി.",
          importance: "പടിഞ്ഞാറൻ റോമൻ സാമ്രാജ്യത്തിന്റെ പൂർണ്ണ അന്ത്യം.",
          location: "റവണ്ണ, ഇറ്റലി"
        }
      ]
    }
  },
  indus_valley: {
    en: {
      query: "The Indus Valley Civilization",
      language: "en",
      title: "The Indus Valley Civilization",
      nativeTitle: "சிந்து சமவெளி நாகரிகம் / సింధు లోయ నాగరికత",
      era: "3300 BCE to 1300 BCE",
      summary: "One of the world's earliest Bronze Age urban societies, the Indus Valley Civilization (or Harappan Civilization) flourished around the Indus River basin. Exhibiting marvelous urban planning, standardized brick dimensions, secure high-tech drainage, and vast trade connections extending to Mesopotamia, Harappan cities like Mohenjo-daro and Lothal stand as timeless templates of peaceful, non-theocratic civic organization. Their undeciphered script continues to challenge modern linguists.",
      lessons: [
        {
          title: "Advanced Urban Planning & Hygiene",
          content: "The presence of standard household bathrooms connecting directly to covered brick water drains proves that early human well-being and public safety were placed first."
        }
      ],
      timeline: [
        {
          date: "2600 BCE",
          title: "Rise of Mature Harappan Urban Infrastructure",
          description: "Harappa, Mohenjo-daro, and kalibangan developed into highly populated, fortified brick-laid cities featuring wide avenue grids and public pools.",
          importance: "Marks the earliest mature urbanization on the Indian subcontinent, demonstrating unparalleled standard weights and dimensional systems.",
          location: "Harappa (Punjab-Sindh Region)"
        }
      ]
    },
    ta: {
      query: "The Indus Valley Civilization",
      language: "ta",
      title: "சிந்து சமவெளி நாகரிகம்",
      nativeTitle: "சிந்து சமவெளி நாகரிகம்",
      era: "முற்பட்ட வெண்கல காலம் (கி.மு. 3300 - 1300)",
      summary: "உலகின் மிக உன்னத பழமையான உலகப் பெரு நாகரிகங்களில் ஒன்றான சிந்து சமவெளி நாகரிகம், நேர்த்தியான நகர வடிவமைப்பு, கழிவுநீர்க் கால்வாய்கள், பொதுக் குளியல் குளங்கள் மற்றும் வெளிநாட்டுத் தூது வர்த்தகங்கள் ஆகியவற்றிற்குப் பெயர் பெற்றது.",
      lessons: [
        {
          title: "மக்கள் மைய சுகாதாரத் திட்டங்கள்",
          content: "ஒவ்வொரு வீட்டிலும் கழிவுநீர் வசதியும் முறையான சுடுமண் கால்வாய்களும் இருந்தது பொது சுகாதாரத்திற்கு எவ்வளவு முக்கியத்துவம் தரப்பட்டது என்பதைக் காட்டுகிறது."
        }
      ],
      timeline: [
        {
          date: "கி.மு. 2600",
          title: "முதிர்ந்த ஹரப்பா நகர கட்டமைப்பு உருவாக்கம்",
          description: "சுவாசப் பெட்டகம் போன்ற பெரிய குளங்கள், தானியக் களஞ்சியம் மற்றும் சீரான கோண வீதி வடிவமைப்புடன் கூடிய பெருநகரங்களின் தோற்றம்.",
          importance: "துணைக்கண்டத்தில் முதன்முதலில் திட்டமிடப்பட்ட நகர கலை வளர்ச்சி.",
          location: "ஹரப்பா மற்றும் மொஹஞ்சதாரோ"
        }
      ]
    },
    te: {
      query: "The Indus Valley Civilization",
      language: "te",
      title: "సింధు లోయ నాగరికత",
      nativeTitle: "సింధు లోయ నాగరికత",
      era: "క్రీ.పూ. 3300 నుండి 1300 వరకు",
      summary: "సింధు లోయ నాగరికత (హరప్పా నాగరికత) ప్రపంచ చారిత్రక ప్రాచీన కాలంలోనే అద్భుతమైన నగరాభివృద్ధి, భూగర్భ మురుగునీటి పారుదల మరియు మెసొపొటేమియాతో అంతర్జాతీయ వాణిజ్య సంబంధాలు నడిపి భారత ఉపఖండ కీర్తిని చాటిచెప్పింది.",
      lessons: [
        {
          title: "నాణ్యమైన పౌర సదుపాయాలు",
          content: "పట్టణ నిర్మాణాలలో గ్రిడ్ రోడ్డు ప్లానింగ్ మరియు శుభ్రతకు తీవ్ర శ్రద్ధ నిచ్చిన వ్యవస్థ నగర రూపకల్పనకు మకుటం."
        }
      ],
      timeline: [
        {
          date: "క్రీ.పూ. 2600",
          title: "హరప్పా ప్రాచీన పౌరనిర్మాణ వైభవం",
          description: "భారీ ధాన్యాగారం మరియు సువిశాల పబ్లిక్ మహాస్నాన వాటిక నిర్మించబడ్డాయి.",
          importance: "భారత ఖండంలో తొలి శాస్త్రీయ పట్టణ ప్రణాళిక అభివృద్ధికి ప్రతీక.",
          location: "మొహెంజోదారో, పంజాబ్-సింధ్ ప్రాంతం"
        }
      ]
    },
    kn: {
      query: "The Indus Valley Civilization",
      language: "kn",
      title: "ಸಿಂಧೂ ಬಯಲಿನ ನಾಗರಿಕತೆ",
      nativeTitle: "ಹರಪ್ಪ ಮತ್ತು ಮೊಹಂಜೋದಾರೋ ನಾಗರಿಕತೆ",
      era: "೩೩೦೦ BCE ರಿಂದ ೧೩೦೦ BCE",
      summary: "ಜಗತ್ತಿನ ಅತ್ಯಂತ ಪುರಾತನ ಕಂಚಿನ ಯುಗದ ನಾಗರಿಕತೆಯಾದ ಇದು, ಅದ್ಭುತ ಒಳಚರಂಡಿ ಪದ್ಧತಿ ಮತ್ತು ಅಂತರರಾಷ್ಟ್ರೀಯ ವ್ಯಾಪಾರ ಸಂಪರ್ಕವನ್ನು ಹೊಂದಿತ್ತು.",
      lessons: [
        {
          title: "ಪೌರ ನೈರ್ಮಲ್ಯ ಹಾಗೂ ಸಮಾನತೆ",
          content: "ಬಂದರುಗಳ ನಿರ್ಮಾಣ ಮತ್ತು ವ್ಯವಸ್ಥಿತ ನಗರ ವಿನ್ಯಾಸ ಪ್ರಗತಿಪರ ಸಮಾಜದ ಗುರುತಾಗಿದೆ ಎಂಬುದನ್ನು ಸಾರುತ್ತದೆ."
        }
      ],
      timeline: [
        {
          date: "೨೬೦೦ BCE",
          title: "ಮೊಹಂಜೋದಾರೋ ಬೃಹತ್ ನಗರ ರಚನೆ",
          description: "ಅಚ್ಚುಕಟ್ಟಾಗಿ ತಯಾರಿಸಲಾದ ಇಟ್ಟಿಗೆಗಳಿಂದ ಸುಂದರ ವಿಶಾಲ ರಸ್ತೆಗಳನ್ನು ಹಾಗೂ ಕಲ್ಯಾಣಿಗಳನ್ನು ನಿರ್ಮಿಸಿದರು.",
          importance: "ಭಾರತೀಯ ದ್ವೀಪಕಲ್ಪದಲ್ಲಿ ಪ್ರಥಮ ಪಟ್ಟಣ ನಿರ್ಮಾಣ ಯೋಜನೆ.",
          location: "ಹರಪ್ಪ, ಪಂಜಾಬ್ ಪ್ರಾಂತ್ಯ"
        }
      ]
    },
    ml: {
      query: "The Indus Valley Civilization",
      language: "ml",
      title: "സിന്ധൂ നദീതട സംസ്കാരം",
      nativeTitle: "ഹാരപ്പൻ സംസ്കാരം",
      era: "ബി.സി. 3300 മുതൽ 1300 വരെ",
      summary: "ലോകത്തിലെ ആദ്യത്തെ നാഗരിക സംസ്കാരങ്ങളിലൊന്നാണ് സിന്ധൂ നദീതട സംസ്കാരം. മികച്ച ഭൂഗർഭ മലിനജല ചാലുകളും ശാസ്ത്രീയ റോഡുകളും നിലനിന്നിരുന്നു.",
      lessons: [
        {
          title: "നഗര ശുചിത്വം",
          content: "പൊതു സമാധാനത്തിനും മികച്ച പൗരജീവിതത്തിനും ശാസ്ത്രീയ നഗരസൂത്രണം എത്ര പ്രധാനമാണെന്ന് ഹാരപ്പ കാണിച്ചുതരുന്നു."
        }
      ],
      timeline: [
        {
          date: "ബി.സി. 2600",
          title: "ഹാരപ്പൻ വികസന സുവർണ്ണകാലം",
          description: "മോഹൻജൊദാരോയിലെ വലിയ കുളങ്ങളും കച്ചവട കപ്പൽതുറമുഖമായ ലോഥലും സ്ഥാപിക്കപ്പെട്ടു.",
          importance: "ഇന്ത്യയിലെ ഏറ്റവും ആദ്യത്തെ റോഡ് നഗര സംസ്കാരം.",
          location: "സിന്ധ്, ഹാരപ്പ"
        }
      ]
    }
  },
  maratha: {
    en: {
      query: "Chhatrapati Shivaji Maharaj & Marathas",
      language: "en",
      title: "Chhatrapati Shivaji Maharaj & Marathas",
      nativeTitle: "சத்ரபதி சிவாஜி மற்றும் மராட்டிய பேரரசு / ఛత్రపతి శివాజీ",
      era: "1674 CE to 1818 CE",
      summary: "Chhatrapati Shivaji Maharaj carved out an independent Maratha kingdom (Hindavi Swarajya) from the Adilshahi sultanate of Bijapur and the Mughal Empire. He pioneered revolutionary military architectures, built powerful hill forts across the Western Ghats (Sahyadris), and established an elite, mobile navy. His military strategies utilized 'Ganimi Kava' (guerilla hit-and-run tactics), enabling small, agile armies to repeatedly overcome much larger imperial forces.",
      lessons: [
        {
          title: "Asymmetric Combat & Terrain Mastery",
          content: "The Marathas engineered military structures utilizing mountainous landscapes. This proves that understanding and mastering one's surrounding environment can nullify numerical disadvantages."
        }
      ],
      timeline: [
        {
          date: "June 6, 1674 CE",
          title: "Coronation of Shivaji Maharaj at Raigad Fort",
          description: "Shivaji Maharaj was formally crowned as the Chhatrapati (sovereign emperor) of the Maratha nation with grand vedic rituals.",
          importance: "Established a sovereign, self-determined state free from external hegemony, launching a massive geopolitical shift in the Deccan.",
          location: "Raigad Fort, Maharashtra, India"
        }
      ]
    },
    ta: {
      query: "Chhatrapati Shivaji Maharaj & Marathas",
      language: "ta",
      title: "சத்ரபதி சிவாஜி மற்றும் மராட்டிய பேரரசு",
      nativeTitle: "சத்ரபதி சிவாஜி மற்றும் மராட்டிய பேரரசு",
      era: "கி.பி. 1674 முதல் 1818 வரை",
      summary: "சத்ரபதி சிவாஜி மகாராஜால் நிறுவப்பட்ட மராட்டியப் பேரரசு இந்தியாவின் வலிமை வாய்ந்த சாம்ராஜ்யங்களில் ஒன்றாகும். கொரில்லாப் போர் முறையான 'கனிமி காவா' மூலம் மொகலாயர்களின் பெரும் படையைத் தடுத்து நிறுத்தித் தன்னாட்சியை நிறுவினார்.",
      lessons: [
        {
          title: "கொரில்லா போர் முறை மற்றும் உத்திகள்",
          content: "சிறிய படையை வைத்துக் கொண்டும் நிலப்பரப்பின் சாதகங்களை அறிந்து செயல்பட்டால் மாபெரும் ராணுவங்களையும் வெல்லலாம் என நிரூபித்துக் காட்டியுள்ளார்."
        }
      ],
      timeline: [
        {
          date: "ஜூன் 6, 1674",
          title: "ராய்காட் கோட்டையில் சத்ரபதியாகப் முடிசூட்டுதல்",
          description: "சிவாஜி ராய்காட் கோட்டையில் மராட்டியப் பேரரசின் முடிசூடா மன்னராகத் தங்களை முறைப்படி அறிவித்துக் கொண்டார்.",
          importance: "சுயாட்சி மற்றும் இராணுவ தன்னாட்சியின் குறியீடு.",
          location: "ராய்காட், மகாராஷ்டிரா"
        }
      ]
    },
    te: {
      query: "Chhatrapati Shivaji Maharaj & Marathas",
      language: "te",
      title: "ఛత్రపతి శివాజీ మరియు మరాఠా చక్రవర్తులు",
      nativeTitle: "ఛత్రపతి శివాజీ",
      era: "క్రీ.శ. 1674 నుండి 1818 వరకు",
      summary: "ఛత్రపతి శివాజీ మహారాజ్ నేతృత్వంలో దక్కన్ ప్రాంతంలో మరాఠా సామ్రాజ్యం ఉద్భవించింది. గెరిల్లా యుద్ధ పద్ధతి (గనిమి కావా) మరియు కొండ కోటల నిర్మాణాల ద్వారా మొఘల్ చక్రవర్తులను ముప్పతిప్పలు పెట్టి స్వరాజ్యాన్ని సాధించారు.",
      lessons: [
        {
          title: "పర్వత నైసర్గిక యుద్ధ వ్యూహాలు",
          content: "తమ ప్రాంత భౌగోళిక పరిస్థితులను గెరిల్లా పద్ధతులతో అనుకూలంగా మార్చుకుని అసంఖ్యాక శత్రువులను ఎదుర్కొనడం నిరుపమానం."
        }
      ],
      timeline: [
        {
          date: "జూన్ 6, 1674",
          title: "రాయ్‌గఢ్ కోటలో శివాజీ పట్టాభిషేకం",
          description: "శివాజీ మహారాజు మరాఠా స్వరాజ్యానికి అధికారికంగా ఛత్రపతిగా పట్టాభిషిక్తులయ్యారు.",
          importance: "దక్కన్ లో స్వతంత్ర హిందూ స్వరాజ్య స్థాపనకు అంకురార్పణ జరిగింది.",
          location: "రాయ్‌గఢ్ కోట, మహారాష్ట్ర"
        }
      ]
    },
    kn: {
      query: "Chhatrapati Shivaji Maharaj & Marathas",
      language: "kn",
      title: "ಛತ್ರಪತಿ ಶಿವಾಜಿ ಮಹಾರಾಜ್ ಮತ್ತು ಮರಾಠರು",
      nativeTitle: "ಛತ್ರಪತಿ ಶಿವಾಜಿ ಮಹಾರಾಜ್",
      era: "೧೬೭೪ ರಿಂದ ೧೮೧೮ CE",
      summary: "ಶಿವಾಜಿ ಮಹಾರಾಜರು ಮುಘಲರ ವಿರುದ್ಧ ಹೋರಾಡಿ ಮಹೋನ್ನತ ಮರಾಠಾ ಸ್ವತಂತ್ರ ಸಾಮ್ರಾಜ್ಯ ಅಸ್ತಿತ್ವಕ್ಕೆ ತಂದರು. ಇವರು ಸಹ್ಯಾದ್ರಿ ಪರ್ವತಗಳ ಕೋಟೆಗಳನ್ನೇ ಆಧಾರವಾಗಿಟ್ಟುಕೊಂಡು 'ಗನಿಮಿ ಕಾವಾ' (ಗೆರಿಲ್ಲಾ ಸಮರ ಶೈಲಿ) ಮೂಲಕ ದಾಳಿ ನಡೆಸುತ್ತಿದ್ದರು.",
      lessons: [
        {
          title: "ಭೌಗೋಳಿಕ ಯುದ್ಧ ಯಂತ್ರ",
          content: "ಕಡಿಮೆ ಸೈನ್ಯವಿದ್ದರೂ ಭೌಗೋಳಿಕ ಬೆಟ್ಟಗುಡ್ಡಗಳ ರಹಸ್ಯ ದಾರಿಗಳನ್ನು ಬಳಸಿ ವಿಜಯ ಸಾಧಿಸುವುದನ್ನು ಇವರ ಕ್ರಾಂತಿ ತಿಳಿಸುತ್ತದೆ."
        }
      ],
      timeline: [
        {
          date: "೧೬೭೪",
          title: "ರಾಯಗಢ್ ಕೋಟೆಯಲ್ಲಿ ಶಿವಾಜಿ ಮಹಾರಾಜರ ಪಟ್ಟಾಭಿಷೇಕ",
          description: "ವೈದಿಕ ವಿಧಿ ವಿಧಾನಗಳೊಂದಿಗೆ ಶಿವಾಜಿ ಅಧಿಕೃತವಾಗಿ ಛತ್ರಪತಿ ಎಂದು ಮುকুট ಧರಿಸಿದರು.",
          importance: "ಸ್ವದೇಶಿ ಸಾರ್ವಭೌಮ ಮರಾಠಾ ಸಾಮ್ರಾಜ್ಯದ ಅಧಿಕೃತ ಸಂಸ್ಥಾಪನೆ.",
          location: "ರಾಯಗಢ್, ಮಹಾರಾಷ್ಟ್ರ"
        }
      ]
    },
    ml: {
      query: "Chhatrapati Shivaji Maharaj & Marathas",
      language: "ml",
      title: "ഛത്രപതി Shivaji മഹാരാജും മറാഠാ സാമ്രാജ്യവും",
      nativeTitle: "ഛത്രപതി ശിവാജി മഹാരാജ്",
      era: "എ.ഡി. 1674 മുതൽ 1818 വരെ",
      summary: "ചത്രപതി ശിവാജി മഹാരാജിന്റെ ശക്തമായ നേത്യത്വത്തിൽ രൂപം കൊണ്ട മറാത്ത സാമ്രാജ്യം മുഗൾ ഭരണാധികാരികൾക്ക് വലിയ വെല്ലുവിളിയായിരുന്നു. 'ഗറില്ല' യുദ്ധമുറകളിലൂടെയും ശക്തമായ കോട്ടകളിലൂടെയും ഇവർ തങ്ങളുടെ സ്വാധീനം ഉറപ്പിച്ചു.",
      lessons: [
        {
          title: "പോരാട്ട വീര്യം",
          content: "ഭൂമിശാസ്ത്രപരമായ മേൽക്കോയ്മയും ധീരമായ നേതൃത്വവും വലിയ എതിരാളികളെയും കീഴ്പ്പെടുത്താൻ സഹായിക്കുമെന്ന് ശിവാജി തെളിയിച്ചു."
        }
      ],
      timeline: [
        {
          date: "എ.ഡി. 1674 ജൂൺ 6",
          title: "ശിവാജി റായ്ഗഡ് കോട്ടയിൽ ചക്രവർത്തിയായി മുടിചൂടുന്നു",
          description: "റായ്ഗഡ് കോട്ടയിൽ വെച്ച് ഗംഭീര ചടങ്ങുകളോടെ അദ്ദേഹം മറാത്താ സാമ്രാജ്യത്തിന്റെ രാജാവായി അവരോധിക്കപ്പെട്ടു.",
          importance: "മുഗളൻമാർക്ക് എതിരെ സ്വതന്ത്ര മറാത്ത സ്വാധീനം ഉറപ്പിച്ചു.",
          location: "റായ്ഗഡ്, മഹാരാഷ്ട്ര"
        }
      ]
    }
  }
};

// Generates dynamic fallback data for ANY query that maintains scholastic richness
export function generateDynamicFallback(query: string, language: SouthIndianLanguage): HistorySynthesis {
  const norm = query.toLowerCase().trim();

  // Keyword check for standard suggestions
  if (norm.includes("chola") || norm.includes("சோழ") || norm.includes("చోళ") || norm.includes("ಚೋಳ") || norm.includes("ചോള")) {
    return OFFLINE_CURRICULA.cholas[language] || OFFLINE_CURRICULA.cholas.en;
  }
  if (norm.includes("vijaya") || norm.includes("விஜயநகர") || norm.includes("విజయనగర") || norm.includes("ವಿಜಯನಗರ") || norm.includes("വിജയനഗര")) {
    return OFFLINE_CURRICULA.vijayanagara[language] || OFFLINE_CURRICULA.vijayanagara.en;
  }
  if (norm.includes("talikota") || norm.includes("தலைக்கோட்ட") || norm.includes("తళ్ళికోట") || norm.includes("ತಾಳಿಕೋಟೆ") || norm.includes("തളിക്കോട്ട")) {
    return OFFLINE_CURRICULA.talikota[language] || OFFLINE_CURRICULA.talikota.en;
  }
  if (norm.includes("pallava") || norm.includes("பல்லவ") || norm.includes("పల్లవ") || norm.includes("ಪಲ್ಲವ") || norm.includes("പല്ലവ")) {
    return OFFLINE_CURRICULA.pallavas[language] || OFFLINE_CURRICULA.pallavas.en;
  }
  if (norm.includes("maruthu") || norm.includes("மருது") || norm.includes("మరుదు") || norm.includes("ಮರುದು") || norm.includes("മരുതു")) {
    return OFFLINE_CURRICULA.maruthu_pandiyar[language] || OFFLINE_CURRICULA.maruthu_pandiyar.en;
  }
  if (norm.includes("roman") || norm.includes("ரோமானிய") || norm.includes("రోమన్") || norm.includes("ರೋಮನ್") || norm.includes("റോമാ")) {
    return OFFLINE_CURRICULA.roman_empire[language] || OFFLINE_CURRICULA.roman_empire.en;
  }
  if (norm.includes("indus") || norm.includes("valley") || norm.includes("சிந்து") || norm.includes("సింధు") || norm.includes("ಸಿಂಧೂ") || norm.includes("സിന്ധൂ")) {
    return OFFLINE_CURRICULA.indus_valley[language] || OFFLINE_CURRICULA.indus_valley.en;
  }
  if (norm.includes("maratha") || norm.includes("shivaji") || norm.includes("சிவாஜி") || norm.includes("శివాజీ") || norm.includes("ಶಿವಾಜಿ") || norm.includes("ശിവാജി")) {
    return OFFLINE_CURRICULA.maratha[language] || OFFLINE_CURRICULA.maratha.en;
  }

  // General fallback construction in selected script
  const title = `Synthesis of ${query}`;
  
  const translations: Record<SouthIndianLanguage, {
    title: string;
    nativeTitle: string;
    era: string;
    summary: string;
    lessons: { title: string; content: string }[];
    timeline: { date: string; title: string; description: string; importance: string; location: string }[];
  }> = {
    en: {
      title: `Synthesis of ${query}`,
      nativeTitle: `சரித்திரம் / చరిత్ర: ${query}`,
      era: "Classical Era to Early Devolution Epoch",
      summary: `The historical saga of "${query}" constitutes an extremely vital, influential chapter in overall human civilization. Noted for its brilliant statecraft, administrative machinery, custom-built trade policies, and cultural patronages, this era left massive footprints across regional development. It fostered deep socio-cultural cohesions while constantly negotiating geographical frontiers, introducing progressive military or civic structures whose legacies still actively echo in our modern rules of governance.`,
      lessons: [
        {
          title: "Strategic Resiliency in Policy Planning",
          content: `The administrative structure of ${query} demonstrates that institutional power is built on adaptive policies. By modifying economic frameworks under crisis, they achieved unmatched continuity.`
        },
        {
          title: "Cultural Patronage as Collective Identity",
          content: `The leadership during this era actively funded arts and education, forging a unified regional voice that survived long-term physical resource transitions.`
        }
      ],
      timeline: [
        {
          date: "Foundational Era",
          title: `Genesis of ${query} Sovereignty`,
          description: `The local factions consolidated under unified leadership, establishing administrative centers and stabilizing trade agreements to construct a secure base of operations.`,
          importance: "Laid down the critical administrative template for systematic legal and geographical sovereignty.",
          location: "Ancient Capital Center"
        },
        {
          date: "Golden Apex",
          title: "Golden Era & Sovereign Expansion",
          description: "Characterized by unrivaled expansions in irrigation models, architectural marvels, and extensive subcontinental trade networks protected by state guards.",
          importance: "Maximized artistic expression and citizen standard of living, establishing record regional stability.",
          location: "Central Sovereign Administration"
        }
      ]
    },
    ta: {
      title: `வரலாற்று ஆய்வு: ${query}`,
      nativeTitle: `மகா காவியம்: ${query}`,
      era: "பண்டைய காலம் முதல் இடைக்காலம் வரை",
      summary: `"${query}" பற்றிய வரலாற்று தொகுப்பு படித்து தேர்ச்சி பெற வேண்டிய மிக முக்கியமான வரலாற்று அத்தியாயமாகும். சிறந்த நிர்வாகக் கட்டமைப்பு, பொருளாதார நெறிமுறைகள் மற்றும் பண்பாட்டு முதலீடுகள் போன்ற அரும்பெரும் கூறுகள் இந்த காலகட்டத்தின் முக்கிய சான்றுகளாகும். இது அன்றைய சமூக கலாச்சார ஒருமைப்பாட்டை வளர்த்ததுடன், தற்கால அரசியல் நிர்வாக நடைமுறைகளுக்கும் அச்சாணியாக உள்ளது.`,
      lessons: [
        {
          title: "நெகிழ்வுத்தன்மை கொண்ட நீண்டகால கொள்கைகள்",
          content: `நெருக்கடி காலத்திலும் நிர்வாக உறுதியைக் காப்பதற்கான சகிப்புத்தன்மை மற்றும் சமரசமற்று கொள்கைகளை அமல்படுத்தியதை இந்த ஆய்வு நமக்கு உணர்த்துகிறது.`
        }
      ],
      timeline: [
        {
          date: "தொடக்க சகாப்தம்",
          title: `${query} ஆட்சியின் தோற்றமும் வளர்ச்சியும்`,
          description: "மக்களின் பேராதரவுடன் ஒருங்கிணைந்த புதிய நிர்வாகத் தலைமையகம் நிறுவப்பட்டு, மக்களின் வாழ்வாதாரத்திற்கான நீர்நிலைகள் பெருக்குதல் நடைபெற்றது.",
          importance: "எதிர்கால பேரரசின் பிரமாண்ட வளர்ச்சிக்கு உறுதியான சமூக அடித்தளம் அமைத்தது.",
          location: "பண்டைய தலைநகரம்"
        },
        {
          date: "பொற்கால சிகரம்",
          title: "கம்பீரமான உச்சிநிலை மற்றும் கலை வளர்ச்சி",
          description: "கலைகள், இலக்கியங்கள் மற்றும் எல்லைகடந்த வர்த்தகம் ஆகியவை முன்னெப்போதும் காணாத உச்சத்தை அடைந்து தன்னாட்சி சிறந்தது.",
          importance: "அமைதி மற்றும் சமூக பொருளாதார மறுமலர்ச்சிக்கு வித்திட்டது.",
          location: "தலைநகர மையம்"
        }
      ]
    },
    te: {
      title: `చారిత్రక విశ్లేషణ: ${query}`,
      nativeTitle: `ఘన చరిత్ర: ${query}`,
      era: "ప్రాచీన శకం నుండి మధ్యయుగ కాలం వరకు",
      summary: `"${query}" యొక్క చారిత్రక పరిణామం మానవ నాగరికతలో ఒక విశేష పేజీ. విశిష్ట పరిపాలన, ప్రజాహిత శాసనాలు మరియు అద్భుతమైన సంస్కృతి వంటి పటిష్ట అంశాలు ఈ కాలంలో రూపుదిద్దుకున్నాయి. ఇది పటిష్ట సమాజ నిర్మాణానికి పునాది వేయడమే కాకుండా నేటి తరానికి ఎంతో స్ఫూర్తినిస్తోంది.`,
      lessons: [
        {
          title: "వ్యవస్థాగత సుస్థిరత & దీర్ఘదర్శి ప్రణాళిక",
          content: "పరిపాలకులు సమయోచిత విధానాలను రచించి క్లిష్ట పరిస్థితుల్లో కూడా ఆర్థిక శాంతి భద్రతలను కాపాడిన తీరు ప్రశంసనీయం."
        }
      ],
      timeline: [
        {
          date: "స్థాపన శకం",
          title: `${query} ప్రస్థానం ప్రారంభం`,
          description: "అధికార కేంద్రాల వికేంద్రీకరణ జరిగి స్థానిక తెగలు ఏకం చేయబడి సుస్థిర శాసన వ్యవస్థ స్థాపించబడింది.",
          importance: "భవిష్యత్ వైభవానికి మార్గం సుగమం చేసిన బలమైన అడుగు.",
          location: "ప్రాచీన శక కేంద్రం"
        },
        {
          date: "సువర్ణ కాలం",
          title: "స్వర్ణయుగం మరియు సాంస్కృతిక వైభవం",
          description: "వ్యవసాయ రంగానికి జలాశయాల పెంపొందింపు మరియు పసిడి లోహాల వాణిజ్యం అత్యున్నత స్థాయికి చేరుకుంది.",
          importance: "ఆధ్యాత్మిక, సామాజిక కళల వికాసానికి ఇది ఒక మహత్తర అడుగు.",
          location: "సార్వభౌమ రాజధాని"
        }
      ]
    },
    kn: {
      title: `ಐತಿಹಾಸಿಕ ವಿಶ್ಲೇಷಣೆ: ${query}`,
      nativeTitle: `ಮಹಾ ಚರಿತ್ರೆ: ${query}`,
      era: "ಪ್ರಾಚೀನ ಕಾಲಾವಧಿಯಿಂದ ಮಧ್ಯಯುಗ",
      summary: `"${query}" ಕುರಿತಾದ ಐತಿಹಾಸಿಕ ಸಂಶೋಧನೆಯು ಶೈಕ್ಷಣಿಕ ಮೌಲ್ಯವಿರುವ ವಿಶಿಷ್ಟ ಅಧ್ಯಯನವಾಗಿದೆ. ಇವರ ಕಾಲದ ರಾಜತಾಂತ್ರಿಕ ಗುಣಗಳು, ಸ್ವತಂತ್ರ ಆಡಳಿತ ಪದ್ಧತಿಯು ಮತ್ತು ಧರ್ಮ ಸಹಿಷ್ಣುತೆಯು ಇಡೀ ಇತಿಹಾಸದಲ್ಲಿ ಕೀರ್ತಿ ತಂದುಕೊಟ್ಟಿದೆ. ನವೀನ ನೀರಾವರಿ ಪದ್ಧತಿ ಇದರ ಪ್ರಮುಖ ಕೊಡುಗೆಯಾಗಿದೆ.`,
      lessons: [
        {
          title: "ದೃಢ ನಿರ್ಧಾರ ಹಾಗೂ ಸ್ವಯಂ ಸೇವೆ",
          content: "ಅಡಚಣೆಗಳಿದ್ದಾಗಲೂ ಸಹ ಧೃತಿಗೆಡದೆ ದೃಢ ನಾಯಕತ್ವದ ಮೂಲಕ ಪ್ರಜೆಗಳನ್ನು ರಕ್ಷಿಸಿದ ಸಾಧನೆ ಇದಾಗಿದೆ."
        }
      ],
      timeline: [
        {
          date: "ಸ್ಥಾಪನೆ ಕಾಲ",
          title: `${query} ನಾಯಕತ್ವದ ಹುಟ್ಟು`,
          description: "ವಿಕೇಂದ್ರೀಕೃತ ಆಡಳಿತ ಕೇಂದ್ರಗಳನ್ನು ಸ್ಥಾಪಿಸಿ ಆಂತರಿಕ ವ್ಯಾಪಾರ ವ್ಯವಹಾರಗಳನ್ನು ಉತ್ತಮಗೊಳಿಸಲಾಯಿತು.",
          importance: "ಮಹೋನ್ನತ ಚಾರಿತ್ರಿಕ ಸಂಸ್ಥಾನಕ್ಕೆ ಅಡಿಪಾಯ.",
          location: "ಸ್ಥಳೀಯ ರಾಜಧಾನಿ"
        },
        {
          date: "ಸುವರ್ಣ ಯುಗ",
          title: "ಅಭಿವೃದ್ಧಿ ಮತ್ತು ದೃಢ ವಿಸ್ತರಣೆ",
          description: "ಶಿಲ್ಪಕಲೆ, ಶಾಸನ ಬರವಣಿಗೆ ಹಾಗೂ ವಿದೇಶಿ ವ್ಯಾಪಾರಿಗಳ ಪ್ರವೇಶ ಹೆಚ್ಚಾಗಿ ಆರ್ಥಿಕತೆ ಉತ್ತುಂಗಕ್ಕೇರಿತು.",
          importance: "ಶಾಂತಿ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಏಕತೆಯ ಸುವರ್ಣ ಕಾಲ.",
          location: "ಕೇಂದ್ರ ಆಡಳಿತ ಸಭೆ"
        }
      ]
    },
    ml: {
      title: `ചരിത്ര വിശകലനം: ${query}`,
      nativeTitle: `മഹത്തായ ചരിത്രം: ${query}`,
      era: "പുരാതന കാലഘട്ടം മുതൽ മധ്യകാലം വരെ",
      summary: `"${query}" എന്ന ചരിത്രപഠനം അതിപ്രാധാന്യമുള്ള ചരിത്ര താളുകളിലൊന്നാണ്. ഇവരുടെ ഭരണരീതികളും ഭരണകൂട ശാസ്ത്രീയ സവിശേഷതകളും പൗരന്മാർക്ക് മികച്ച സമാധാനം പ്രദാനം ചെയ്യുന്നതായിരുന്നു. വ്യാപാര പുരോഗതിയും ജലസേചന മാതൃകകളും ഇക്കാലത്തിന്റെ നേട്ടങ്ങളായി വിലയിരുത്തപ്പെടുന്നു.`,
      lessons: [
        {
          title: "ആസൂത്രിത ഭരണവും ജനകീയതയും",
          content: "സാമൂഹികമായ ഒത്തൊരുമയും അച്ചടക്കമുള്ള നിയമവ്യവസ്ഥയുമാണ് ഭരണത്തിന്റെ ആയുസ്സ് നിർണ്ണയിക്കുന്നതെന്ന് ഇതിലൂടെ മനസ്സിലാക്കാം."
        }
      ],
      timeline: [
        {
          date: "തുടക്ക സ്ഥാപനം",
          title: `${query} പരമാധികാര രൂപീകരണം`,
          description: "വികേന്ദ്രീകൃത ഭരണകേന്ദ്രങ്ങൾ സ്ഥാപിക്കുകയും അണക്കെട്ടുകളും സുരക്ഷിത സംഭരണികളും തീർത്തു കാതലായ മാറ്റങ്ങൾ വരുത്തുകയും ചെയ്തു.",
          importance: "ഭാവി പുരോഗതിയുടെ ആദ്യത്തെ ചവിട്ടുപടി.",
          location: "പുരാതന തലസ്ഥാനം"
        },
        {
          date: "സുവർണ്ണ ഘട്ടം",
          title: "മഹത്തായ സുവർണ്ണകാലം",
          description: "കലയും തച്ചുശാസ്ത്രവും മികച്ച അറിവുകളും വ്യാപാര മേഖലയും സമാന്തരമായി ഉന്നതി കൈവരിച്ചു.",
          importance: "സാമൂഹിക സാംസ്കാരിക മേഖലകളുടെ സമ്പൂർണ്ണ പുനരുജ്ജീവനം.",
          location: "പരമാധികാര കേന്ദ്രം"
        }
      ]
    }
  };

  const choice = translations[language] || translations.en;
  return {
    query,
    language,
    title: choice.title,
    nativeTitle: choice.nativeTitle,
    era: choice.era,
    summary: choice.summary,
    lessons: choice.lessons,
    timeline: choice.timeline
  };
}

// Generates dynamic student Study Revision Guides for Fallback cases
export function generateFallbackStudyGuide(title: string, language: SouthIndianLanguage): StudyGuide {
  const translations: Record<SouthIndianLanguage, StudyGuide> = {
    en: {
      studyPoints: [
        "Chronological Anchor: Understand that this era represents a crucial milestone of legal, geographic, and economic consolidation.",
        "Resource Mastership: Note how progressive water reservoirs, grand stone architectures, and trade-ports were utilized directly to anchor sovereign power.",
        "Decentralized Control: Grasp the key role of local governing boards which oversaw tax collections and corrupt-free elections.",
        "Soft Power Diplomacy: Cultural patronages formed the cohesive identity of the state, serving as an effective diplomat."
      ],
      flashcards: [
        {
          question: `What was the primary key factor behind the sustainability of ${title}?`,
          answer: "The rigorous integration of decentralized local administration with strong, professional sea/land trade networks, protected by state guards."
        },
        {
          question: "How did leadership use art and architecture during this epoch?",
          answer: "Not simply for spiritual devotion, but as robust socio-economic hubs, employment engines, and long-lasting marks of sovereign power."
        },
        {
          question: "Which major takeaway from this chronicle applies to modern management?",
          answer: "The critical requirement of clear accountability, regular public audits, and investing in climate-resilient regional infrastructures."
        }
      ]
    },
    ta: {
      studyPoints: [
        `காலக் குறியீடு: ${title} என்பது நிலம், கடல் மற்றும் நாட்டின் வளங்களை முறையான நிர்வாகத்துடன் கண்காணித்த உன்னத சகாப்தமாகும்.`,
        "நீர் மேலாண்மை மற்றும் கட்டடக் கலை ஆகியவை சமுதாயத்தின் பொருளாதார முதுகெலும்பாக விளங்கியது.",
        "உள்ளூர் பிரதிநிதிகள் மற்றும் நியாயமான தேர்தல் முறைகள் மூலம் மக்களாட்சி நெறிமுறைப்படுத்தப்பட்டது.",
        "கலை மற்றும் பண்பாடு ஆகியவை நாட்டின் இறையாண்மையின் தூதுவர்களாக விளங்கின."
      ],
      flashcards: [
        {
          question: `${title} பேணப்பட்டதற்கான அடிப்படை காரணம் என்ன?`,
          answer: "வலிமையான மத்திய அரசுடன் இணைந்த தன்னாட்சி பெற்ற உள்ளாட்சி அமைப்புகள் மற்றும் வெளிநாடுகளுடனான தடையற்ற கடல் வணிகமே சோழ வம்சத்தின் வெற்றிக்கு அடிகோலியது."
        },
        {
          question: "அக்காலத்திய கலை மற்றும் கோயில்களின் சமூகப் பங்களிப்பு யாது?",
          answer: "கோயில்கள் வெறும் வழிபாட்டுத் தலங்களாக இல்லாமல், தானியக் கிடங்குகளாக, வங்கிகளாக, கலைஞர்களின் வேலைவாய்ப்பு மையங்களாகச் செயல்பட்டன."
        }
      ]
    },
    te: {
      studyPoints: [
        `చారిత్రక అవలోకనం: ${title} అనేది సమర్థవంతమైన పరిపాలన, ప్రజా సంక్షేమ కార్యక్రమాలకు చక్కటి నిదర్శనం.`,
        "చెరువులు, కాలువలు మరియు నౌకాశ్రయాల నిర్మాణం ద్వారా వాణిజ్యం, వ్యవసాయాన్ని ఒకేసారి బలోపేతం చేశారు.",
        "కుడవాలై ఓటింగ్ విధానం ద్వారా అవినీతి రహిత స్థానిక స్వపరిపాలన సాధ్యమైంది.",
        "లలిత కళలు మరియు శిల్పకళలు సామ్రాజ్య వైభవాన్ని నలుదిశలా చాటి చెప్పాయి."
      ],
      flashcards: [
        {
          question: `${title} సుస్థిరతకు కీలక కారణం ఏది?`,
          answer: "వికేంద్రీకరణతో కూడిన స్థానిక సభలు మరియు రాజ్య రక్షణ గల అంతర్జాతీయ జల వాణిజ్యాభివృద్ధి దీని ప్రధాన విజయ సాధనాలు."
        },
        {
          question: "నాటి ఆలయాల ఆర్థిక ప్రాముఖ్యత ఏమిటి?",
          answer: "దేవాలయాలు కేవలం పూజా స్థలాలే కాక, ఆర్థిక లావాదేవీలు నిర్వహించే బ్యాంకులుగా మరియు ఉపాధి కల్పనా కేంద్రాలుగా విలసిల్లాయి."
        }
      ]
    },
    kn: {
      studyPoints: [
        `ಕಾಲಾನುಕ್ರಮಣಿಕೆ: ${title} ಇತಿಹಾಸದಲ್ಲಿ ಆಡಳಿತ ಸ್ಥಿರತೆ ಮತ್ತು ಪ್ರಜಾರಂಜಕ ಯೋಜನೆಗಳ ಕಾರಣವಾಗಿ ಪ್ರಸಿದ್ಧಿ ಪಡೆದಿದೆ.`,
        "ಬೃಹತ್ ಕೆರೆಗಳು ಮತ್ತು ಶಿಲ್ಪಕಲೆಗಳು ಸಾರ್ವಭೌಮ ಶಕ್ತಿಯ ಮಹೋನ್ನತ ಕುರುಹುಗಳಾಗಿದ್ದವು.",
        "ಸ್ಥಳೀಯ ನಾಯಕರ ಹಾಗೂ ಸಭೆಗಳ ಮೂಲಕ ಪಾರದರ್ಶಕ ಚುನಾವಣೆಯನ್ನು ಇವರು ಅನುಷ್ಠಾನಗೊಳಿಸಿದ್ದರು.",
        "ಸಾಹಿತ್ಯ ಹಾಗೂ ಕಲೆಯ ಉತ್ತೇಜನವು ಪ್ರಜೆಗಳ ಆಂತರಿಕ ಭಾವನಾತ್ಮಕ ಒಗ್ಗಟ್ಟನ್ನು ಹೆಚ್ಚಿಸಿತು."
      ],
      flashcards: [
        {
          question: `${title} ಆಡಳಿತದ ಬಹುದೊಡ್ಡ ಯಶಸ್ಸು ಯಾವುದರಲ್ಲಿ ಅಡಗಿದೆ?`,
          answer: "ಸಮರ್ಥ ನೌಕಾ ಸುರಕ್ಷತೆ ಮತ್ತು ಗ್ರಾಮೀಣ ಮಟ್ಟದಲ್ಲೇ ಕಂದಾಯ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಶಿಸ್ತುಬದ್ಧ ವಿತರಣೆಯಲ್ಲಿ ಅಡಗಿದೆ."
        },
        {
          question: "ಆಡಳಿತಗಾರರು ವಾಸ್ತುಶಿಲ್ಪವನ್ನು ಏಕೆ ಬಳಸಿಕೊಂಡರು?",
          answer: "ಕೇವಲ ಕಲೆಯ ಪ್ರದರ್ಶನಕ್ಕಷ್ಟೇ ಅಲ್ಲದೆ, ಪ್ರವಾಹ ಪರಿಸ್ಥಿತಿ ನಿರ್ವಹಣೆ ಮತ್ತು ಜನರಿಗೆ ನೇರ ಉದ್ಯೋಗ ಕೊಡುವ ಉದ್ದೇಶ ಹೊಂದಿದ್ದರು."
        }
      ]
    },
    ml: {
      studyPoints: [
        `ചരിത്ര പ്രാധാന്യം: ${title} വികേന്ദ്രീകൃത ഭരണവും സുരക്ഷിത നീതിന്യായ വ്യവസ്ഥയും കൊണ്ട് കീർത്തി കേട്ടതാണ്.`,
        "കായൽ വ്യാപാര തുറമുഖങ്ങളും കോട്ടകളും പരമാധികാരം ഉറപ്പിക്കാൻ ഉപയോഗിച്ചു.",
        "കൃത്യമായ ഓഡിറ്റിംഗും ഗ്രാമീണ സഭകളും അഴിമതി തടയാൻ സഹായിച്ചു.",
        "ഭരണാധികാരികളുടെ കലാസാംസ്കാരിക പ്രോത്സാഹനം ഐക്യം നിലനിർത്തി."
      ],
      flashcards: [
        {
          question: `${title} ഇതിന്റെ പ്രധാന സവിശേഷത എന്താണ്?`,
          answer: "ശക്തമായ കടൽവ്യാപാര സംരക്ഷണവും ജനകീയ വികേന്ദ്രീകരണവും ഒരുപോലെ നടപ്പിലാക്കി എന്നതാണ് ഇതിന്റെ വിജയം."
        },
        {
          question: "ക്ഷേത്രങ്ങളും വലിയ നിർമ്മിതികളും കൊണ്ട് എന്താണ് ലക്ഷ്യമിട്ടത്?",
          answer: "അവ വെറുമൊരു പ്രാർത്ഥനാകേന്ദ്രം ആയിരുന്നില്ല, മറിച്ച് വലിയ തൊഴിൽ കേന്ദ്രങ്ങളും കാർഷിക കലവറകളും കൂടിയായിരുന്നു."
        }
      ]
    }
  };

  return translations[language] || translations.en;
}
