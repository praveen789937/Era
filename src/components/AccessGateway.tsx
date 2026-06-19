/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  LogIn, 
  Sparkles, 
  CreditCard, 
  Coins, 
  QrCode, 
  CheckCircle2, 
  Lock, 
  X, 
  ShieldAlert, 
  BookOpen, 
  ArrowRight,
  LogOut,
  Zap,
  Info,
  UserCheck
} from "lucide-react";
import { SouthIndianLanguage } from "../types";
import { localizations } from "../utils/localizer";

interface AccessGatewayProps {
  userEmail: string | null;
  onLogin: (email: string) => void;
  onLogout: () => void;
  isPro: boolean;
  onUpgradeToPro: () => void;
  language?: SouthIndianLanguage;
}

export function AccessGateway({ 
  userEmail, 
  onLogin, 
  onLogout, 
  isPro, 
  onUpgradeToPro,
  language = "en"
}: AccessGatewayProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  // Login / Signup Toggle
  const [isSignUp, setIsSignUp] = useState(false);
  
  // Login/Signup form status
  const [formEmail, setFormEmail] = useState("");
  const [formName, setFormName] = useState("");
  const [formPass, setFormPass] = useState("");
  const [role, setRole] = useState("student");
  
  // Payment states
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "net">("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paySuccess, setPaySuccess] = useState(false);
  
  // Mock card inputs
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  // Get active localized strings
  const strings = localizations[language] || localizations.en;

  // Expose global checkout trigger to bypass complex prop drilling
  useEffect(() => {
    const handleTriggerCheckout = () => {
      setShowPaymentModal(true);
    };
    window.addEventListener("trigger-era-checkout", handleTriggerCheckout);
    return () => {
      window.removeEventListener("trigger-era-checkout", handleTriggerCheckout);
    };
  }, []);

  const handleLoginFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formEmail.trim()) return;
    
    if (isSignUp) {
      alert(`🎉 Welcome to ERA, ${formName || "Scholar"}! Your student academic identity has been enrolled successfully. Entering scriptorium!`);
    } else {
      alert(`🎉 Welcome Back, scholar! Authentication verified. Entering scriptorium!`);
    }

    onLogin(formEmail.trim());
    setShowLoginModal(false);
    setFormEmail("");
    setFormName("");
    setFormPass("");
  };

  const handleTriggerPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaySuccess(true);
      setTimeout(() => {
        onUpgradeToPro();
        setPaySuccess(false);
        setShowPaymentModal(false);
      }, 2500);
    }, 2000);
  };

  return (
    <>
      {/* Upper authentication bar & Plan Status Badge */}
      <div className="bg-stone-900 text-[#FAF8F5] py-2.5 px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-stone-800">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-500 animate-pulse" />
          <span className="font-serif font-bold tracking-tight text-[13px] text-amber-400">
            ERA Academic Gateway
          </span>
          <span className="hidden sm:inline text-stone-400 h-3 w-px bg-stone-700 mx-1" />
          <span className="hidden sm:inline text-stone-400">
            {language === "ta" 
              ? "முழு அட்சென்ஸ் வருவாய் மற்றும் 50-மதிப்பெண் பாடத்திட்டத்தை திறக்கவும்." :
             language === "te"
              ? "పూర్తి ప్రకటన ఆప్షన్స్ మరియు 50 మార్కుల సిలబస్ ని అన్‌లాక్ చేయండి." :
             language === "kn"
              ? "ಗೂಗಲ್ ಜಾಹೀರಾತು ಗಳಿಕೆ ಆದಾಯ ಮತ್ತು 50 ಅಂಕಗಳ ಸಿಲಬಸ್ ಸಕ್ರಿಯಗೊಳಿಸಿ." :
             language === "ml"
              ? "പരസ്യ വരുമാനവും 50 മാർക്ക് പഠന കുറിപ്പുകളും അൺലോക്ക് ചെയ്യാം."
              : "Unlock premium notes and secure direct Google ads placement to monetize."}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {userEmail ? (
            <div className="flex items-center gap-2.5" id="portal-user-badge">
              {/* Account badge */}
              <div className="flex items-center gap-1.5 bg-stone-800 px-2.5 py-1 rounded-md border border-stone-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10.5px] max-w-[120px] truncate leading-none text-stone-300">
                  {userEmail}
                </span>
              </div>

              {/* Pro status badge */}
              {isPro ? (
                <div className="bg-amber-500 text-stone-950 font-bold font-mono px-2 py-0.8 rounded text-[10px] uppercase tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-stone-950 animate-bounce" />
                  <span>PRO MEMBER</span>
                </div>
              ) : (
                <button
                  onClick={() => setShowPaymentModal(true)}
                  id="btn-nav-upgrade-pro"
                  className="bg-amber-600 hover:bg-amber-500 text-[#FAF8F5] font-bold font-mono px-2.5 py-1 rounded text-[10px] uppercase cursor-pointer transition flex items-center gap-1"
                >
                  <span>BASIC (UPGRADE ₹50)</span>
                </button>
              )}

              {/* Log Out button */}
              <button
                onClick={onLogout}
                id="btn-gateway-logout"
                className="text-stone-400 hover:text-white transition p-1 cursor-pointer flex items-center gap-1 text-[11px]"
                title="Log Out Account"
              >
                <LogOut className="w-3.5 h-3.5 text-stone-400" />
                <span>({strings.loginLabel === "Log In" ? "Logout" : "வெளியேறு / ലോഗ് ഔട്ട്"})</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsSignUp(false);
                setShowLoginModal(true);
              }}
              id="btn-gateway-login-trigger"
              className="bg-amber-800 hover:bg-amber-700 text-[#FAF8F5] px-3.5 py-1.5 rounded-lg font-bold text-[11px] uppercase cursor-pointer transition flex items-center gap-1"
            >
              <LogIn className="w-3" />
              <span>{strings.loginTrigger}</span>
            </button>
          )}
        </div>
      </div>

      {/* LOGIN/SIGNUP MODAL */}
      <AnimatePresence>
        {showLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLoginModal(false)}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-xs"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-[#FAF8F5] border border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 overflow-hidden text-stone-900"
            >
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-250 rounded-xl flex items-center justify-center mx-auto transition">
                  {isSignUp ? <UserCheck className="w-6 h-6 text-amber-800 animate-bounce" /> : <LogIn className="w-6 h-6 text-amber-900" />}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-stone-950">
                  {isSignUp ? strings.signupLabel : strings.loginLabel}
                </h3>
                
                <p className="text-stone-500 text-xs max-w-xs mx-auto">
                  {isSignUp 
                    ? "Register student credentials to save customized South-Indian exam revision portfolios." 
                    : "Access custom academic summaries, flashcards, and save master 50-mark chronicles."}
                </p>
              </div>

              {/* Login / SignUp Form switcher */}
              <div className="flex border-b border-stone-200 bg-stone-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all ${
                    !isSignUp 
                      ? "bg-white text-stone-900 shadow-xs" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {strings.loginLabel}
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-lg transition-all ${
                    isSignUp 
                      ? "bg-white text-stone-900 shadow-xs" 
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  {strings.signupLabel}
                </button>
              </div>

              <form onSubmit={handleLoginFormSubmit} className="space-y-4">
                {isSignUp && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <label className="block text-[11px] font-mono font-bold uppercase text-stone-500 mb-1">
                      {strings.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Praveen Kumar"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-800 text-stone-900"
                    />
                  </motion.div>
                )}

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-500 mb-1">
                    Student / Teacher Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. praveengiokumar@gmail.com"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-800 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-500 mb-1">
                    {strings.roleLabel}
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-800 text-stone-900"
                  >
                    <option value="student">Student (Classroom & Exams)</option>
                    <option value="teacher">Professor / Educator</option>
                    <option value="aspirant">Competitive Aspirant (IAS/UPSC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-stone-500 mb-1">
                    {strings.passwordLabel}
                  </label>
                  <input
                    type="password"
                    required
                    value={formPass}
                    onChange={(e) => setFormPass(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-amber-800 text-stone-900"
                  />
                </div>

                <div className="bg-amber-50 rounded-lg p-3 flex gap-2 border border-amber-200/50">
                  <Info className="w-4 h-4 text-amber-805 shrink-0 mt-0.5" />
                  <p className="text-[10.5px] text-amber-905 leading-relaxed font-semibold">
                    {strings.savePortalInfo}
                  </p>
                </div>

                <button
                  type="submit"
                  id="btn-modal-login-submit"
                  className="w-full bg-stone-900 hover:bg-amber-900 transition text-[#FAF8F5] text-xs font-bold uppercase py-3 rounded-xl cursor-pointer shadow-sm tracking-wider"
                >
                  {isSignUp ? `${strings.signupLabel} & Go` : strings.enterPortal} &rarr;
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-xs text-amber-800 hover:underline font-semibold cursor-pointer"
                  >
                    {isSignUp ? strings.toggleToLogin : strings.toggleToSignup}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* PRO PAYMENT PORTAL UPGRADE MODAL */}
      <AnimatePresence>
        {showPaymentModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentModal(false)}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-xs"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#FAF8F5] border border-amber-800/20 rounded-2xl shadow-xl overflow-hidden text-stone-900"
            >
              {/* Header */}
              <div className="bg-amber-800 p-6 text-[#FAF8F5] relative">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-5 h-5 text-amber-200 fill-amber-300" />
                  <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest bg-amber-900 px-2 py-0.5 rounded text-amber-200">
                    ERA Pro Upgrade
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-black">Unlock Full 50-Mark Syllabus</h4>
                <p className="text-amber-100 text-xs mt-1.5 max-w-sm">
                  Ditch the sponsorships. Premium tier gives full master level essay outlines, export tools, and unlimited revision modules.
                </p>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                {paySuccess ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full flex items-center justify-center mx-auto text-3xl font-bold animate-bounce shadow">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-stone-900">Payment of ₹50 Successful!</h4>
                      <p className="text-stone-500 text-xs mt-0.5">Welcome to ERA PRO. Activating ad-free study materials...</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Plans description */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-stone-200 rounded-xl p-3.5 bg-white space-y-2 relative opacity-60">
                        <span className="text-[10px] bg-stone-100 text-stone-750 font-bold px-2 py-0.5 rounded-full absolute -top-2.5 left-3 border border-stone-200">
                          Basic Tier
                        </span>
                        <p className="font-bold text-stone-600 text-xs">Free with Sponsorships</p>
                        <ul className="text-[11px] text-stone-500 list-disc list-inside space-y-1 font-medium">
                          <li>Occasional sponsor ads</li>
                          <li>Word/PDF export locks</li>
                          <li>Standard summary lengths</li>
                        </ul>
                      </div>

                      <div className="border-2 border-amber-600 rounded-xl p-3.5 bg-amber-50/20 space-y-2 relative">
                        <span className="text-[10px] bg-amber-600 text-[#FAF8F5] font-black px-2 py-0.5 rounded-full absolute -top-2.5 left-3 shadow-xs">
                          PRO Plan
                        </span>
                        <div className="flex justify-between items-start">
                          <p className="font-extrabold text-stone-900 text-xs">₹50 / Month</p>
                          <span className="text-[9px] font-mono text-emerald-705 font-bold uppercase">Popular</span>
                        </div>
                        <ul className="text-[11px] text-stone-600 list-disc list-inside space-y-1 font-semibold">
                          <li className="text-stone-850">Ad-free reading environment</li>
                          <li className="text-stone-850">50-mark long-essay density</li>
                          <li className="text-stone-850">One-click Document Exports</li>
                        </ul>
                      </div>
                    </div>

                    {/* Payment methods tab */}
                    <div className="space-y-3.5">
                      <label className="block text-[11px] font-mono font-bold uppercase text-stone-500">
                        Select Billing Method (Secure Gateway Partner)
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        <button
                          onClick={() => setPaymentMethod("upi")}
                          className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer ${
                            paymentMethod === "upi"
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
                          }`}
                        >
                          <QrCode className="w-5 h-5" />
                          <span>UPI / QR</span>
                        </button>
                        <button
                          onClick={() => setPaymentMethod("card")}
                          className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer ${
                            paymentMethod === "card"
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
                          }`}
                        >
                          <CreditCard className="w-5 h-5" />
                          <span>Card Details</span>
                        </button>
                        <button
                          onClick={() => setPaymentMethod("net")}
                          className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer ${
                            paymentMethod === "net"
                              ? "bg-stone-900 text-white border-stone-900"
                              : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
                          }`}
                        >
                          <Coins className="w-5 h-5" />
                          <span>Netbanking</span>
                        </button>
                      </div>
                    </div>

                    {/* Mode specific configuration inputs */}
                    {paymentMethod === "upi" ? (
                      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4.5 text-center flex flex-col items-center space-y-3">
                        <div className="bg-white border-2 border-stone-300 p-2 rounded-lg relative">
                          <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=upi://pay?pa=era@gpay&pn=EraAcademic&am=50.00&cu=INR" 
                            alt="ERA Educational UPI QR Code" 
                            className="w-[110px] h-[110px]"
                          />
                          <div className="absolute inset-0 bg-stone-900/5 hover:bg-transparent transition rounded-lg" />
                        </div>
                        <p className="text-[11px] text-stone-500 font-medium">
                          Scan the UPI QR code using BHIM, GPAY, Paytm, or PhonePe apps on your cellular device to pay <strong className="text-stone-900">₹50.00</strong> instantly.
                        </p>
                      </div>
                    ) : paymentMethod === "card" ? (
                      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4.5 space-y-3 text-left">
                        <div>
                          <label className="block text-[10px] font-mono font-bold uppercase text-stone-400 mb-1">Card Number</label>
                          <input 
                            type="text" 
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="4123 5678 9012 3456" 
                            className="w-full bg-white border border-stone-200 rounded-lg py-2 px-3 text-xs focus:outline-none"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[10px] font-mono font-bold uppercase text-stone-400 mb-1">Expiry</label>
                            <input 
                              type="text" 
                              value={cardExpiry}
                              onChange={(e) => setCardExpiry(e.target.value)}
                              placeholder="MM/YY" 
                              className="w-full bg-white border border-stone-200 rounded-lg py-2 px-2.5 text-xs text-center focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-mono font-bold uppercase text-stone-400 mb-1">CVV Security Pin</label>
                            <input 
                              type="password" 
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value)}
                              placeholder="•••" 
                              maxLength={3}
                              className="w-full bg-white border border-stone-200 rounded-lg py-2 px-2.5 text-xs text-center focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-center">
                        <select className="bg-white border rounded-lg p-2 text-xs w-full focus:outline-none text-stone-755 font-semibold">
                          <option>State Bank of India (SBI)</option>
                          <option>HDFC Bank</option>
                          <option>ICICI Bank</option>
                          <option>Indian Bank</option>
                        </select>
                        <p className="text-[11px] text-stone-500 mt-2 font-medium">Re-route securely to your netbanking portal for checkout.</p>
                      </div>
                    )}

                    {/* Pay trigger Button */}
                    <button
                      onClick={handleTriggerPayment}
                      disabled={isProcessing}
                      id="btn-process-payment-modal"
                      className="w-full bg-amber-700 hover:bg-amber-600 font-bold uppercase tracking-wider text-[#FAF8F5] text-xs py-3.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 shadow"
                    >
                      {isProcessing ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#FAF8F5] border-t-transparent animate-spin rounded-full" />
                          <span>Simulating Ledger Verification...</span>
                        </>
                      ) : (
                        <>
                          <span>Agree & Settle ₹50 Single-Charge</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
