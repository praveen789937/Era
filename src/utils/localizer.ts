/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SouthIndianLanguage } from "../types";

export interface LocalizedStrings {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  btnSearch: string;
  btnSaveLesson: string;
  btnAlreadySaved: string;
  tabArchives: string;
  tabCurriculum: string;
  suggestedTopics: string;
  eraLabel: string;
  significanceLabel: string;
  locationLabel: string;
  lessonsHeader: string;
  lessonsSub: string;
  notebookHeader: string;
  notebookSub: string;
  emptyCurriculum: string;
  reflectTitle: string;
  reflectPlaceholder: string;
  btnSaveReflect: string;
  reflectSavedToast: string;
  loadingTitle: string;
  loadingQuote1: string;
  loadingQuote2: string;
  loadingQuote3: string;
  proNotice: string;
  proDescription: string;
  exploreCategories: string;
  
  // New Localized Keys
  loginLabel: string;
  signupLabel: string;
  loginTrigger: string;
  toggleToSignup: string;
  toggleToLogin: string;
  fullNameLabel: string;
  roleLabel: string;
  passwordLabel: string;
  enterPortal: string;
  exportPdfLabel: string;
  exportWordLabel: string;
  adsenseSettings: string;
  publisherIdLabel: string;
  applyIdBtn: string;
  estEarningsLabel: string;
  impressionsLabel: string;
  adOptionLabel: string;
  simulateAdSec: string;
  savePortalInfo: string;
}

