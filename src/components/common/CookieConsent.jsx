import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  
  // Custom preferences state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Show banner after a slight delay for better UX, if no consent is saved
    const consent = localStorage.getItem("achaia_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const updateConsent = (type, consentValue, customPrefs = null) => {
    // Save to localStorage
    localStorage.setItem("achaia_cookie_consent", consentValue);
    if (customPrefs) {
      localStorage.setItem("achaia_cookie_consent_prefs", JSON.stringify(customPrefs));
    }

    // Update Google Consent Mode v2 dynamically
    if (window.gtag) {
      const analyticsState = type === "all" ? "granted" : type === "decline" ? "denied" : (customPrefs?.analytics ? "granted" : "denied");
      const marketingState = type === "all" ? "granted" : type === "decline" ? "denied" : (customPrefs?.marketing ? "granted" : "denied");
      
      window.gtag("consent", "update", {
        analytics_storage: analyticsState,
        ad_storage: marketingState,
        personalization_storage: marketingState,
      });
    }

    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    updateConsent("all", "accepted", { necessary: true, analytics: true, marketing: true });
  };

  const handleDeclineAll = () => {
    updateConsent("decline", "declined", { necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    updateConsent("custom", "custom", preferences);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 rounded-2xl bg-surface/85 backdrop-blur-2xl border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] p-6 overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-radial-gradient(circle, rgba(160,214,0,0.08)_0%,_transparent_70%) pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-radial-gradient(circle, rgba(131,66,251,0.08)_0%,_transparent_70%) pointer-events-none" />

          {/* Banner Layout */}
          <div className="relative z-10 flex flex-col gap-4">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-secondary">
                  {/* Premium Cookie SVG */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 16v.01" />
                    <path d="M7 13v.01" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white tracking-tight text-[15px]">Cookie Preferences</h4>
              </div>
              
              {/* Close Button */}
              <button 
                onClick={handleDeclineAll}
                className="text-white/40 hover:text-white/80 transition-colors p-1 rounded-lg hover:bg-white/[0.03]"
                aria-label="Decline and close"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Description / Preference settings */}
            {!showManage ? (
              <p className="text-[13px] text-white/70 leading-relaxed">
                We use cookies to optimize site performance, analyze traffic, and enhance your browsing experience. 
                Learn more in our{" "}
                <Link to="/privacy" className="text-secondary hover:text-secondary-fixed transition-colors font-medium underline underline-offset-4">
                  Privacy Policy
                </Link>
                .
              </p>
            ) : (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex flex-col gap-3 my-2"
              >
                {/* Necessary cookies */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div>
                    <h5 className="text-[12px] font-semibold text-white">Strictly Necessary</h5>
                    <p className="text-[11px] text-white/50">Required for website functionality. Cannot be disabled.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-not-allowed">
                    <input type="checkbox" checked disabled className="sr-only peer" />
                    <div className="w-9 h-5 bg-secondary/50 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-on-secondary after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                  </div>
                </div>

                {/* Performance & Analytics */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div>
                    <h5 className="text-[12px] font-semibold text-white">Performance & Analytics</h5>
                    <p className="text-[11px] text-white/50">Helps us understand how visitors interact with the site.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics} 
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer" 
                    />
                    <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:bg-secondary peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white peer-checked:after:bg-black after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                  </label>
                </div>

                {/* Marketing & Ads */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div>
                    <h5 className="text-[12px] font-semibold text-white">Marketing & Personalization</h5>
                    <p className="text-[11px] text-white/50">Allows customized experiences and relevant advertisements.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing} 
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer" 
                    />
                    <div className="w-9 h-5 bg-white/10 rounded-full peer peer-checked:bg-secondary peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white peer-checked:after:bg-black after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                  </label>
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-end gap-2.5 mt-2">
              {!showManage ? (
                <>
                  <button
                    onClick={() => setShowManage(true)}
                    className="text-[12px] font-semibold text-white/60 hover:text-white px-3 py-2 rounded-xl transition-colors cursor-pointer border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.05]"
                  >
                    Manage
                  </button>
                  <button
                    onClick={handleDeclineAll}
                    className="text-[12px] font-semibold text-white/80 hover:text-white px-4 py-2 rounded-xl transition-colors cursor-pointer hover:bg-white/[0.04]"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="text-[12px] font-bold text-black bg-secondary hover:bg-secondary/90 px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(160,214,0,0.2)] active:scale-95 hover:scale-[1.02]"
                  >
                    Accept All
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowManage(false)}
                    className="text-[12px] font-semibold text-white/60 hover:text-white px-3 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="text-[12px] font-semibold text-white bg-white/10 hover:bg-white/15 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Save Selection
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="text-[12px] font-bold text-black bg-secondary hover:bg-secondary/90 px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-[0_0_15px_rgba(160,214,0,0.2)] active:scale-95 hover:scale-[1.02]"
                  >
                    Accept All
                  </button>
                </>
              )}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
