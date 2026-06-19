/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Megaphone, 
  ShieldCheck, 
  Coins, 
  X, 
  ExternalLink,
  Settings,
  Flame,
  CheckCircle,
  HelpCircle,
  Trophy,
  Activity,
  Maximize2
} from "lucide-react";
import { SouthIndianLanguage } from "../types";
import { localizations } from "../utils/localizer";

interface AdBannerProps {
  isPro: boolean;
  onUpgradeClick: () => void;
  adImpressions: number;
  language?: SouthIndianLanguage;
}

// Highly relative Indian contextual ads to simulate Google Adsense personalized bidding
const GOOGLE_ADSENSE_UNITS = [
  {
    title: "🎖️ TNPSC & KPSC Group 1 Comprehensive Masterclass",
    textEn: "Complete offline & online IAS coaching matching 50-mark history answer criteria. High success rate guaranteed.",
    textHi: "பாடத்திட்டத்தின்படி முழுமையான வரலாற்றுக் குறிப்புகள் மற்றும் தீவிரப்பயிற்சி. உடனே சேருங்கள்!",
    cta: "Apply For Scholarships",
    url: "https://google.com/adsense/example/tnpsc",
    cpc: 8.50
  },
  {
    title: "🏛️ Tour & Reconstruct the Dravidian Architecture",
    textEn: "Investigate historic temple engineering models first-hand. Educational tours for history scholars & creators.",
    textHi: "சோழர் மற்றும் பல்லவர் காலத்துக் கோவில்களின் கட்டிடக்கலை நயம் சார்ந்த நேரடிப் பயிற்சிப் பயணம்.",
    cta: "Book Student Pass",
    url: "https://google.com/adsense/example/tourism",
    cpc: 6.20
  },
  {
    title: "🎓 Oxford Medieval History Scholarship Program",
    textEn: "Get certified in South Asian political structures & early naval warfare studies. Grants up to ₹1,00,000 available.",
    textHi: "பல்கலைக்கழக சான்றிதழ் படிப்பு. மாணவர்களுக்கு உதவித்தொகை வழங்கப்படுகிறது.",
    cta: "Submit Application",
    url: "https://google.com/adsense/example/scholar",
    cpc: 12.00
  }
];