export const localizations: Record<SouthIndianLanguage, LocalizedStrings> = {
  en: {
    title: "ERA",
    subtitle: "Your AI Personal Historian",
    searchPlaceholder: "Search any historical dynasty, battle, empire, or epoch...",
    btnSearch: "Recall History",
    btnSaveLesson: "Save to Curriculum",
    btnAlreadySaved: "Saved in Archives",
    tabArchives: "The Scriptorium (Search)",
    tabCurriculum: "My Curriculum Notebook",
    suggestedTopics: "Centuries in Focus (Suggested)",
    eraLabel: "Historical Era",
    significanceLabel: "Ripple Effect / Importance",
    locationLabel: "Mapped Location",
    lessonsHeader: "Strategic Takeaways & Actionable Wisdom",
    lessonsSub: "Actionable direct lessons from this chronicle for modern leaders and thinkers.",
    notebookHeader: "Curriculum Collection",
    notebookSub: "Your personalized digital archive of summarized histories, timelines, and journals.",
    emptyCurriculum: "No scrolls are saved yet. Research an era and save it to begin your curriculum shelf.",
    reflectTitle: "Personal Reflections & Study Notes",
    reflectPlaceholder: "Synthesize your own thoughts, modernize the lessons, or pen your exam study reviews here...",
    btnSaveReflect: "Store Reflections",
    reflectSavedToast: "Reflections logged in local codex successfully.",
    loadingTitle: "Summoning archives from the flow of time...",
    loadingQuote1: "Sifting through ancient palm-leaf scrolls...",
    loadingQuote2: "Securing chronicles across the sands of eras...",
    loadingQuote3: "Mapping chronological coordinates on the cosmic timeline...",
    proNotice: "Pro Plan Sync",
    proDescription: "Upgrade to authorize server credentials for real-time secure database synchronization, collaborative worksheets, and team study decks.",
    exploreCategories: "Categorized Sagas",
    
    // New Keys english
    loginLabel: "Log In",
    signupLabel: "Sign Up",
    loginTrigger: "Log In / Sign Up",
    toggleToSignup: "New student? Sign Up Here",
    toggleToLogin: "Already registered? Log In Here",
    fullNameLabel: "Full Candidate/Student Name",
    roleLabel: "Academic Stream / Role",
    passwordLabel: "Secret Passcode (Confidential)",
    enterPortal: "Authenticate & Enter",
    exportPdfLabel: "Download Academic PDF",
    exportWordLabel: "Download Word Essay",
    adsenseSettings: "Google AdSense & Earnings Console",
    publisherIdLabel: "Custom Google AdSense Publisher Code",
    applyIdBtn: "Link publisher ID to earn money",
    estEarningsLabel: "Simulated Ad Earnings",
    impressionsLabel: "Impressions Ledger",
    adOptionLabel: "Enable Google AdSense Banner Ads",
    simulateAdSec: "Real-Time Google Ad Performance Indicators",
    savePortalInfo: "Enrollment details sync instantly! Standard 50-mark guidelines apply."
  },
  ta: {
    title: "சரித்திரன் (ERA)",
    subtitle: "உங்கள் செயற்கை நுண்ணறிவு வரலாற்று ஆசிரியர்",
    searchPlaceholder: "ஏதேனும் ஒரு வரலாற்று வம்சம், போர், பேரரசு அல்லது காலத்தை தேடுங்கள்...",
    btnSearch: "வரலாற்றை மீளப்பெறு",
    btnSaveLesson: "பாடத்திட்டத்தில் சேமி",
    btnAlreadySaved: "தொகுப்பில் சேமிக்கப்பட்டது",
    tabArchives: "சரித்திரக் கூடம் (தேடல்)",
    tabCurriculum: "என் வரலாற்றுக்குறிப்பேடு",
    suggestedTopics: "பரிந்துரைக்கப்படும் தலைப்புகள்",
    eraLabel: "வரலாற்று காலம்",
    significanceLabel: "வரலாற்று தாக்கம் / முக்கியத்துவம்",
    locationLabel: "புவியியல் இருப்பிடம்",
    lessonsHeader: "முக்கிய படிப்பினைகளும் போதனைகளும்",
    lessonsSub: "இன்றைய தலைவர்கள் மற்றும் சிந்தனையாளர்களுக்கான வரலாற்று வழிகாட்டுதல்கள்.",
    notebookHeader: "என் வரலாற்று நூலகம்",
    notebookSub: "நீங்கள் சேமித்த வரலாற்று காலக்கோடுகள் மற்றும் சுயகுறிப்புகள் கொண்ட பெட்டகம்.",
    emptyCurriculum: "இன்னும் குறிப்பேடுகள் சேமிக்கப்படவில்லை. புதிய தேடலைத் தொடங்கி, அதை உங்கள் நூலக அலமாரியில் சேமிக்கவும்.",
    reflectTitle: "எனது சுய கருத்துக்களும் குறிப்புகளும்",
    reflectPlaceholder: "அன்றைய பாடங்களில் இருந்து நீங்கள் கற்றுக்கொண்டவை மற்றும் தேர்வுக்கான சுயவிவர குறிப்புகளை இங்கு எழுதுங்கள்...",
    btnSaveReflect: "குறிப்புகளைப் பதிவுசெய்",
    reflectSavedToast: "சுயகுறிப்புகள் வெற்றிகரமாக சேமிக்கப்பட்டன.",
    loadingTitle: "காலப்பெட்டகத்திலிருந்து ஆவணங்களை மீட்டெடுக்கிறது...",
    loadingQuote1: "பண்டைய ஓலைச்சுவடிகளை ஆராய்ந்து கொண்டிருக்கிறது...",
    loadingQuote2: "யுகங்களின் மணற்பரப்பில் வரலாற்று நூல்களைத் திரட்டுகிறது...",
    loadingQuote3: "வரலாற்றுப் பின்னணிகளைத் தொகுத்துக் காலக்கிரமமாக வரிசைப்படுத்துகிறது...",
    proNotice: "புரோ திட்டம் (Pro Plan)",
    proDescription: "உங்கள் பாடங்களை பல சாதனங்களில் ஒத்திசைக்கவும், நண்பர்களுடன் இணைந்து படிக்கவும் புரோ திட்டத்திற்கு மேம்படுத்துங்கள்.",
    exploreCategories: "வரலாற்று பிரிவுகள்",
    
    // New Keys Tamil
    loginLabel: "உள்நுழைவு (Log In)",
    signupLabel: "பதிவு செய்க (Sign Up)",
    loginTrigger: "உள்நுழை / பதிவு செய்",
    toggleToSignup: "புதிய மாணவரா? இங்கு பதிவு செய்யவும்",
    toggleToLogin: "ஏற்கனவே கணக்கு உள்ளதா? இங்கு உள்நுழையவும்",
    fullNameLabel: "மாணவர் / விண்ணப்பதாரர் பெயர்",
    roleLabel: "கல்விப் பிரிவு / பங்கு",
    passwordLabel: "ரகசிய கடவுச்சொல் (Confidential)",
    enterPortal: "கணக்கை சரிபார்த்து உள்ளே நுழை",
    exportPdfLabel: "கல்வி PDF தரவிறக்கம்",
    exportWordLabel: "வேர்ட் (Word Essay) தரவிறக்கம்",
    adsenseSettings: "கூகிள் அட்சென்ஸ் மற்றும் வருவாய் கட்டுப்பாட்டு மையம்",
    publisherIdLabel: "தனிப்பயன் கூகிள் அட்சென்ஸ் விளம்பர குறியீடு ID",
    applyIdBtn: "வருவாய் ஈட்ட பப்ளிஷர் ஐடியை இணைக்கவும்",
    estEarningsLabel: "மதிப்பிடப்பட்ட விளம்பர வருவாய்",
    impressionsLabel: "விளம்பர பார்வைகள்",
    adOptionLabel: "கூகிள் அட்சென்ஸ் விளம்பரங்களை இயக்கு",
    simulateAdSec: "நடைமுறை விளம்பர செயல்திறன் குறியீடு",
    savePortalInfo: "விவரங்கள் உடனடியாக சேமிக்கப்படும்! 50 மதிப்பெண்கள் விதிமுறைகள் பொருந்தும்."
  },
  te: {
    title: "చరిత్రకారుడు (ERA)",
    subtitle: "మీ AI వ్యక్తిగత చరిత్రకారుడు",
    searchPlaceholder: "ఏదైనా చారిత్రక రాజవంశం, యుద్ధం, సామ్రాజ్యం లేదా శకం కోసం వెతకండి...",
    btnSearch: "చరిత్రను గుర్తుచేసుకో",
    btnSaveLesson: "పాఠ్యప్రణాళికలో సేవ్ చేయి",
    btnAlreadySaved: "సేవ్ చేయబడింది",
    tabArchives: "చరిత్ర శోధన (శోధన)",
    tabCurriculum: "నా చారిత్రక డైరీ",
    suggestedTopics: "సూచించబడిన చారిత్రక అంశాలు",
    eraLabel: "చారిత్రక శకం",
    significanceLabel: "చారిత్రక ప్రభావం / ప్రాముఖ్యత",
    locationLabel: "భౌగోళిక ప్రాంతం",
    lessonsHeader: "కీలకమైన పాఠాలు మరియు వ్యూహాత్మక జ్ఞానం",
    lessonsSub: "ఆధునిక ఆలోచనాపరుల కోసం గతం అందించే ముఖ్యమైన జీవన సూత్రాలు.",
    notebookHeader: "నా పాఠ్యప్రణాళికా నిధి",
    notebookSub: "మీరు శోధించిన విషయాలు, కాలక్రమ పట్టికలు మరియు వ్యక్తిగత విశ్లేషణల సమాహారం.",
    emptyCurriculum: "ఇంకా ఎలాంటి చారిత్రక భాగాలు సేవ్ చేయబడలేదు. ఒక శకాన్ని వెతికి, ఇక్కడ భద్రపరుచుకోండి.",
    reflectTitle: "నా వ్యక్తిగత ఆలోచనలు మరియు గమనికలు",
    reflectPlaceholder: "ఈ చరిత్ర నుండి మీరు గ్రహించిన వ్యూహాలను మరియు మీ అధ్యయన సమీక్షలను ఇక్కడ రాయండి...",
    btnSaveReflect: "విశ్లేషణను సేవ్ చేయి",
    reflectSavedToast: "గమనికలు విజయవంతంగా భద్రపరచబడ్డాయి.",
    loadingTitle: "కాల గర్భంలో దాగి ఉన్న చారిత్రక ఆధారాలను వెలికితీస్తోంది...",
    loadingQuote1: "పురాతన తాళపత్ర గ్రంథాలను శోధిస్తోంది...",
    loadingQuote2: "యుగాల తరబడి నిక్షిప్తమైన చారిత్రక సాక్ష్యాలను క్రోడీకరిస్తోంది...",
    loadingQuote3: "చారిత్రక సంఘటనలను కాలక్రమానుసారంగా అమరుస్తోంది...",
    proNotice: "ప్రో ప్లాన్ సింక్",
    proDescription: "మల్టీ-డివైజ్ క్లౌడ్ స్టోరేజ్ మరియు సహకార అధ్యయన ప్యాక్‌ల కోసం ప్రో వెర్షన్‌కు అప్‌గ్రేడ్ చేయండి.",
    exploreCategories: "వర్గీకరించబడిన చరిత్రలు",
    
    // New Keys Telugu
    loginLabel: "లాగిన్ చేయండి (Log In)",
    signupLabel: "నమోదు చేసుకోండి (Sign Up)",
    loginTrigger: "లాగిన్ / సైన్ అప్",
    toggleToSignup: "కొత్త విద్యార్థా? ఇక్కడ నమోదు చేసుకోండి",
    toggleToLogin: "ఖాతా ఉందా? ఇక్కడ లాగిన్ అవ్వండి",
    fullNameLabel: "విద్యార్థి పూర్తి పేరు",
    roleLabel: "విద్యా రంగం / పాత్ర",
    passwordLabel: "రహస్య పాస్‌కోడ్ (కాన్ఫిడెన్షియల్)",
    enterPortal: "పోర్టల్ లోకి ప్రవేశించండి",
    exportPdfLabel: "అకాడమిక్ PDF డౌన్‌లోడ్",
    exportWordLabel: "వర్డ్ డాక్యుమెంట్ ఎస్సే డౌన్‌లోడ్",
    adsenseSettings: "గూగుల్ యాడ్‌సెన్స్ & రాబడి నియంత్రణ బోర్డు",
    publisherIdLabel: "వ్యక్తిగత గూగుల్ యాడ్‌సెన్స్ కోడ్ ID",
    applyIdBtn: "రాబడి పొందడానికి పబ్లిషర్ ఐడిని జోడించండి",
    estEarningsLabel: "అంచనా వేసిన ప్రకటన ఆదాయం",
    impressionsLabel: "ప్రకటన వీక్షణలు",
    adOptionLabel: "గూగుల్ యాడ్‌సెన్స్ ప్రకటనలను అనుమతించు",
    simulateAdSec: "నిజ-సమయ ప్రకటనల ప్రదర్శన సూచిక",
    savePortalInfo: "మీ వివరాలు వెంటనే సేవ్ చేయబడ్డాయి! 50 మార్కుల నియమావళి వర్తిస్తుంది."
  },
  kn: {
    title: "ಚರಿತ್ರಕಾರ (ERA)",
    subtitle: "ನಿಮ್ಮ AI ವೈಯಕ್ತಿಕ ಇತಿಹಾಸಕಾರ",
    searchPlaceholder: "ಯಾವುದೇ ಐತಿಹಾಸಿಕ ರಾಜವಂಶ, ಯುದ್ಧ, ಸಾಮ್ರಾಜ್ಯ ಅಥವಾ ಯುಗವನ್ನು ಹುಡುಕಿ...",
    btnSearch: "ಇತಿಹಾಸವನ್ನು ಮರಳಿ ತರು",
    btnSaveLesson: "ಕಲಿಕಾ ಕೋಶಕ್ಕೆ ಸೇರಿಸು",
    btnAlreadySaved: "ಕೋಶದಲ್ಲಿ ಭದ್ರವಾಗಿದೆ",
    tabArchives: "ಇತಿಹಾಸ ಶೋಧನಾಲಯ (ಹುಡುಕಾಟ)",
    tabCurriculum: "ನನ್ನ ಅಧ್ಯಯನ ಟಿಪ್ಪಣಿ",
    suggestedTopics: "ಸೂಚಿಸಲಾದ ವಿಷಯಗಳು",
    eraLabel: "ಐತಿಹಾಸಿಕ ಕಾಲ",
    significanceLabel: "ಐತಿಹಾಸಿಕ ಪ್ರಭಾವ / ಪ್ರಾಮುಖ್ಯತೆ",
    locationLabel: "ಭೂಗೋಳಿಕ ಸ್ಥಳ",
    lessonsHeader: "ಮುಖ್ಯ ಪಾಠಗಳು ಮತ್ತು ಕಾರ್ಯಸಾಧ್ಯ ಜ್ಞಾನ",
    lessonsSub: "ಆಧುನಿಕ ನಾಯಕರು ಮತ್ತು ಪ್ರಗತಿಪರರಿಗಾಗಿ ಈ ಇತಿಹಾಸದಿಂದ ದೊರೆಯುವ ಅಮೂಲ್ಯ ಪಾಠಗಳು.",
    notebookHeader: "ನನ್ನ ಪಠ್ಯಪುಸ್ತಕಗಳ ಶೆಲ್ಫ್",
    notebookSub: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಐತಿಹಾಸಿಕ ಕಾಲಾವಧಿಗಳು, ಸಾರಾಂಶಗಳು ಮತ್ತು ಟಿಪ್ಪಣಿಗಳ ರಕ್ಷಿತ ಸರಣಿ.",
    emptyCurriculum: "ಇನ್ನೂ ಯಾವುದೇ ಇತಿಹಾಸ ಸಂಶೋಧನೆಯನ್ನು ಉಳಿಸಲಾಗಿಲ್ಲ. ಹೊಸ ಸಾಹಸವನ್ನು ಪ್ರಾರಂಭಿಸಿ ಇಲ್ಲಿ ಉಳಿಸಿ.",
    reflectTitle: "ನನ್ನ ಚಿಂತನೆಗಳು ಮತ್ತು ಸಂಶೋಧನಾ ಟಿಪ್ಪಣಿಗಳು",
    reflectPlaceholder: "ನಿಮ್ಮ ಅಧ್ಯಯನ ವಿಮರ್ಶೆಗಳನ್ನು, ಪ್ರಶ್ನೆಗಳನ್ನು ಅಥವಾ ಅನಿಸಿಕೆಗಳನ್ನು ಇಲ್ಲಿ ಬರೆದಿಡಿ...",
    btnSaveReflect: "ಟಿಪ್ಪಣಿಯನ್ನು ಉಳಿಸಿ",
    reflectSavedToast: "ನಿಮ್ಮ ಸ್ವಂತ ಅನಿಸಿಕೆಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಮೂದಿಸಲಾಗಿದೆ.",
    loadingTitle: "ಕಾಲದ ಸುಳಿಯಿಂದ ಐತಿಹಾಸಿಕ ರಹಸ್ಯಗಳನ್ನು ಹೊರತರುತ್ತಿದೆ...",
    loadingQuote1: "ತಾಳೆಗರಿ ಹಸ್ತಪ್ರತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    loadingQuote2: "ಯಗ ಯುಗಾಂತರಗಳ ಮರಳಿನಲ್ಲಿ ಇತಿಹಾಸ ಪ್ರಭೆಯನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
    loadingQuote3: "ಘಟನೆಗಳನ್ನು ಕ್ರಮಬದ್ಧವಾಗಿ ಜೋಡಿಸಿ ಇತಿಹಾಸದ ರೇಖೆ ಸೃಷ್ಟಿಸಲಾಗುತ್ತಿದೆ...",
    proNotice: "ಪ್ರೊ ಪ್ಲಾನ್ ಕೊಡುಗೆ",
    proDescription: "ಕ್ಲೌಡ್ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಜಂಟಿ ಅಧ್ಯಯನ ನಡೆಸಲು ಇಂದೇ ಇತಿಹಾಸಕಾರ ಪ್ರೊ ಗೆ ಪ್ರವೇಶ ಪಡೆದುಕೊಳ್ಳಿ.",
    exploreCategories: "ಐತಿಹಾಸಿಕ ವಿಭಾಗಗಳು",
    
    // New Keys Kannada
    loginLabel: "ಲಾಗಿನ್ ಮಾಡಿ (Log In)",
    signupLabel: "ನೋಂದಾಯಿಸಿ (Sign Up)",
    loginTrigger: "ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್",
    toggleToSignup: "ಹೊಸ ವಿದ್ಯಾರ್ಥಿಯೇ? ಇಲ್ಲಿ ನೋಂದಾಯಿಸಿ",
    toggleToLogin: "ಉಳಿತಾಯ ಖಾತೆಯಿದೆಯೇ? ಇಲ್ಲಿ ಲಾಗಿನ್ ಆಗಿ",
    fullNameLabel: "ವಿದ್ಯಾರ್ಥಿಯ ಪೂರ್ಣ ಹೆಸರು",
    roleLabel: "ಶೈಕ್ಷಣಿಕ ಸ್ಟ್ರೀಮ್ / ಪಾತ್ರ",
    passwordLabel: "ರಹಸ್ಯ ಪಾಸ್‌ವರ್ಡ್ (ಕಾನ್ಫಿಡೆಂಷಿಯಲ್)",
    enterPortal: "ಪ್ರವೇಶ ಯಶಸ್ವಿಗೊಳಿಸಿ",
    exportPdfLabel: "ಶೈಕ್ಷಣಿಕ ಪಿಡಿಎಫ್ ಡೌನ್‌ಲೋಡ್",
    exportWordLabel: "ವರ್ಡ್ ಪ್ರಬಂಧ ಡೌನ್‌ಲೋಡ್",
    adsenseSettings: "ಗೂಗಲ್ ಆಡ್ಸೆನ್ಸ್ ಮತ್ತು ಆದಾಯ ಫಲಕ",
    publisherIdLabel: "ಕಸ್ಟಮ್ ಗೂಗಲ್ ಆಡ್ಸೆನ್ಸ್ ಪ್ರಕಾಶಕರ ಕೋಡ್ ID",
    applyIdBtn: "ಆದಾಯ ಗಳಿಸಲು ಪ್ರಕಾಶಕರ ಐಡಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ",
    estEarningsLabel: "ಅಂದಾಜು ಜಾಹೀರಾತು ಗಳಿಕೆ",
    impressionsLabel: "ಜಾಹೀರಾತು ವೀಕ್ಷಣೆಗಳು",
    adOptionLabel: "ಗೂಗಲ್ ಆಡ್ಸೆನ್ಸ್ ಜಾಹೀರಾತುಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
    simulateAdSec: "ನೈಜ-ಸಮಯದ ಜಾಹೀರಾತು ಪ್ರದರ್ಶನ ಸೂಚಕಗಳು",
    savePortalInfo: "ವಿವರಗಳನ್ನು ತಕ್ಷಣ ಉಳಿಸಲಾಗಿದೆ! 50 ಅಂಕಗಳ ಶೈಕ್ಷಣಿಕ ಸೂಚನೆಗಳು ಅನ್ವಯಿಸುತ್ತವೆ."
  },
  ml: {
    title: "ചരിത്രകാരൻ (ERA)",
    subtitle: "നിങ്ങളുടെ AI വ്യക്തിഗത ചരിത്രകാരൻ",
    searchPlaceholder: "ഏതെങ്കിലും ചരിത്രപരമായ രാജവംശം, യുദ്ധം, സാമ്രാജ്യം അല്ലെങ്കിൽ യുഗം തിരയുക...",
    btnSearch: "ചരിത്രം പുനരാവിഷ്കരിക്കുക",
    btnSaveLesson: "പാഠ്യപദ്ധതിയിലേക്ക് ചേർക്കുക",
    btnAlreadySaved: "ശേഖരത്തിൽ സൂക്ഷിച്ചിരിക്കുന്നു",
    tabArchives: "ചരിത്ര മണ്ഡപം (തിരച്ചിൽ)",
    tabCurriculum: "എന്റെ ചരിത്ര ഡയറി",
    suggestedTopics: "ശ്രദ്ധേയമായ ചരിത്ര വിഷയങ്ങൾ",
    eraLabel: "ചരിത്രപരമായ കാലഘട്ടം",
    significanceLabel: "ചരിത്രപരമായ ആഘാതം / പ്രാധാന്യം",
    locationLabel: "ഭൂമിശാസ്ത്രപരമായ സ്ഥാനം",
    lessonsHeader: "പ്രധാന പാഠങ്ങളും തന്ത്രപരമായ ഉൾക്കാഴ്ചകളും",
    lessonsSub: "ആധുനിക നയിതാക്കൾക്കും ചിന്തകർക്കുമായി ഈ ചരിത്രം നൽകുന്ന സുപ്രധാന വിലയിരുത്തലുകൾ.",
    notebookHeader: "എന്റെ പുസ്തകക്കൂട്",
    notebookSub: "നിങ്ങൾ സംഗ്രഹിച്ച ചരിത്രരേഖകൾ, സമയരേഖകളും വ്യക്തിഗത കുറിപ്പുകളും ശേഖരം.",
    emptyCurriculum: "ചരിത്രക്കുറിപ്പുകൾ ഒന്നും സൂക്ഷിച്ചിട്ടില്ല. പുതുതായൊന്ന് തിരഞ്ഞു പാഠപ്പുസ്തകത്തിലേക്ക് ചേർക്കൂ.",
    reflectTitle: "എന്റെ സ്വന്തം വിലയിരുത്തലുകളും പഠനകുറിപ്പുകളും",
    reflectPlaceholder: "ഈ സംഭവങ്ങളിൽ നിന്നുള്ള നിങ്ങളുടെ സ്വന്തം നിരീക്ഷണങ്ങളും പഠന സഹായികളും ഇവിടെ രേഖപ്പെടുത്താം...",
    btnSaveReflect: "കുറിപ്പുകൾ റെക്കോർഡ് ചെയ്യുക",
    reflectSavedToast: "നിരീക്ഷണങ്ങൾ ഡയറിയിൽ വിജയകരമായി രേഖപ്പെടുത്തി.",
    loadingTitle: "കാലത്തിന്റെ ഏടുകളിൽ നിന്ന് ചരിത്രം വീണ്ടെടുക്കുന്നു...",
    loadingQuote1: "പുരാതന താളിയോല ഗ്രന്ഥങ്ങൾ പരിശോധിക്കുന്നു...",
    loadingQuote2: "യുഗങ്ങളുടെ മണൽപ്പരപ്പിലൂടെ ചരിത്ര രേഖകൾ തപ്പിയെടുക്കുന്നു...",
    loadingQuote3: "സംഭവങ്ങളെ കാലക്രമത്തിൽ തിട്ടപ്പെടുത്തി ക്രമീകരിക്കുന്നു...",
    proNotice: "പ്രോ പ്ലാൻ സമന്വയം",
    proDescription: "വിവിധ ഡിവൈസുകളിൽ സിങ്ക് ചെയ്യാനും കൂട്ടായ ഗ്രൂപ്പ് വിദ്യഭ്യാസത്തിനും ചരിത്രകാരൻ പ്രോയിലേക്ക് മാറുക.",
    exploreCategories: "ചരിത്രപരമായ വർഗ്ഗീകരണം",
    
    // New Keys Malayalam
    loginLabel: "ലോഗിൻ ചെയ്യുക (Log In)",
    signupLabel: "അക്കൗണ്ട് എടുക്കുക (Sign Up)",
    loginTrigger: "ലോഗിൻ / സൈൻ അപ്പ്",
    toggleToSignup: "പുതിയ വിദ്യാർത്ഥിയാണോ? ഇവിടെ രജിസ്റ്റർ ചെയ്യാം",
    toggleToLogin: "നിലവിൽ അക്കൗണ്ട് ഉണ്ടോ? ഇവിടെ ലോഗിൻ ചെയ്യാം",
    fullNameLabel: "വിദ്യാർത്ഥിയുടെ പൂർണ്ണ നാമം",
    roleLabel: "വിദ്യാഭ്യാസ വിഭാഗം / റോൾ",
    passwordLabel: "രഹസ്യ പാസ്‌വേഡ് (Confidential)",
    enterPortal: "പരിശോധിച്ച് പോർട്ടലിൽ പ്രവേശിക്കുക",
    exportPdfLabel: "അക്കാദമിക് PDF ഡൗൺലോഡ്",
    exportWordLabel: "വേർഡ് പ്രബന്ധം ഡൗൺലോഡ്",
    adsenseSettings: "ഗൂഗിൾ ആഡ്സെൻസ് & വരുമാന നിയന്ത്രണ ബോർഡ്",
    publisherIdLabel: "കസ്റ്റം ഗൂഗിൾ ആഡ്സെൻസ് പബ്ലിഷർ കോഡ് ID",
    applyIdBtn: "വരുമാനം ലഭിക്കാൻ പബ്ലിഷർ ഐഡി ബന്ധിപ്പിക്കുക",
    estEarningsLabel: "പ്രതീക്ഷിക്കുന്ന മൊത്തം വരുമാനം",
    impressionsLabel: "പരസ്യ കാഴ്ചകൾ",
    adOptionLabel: "ഗൂഗിൾ ആഡ്സെൻസ് പരസ്യങ്ങൾ സജീവമാക്കുക",
    simulateAdSec: "തത്സമയ പരസ്യ പ്രകടന വിലയിരുത്തൽ",
    savePortalInfo: "വിവരങ്ങൾ ഉടൻ തന്നെ ഇവിടെ സംരക്ഷിച്ചു! 50 മാർക്ക് നിയമാവലികൾ ബാധകമാണ്."
  }
};