export function AdBanner({ 
  isPro, 
  onUpgradeClick, 
  adImpressions,
  language = "en"
}: AdBannerProps) {
  // AdSense Custom user settings
  const [adsenseEnabled, setAdsenseEnabled] = useState(true);
  const [publisherId, setPublisherId] = useState("ca-pub-8924155829461103");
  const [adSlot, setAdSlot] = useState("slot-98240581");
  const [isEditingSettings, setIsEditingSettings] = useState(false);
  
  // Simulated stats persisted locally
  const [views, setViews] = useState(15);
  const [clicks, setClicks] = useState(1);
  const [activeAdIdx, setActiveAdIdx] = useState(0);

  const strings = localizations[language] || localizations.en;

  // Load configuration and stats from localStorage on mount
  useEffect(() => {
    try {
      const savedEnabled = localStorage.getItem("scriba_adsense_enabled");
      if (savedEnabled !== null) {
        setAdsenseEnabled(savedEnabled === "true");
      }
      
      const savedPub = localStorage.getItem("scriba_adsense_pub_id");
      if (savedPub) {
        setPublisherId(savedPub);
      }

      const savedSlot = localStorage.getItem("scriba_adsense_slot_id");
      if (savedSlot) {
        setAdSlot(savedSlot);
      }

      const savedClicks = localStorage.getItem("scriba_adsense_clicks_wallet");
      if (savedClicks) {
        setClicks(parseInt(savedClicks, 10));
      }

      const savedViews = localStorage.getItem("scriba_adsense_views_wallet");
      if (savedViews) {
        setViews(parseInt(savedViews, 10));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Update views count whenever adImpressions change
  useEffect(() => {
    if (adImpressions > 0) {
      setViews((prev) => {
        const next = prev + 1;
        try {
          localStorage.setItem("scriba_adsense_views_wallet", next.toString());
        } catch (_) {}
        return next;
      });
      // also rotate the active Google ad unit randomly or cyclically
      setActiveAdIdx((prev) => (prev + 1) % GOOGLE_ADSENSE_UNITS.length);
    }
  }, [adImpressions]);

  const handleSaveAdSenseConfig = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem("scriba_adsense_enabled", adsenseEnabled ? "true" : "false");
      localStorage.setItem("scriba_adsense_pub_id", publisherId.trim() || "ca-pub-8924155829461103");
      localStorage.setItem("scriba_adsense_slot_id", adSlot.trim() || "slot-98240581");
      alert(`🎉 Google AdSense connection configuration updated! Live code generated targeting: ${publisherId || "Default ID"}. Your earning simulator is ready.`);
      setIsEditingSettings(false);
    } catch (_) {}
  };

  const handleAdClickSimulated = (e: React.MouseEvent, cpcVal: number) => {
    e.preventDefault();
    setClicks((prev) => {
      const next = prev + 1;
      try {
        localStorage.setItem("scriba_adsense_clicks_wallet", next.toString());
      } catch (_) {}
      return next;
    });
    alert(`💰 Google Ads click registered successfully!\nPublisher account associated: ${publisherId}\nCPC Earned: ₹${cpcVal.toFixed(2)} credited to your console.`);
  };

  const currentAd = GOOGLE_ADSENSE_UNITS[activeAdIdx];
  // Calculate earnings based on CPM views (₹0.20 per view) + CPC click values (₹8.50 average)
  const estimatedEarnings = (views * 0.28) + (clicks * 9.25);

  if (isPro) {
    return (
      <div className="bg-emerald-50 border border-emerald-200/85 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-900 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="bg-emerald-600 text-[#FAF8F5] rounded-full p-1.5 shrink-0 shadow-sm animate-pulse">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="font-serif font-bold text-xs sm:text-sm text-stone-950">PRO Scholar Active</p>
            <p className="text-[11px] text-stone-500 font-medium">All third-party advertising disabled. Full 50-mark comprehensive textbooks and high-speed downloads are unlocked.</p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold bg-emerald-150 text-emerald-900 border border-emerald-250 py-1 px-3 rounded-full uppercase shrink-0">
          Ad-Free Reading Space
        </span>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 border border-stone-200/80 p-5 rounded-2xl space-y-4 shadow-xs" id="adsense-component-wrapper">
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/60 pb-3" id="adsense-console-bar">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
          </span>
          <div className="flex items-center gap-1.5 text-stone-700">
            <Megaphone className="w-4 h-4 text-amber-800" />
            <span className="text-[11px] font-mono font-extrabold tracking-wider uppercase text-stone-800">
              {strings.adsenseSettings}
            </span>
          </div>
        </div>

        {/* Dashboard Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsEditingSettings(!isEditingSettings)}
            className="flex items-center gap-1 text-[11px] font-bold font-mono text-stone-500 hover:text-stone-900 cursor-pointer bg-white px-2.5 py-1 rounded-md border border-stone-200 hover:border-stone-400 transition"
          >
            <Settings className="w-3.5 h-3.5 rotate-45" />
            <span>Customize Publisher Settings</span>
          </button>
        </div>
      </div>

      {/* AdSense Publisher Configuration Field Drawer */}
      {isEditingSettings && (
        <motion.form 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          onSubmit={handleSaveAdSenseConfig}
          className="bg-white rounded-xl p-4 border border-stone-205 space-y-3.5 shadow-inner"
        >
          <div className="flex items-center justify-between">
            <h5 className="font-serif text-xs font-bold text-stone-900 uppercase tracking-tight flex items-center gap-1">
              <Coins className="w-3.5 h-3.5 text-amber-800" />
              Configure Custom Monetization (Earn Money)
            </h5>
            <button 
              type="button" 
              onClick={() => setIsEditingSettings(false)}
              className="text-stone-400 hover:text-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase text-stone-500 mb-1">
                {strings.publisherIdLabel}
              </label>
              <input 
                type="text" 
                required
                value={publisherId}
                onChange={(e) => setPublisherId(e.target.value)}
                placeholder="e.g. ca-pub-xxxxxxxxxxxxxxxx"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs focus:outline-none focus:border-amber-800 text-stone-900 font-mono"
              />
            </div>
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase text-stone-500 mb-1">
                Custom AdSense Slot ID
              </label>
              <input 
                type="text" 
                value={adSlot}
                onChange={(e) => setAdSlot(e.target.value)}
                placeholder="e.g. slot-xxxxxxxx"
                className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs focus:outline-none focus:border-amber-800 text-stone-900 font-mono"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-stone-700 select-none">
              <input 
                type="checkbox" 
                checked={adsenseEnabled}
                onChange={(e) => setAdsenseEnabled(e.target.checked)}
                className="rounded border-stone-300 text-amber-800 focus:ring-amber-500" 
              />
              <span>{strings.adOptionLabel}</span>
            </label>

            <button
              type="submit"
              className="bg-stone-900 hover:bg-stone-850 text-white font-mono text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer transition"
            >
              Apply Connected Credentials
            </button>
          </div>
        </motion.form>
      )}

      {/* AdSense Interactive Analytics Panel */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-100 p-3 rounded-xl border border-stone-200/50" id="adsense-stats-ledger">
        <div className="bg-white p-2.5 rounded-lg border border-stone-200/50 flex items-center gap-2.5">
          <Activity className="w-4 h-4 text-stone-400 shrink-0" />
          <div>
            <p className="text-[9px] font-mono text-stone-400 font-bold uppercase tracking-wider">{strings.impressionsLabel}</p>
            <p className="text-stone-900 font-mono text-xs font-extrabold">{views}</p>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-lg border border-stone-200/50 flex items-center gap-2.5">
          <Flame className="w-4 h-4 text-stone-400 shrink-0 animate-pulse" />
          <div>
            <p className="text-[9px] font-mono text-stone-400 font-bold uppercase tracking-wider">Registered Clicks</p>
            <p className="text-stone-900 font-mono text-xs font-extrabold">{clicks}</p>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-lg border border-stone-200/50 flex items-center gap-2.5">
          <Trophy className="w-4 h-4 text-stone-400 shrink-0" />
          <div>
            <p className="text-[9px] font-mono text-stone-400 font-bold uppercase tracking-wider">Ad CTR Rate</p>
            <p className="text-stone-900 font-mono text-xs font-extrabold">
              {views > 0 ? ((clicks / views) * 100).toFixed(1) : "0.0"}%
            </p>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-lg border border-stone-200/50 flex items-center gap-2.5 col-span-2 sm:col-span-1 bg-amber-50/10 border-amber-200">
          <Coins className="w-4 h-4 text-emerald-600 shrink-0" />
          <div>
            <p className="text-[9px] font-mono text-amber-800 font-bold uppercase tracking-wider">{strings.estEarningsLabel}</p>
            <p className="text-emerald-700 font-mono text-xs font-black">₹{estimatedEarnings.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Render the Active Ad Unit (only if adsense is enabled) */}
      {adsenseEnabled ? (
        <div 
          className="border border-stone-200 bg-white rounded-xl overflow-hidden shadow-xs relative group transition-all duration-300 hover:border-amber-800/30"
          id="live-adsense-banner-unit"
        >
          {/* AdSense Script Badge Details */}
          <div className="bg-amber-100/50 border-b border-stone-100 px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-stone-500">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 link text-emerald-600" />
              Google AdSense Node: <strong>{publisherId}</strong>
            </span>
            <span className="bg-orange-100 text-stone-850 px-1.5 py-0.2 rounded font-semibold text-[9px]">
              Inspected AdSlot ID: {adSlot}
            </span>
          </div>

          {/* Ad Body Layout */}
          <div className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <span className="text-[10px] font-mono uppercase font-bold text-amber-800 block tracking-wide">
                Google Sponsored Bid Match
              </span>
              <h4 className="font-serif text-sm sm:text-base font-extrabold text-stone-950">
                {currentAd.title}
              </h4>
              <p className="text-stone-605 text-xs leading-relaxed font-semibold">
                {language === "en" ? currentAd.textEn : currentAd.textHi}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 py-1">
              <a
                href={currentAd.url}
                onClick={(e) => handleAdClickSimulated(e, currentAd.cpc)}
                className="bg-stone-900 border border-stone-800 text-[#FAF8F5] font-bold text-xs px-4.5 py-2.5 rounded-xl transition duration-200 cursor-pointer shadow-sm hover:bg-amber-900 flex items-center gap-1.5 uppercase font-mono tracking-wider"
              >
                <span>{currentAd.cta}</span>
                <ExternalLink className="w-3 h-3 text-white" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-dashed border-stone-300 rounded-xl p-6 text-center text-stone-400 text-xs">
          🚫 Google AdSense advertising has been paused by the settings toggle. Earn options are offline.
        </div>
      )}

      {/* Footer support notes */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[10.5px] text-stone-450 font-medium">
        <span>
          * Earnings calculation mimics premium CPM standards for Indian educational streams. 
        </span>
        <button
          onClick={onUpgradeClick}
          className="text-amber-800 font-bold hover:underline"
        >
          Want completely ad-free? Upgrade to PRO for ₹50 &rarr;
        </button>
      </div>
    </div>
  );
}
