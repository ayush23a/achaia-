import { useState, useEffect, useRef } from "react";

// Speech bubble SVG component with reaction faces
const ReactionEmoji = ({ type, isSelected, onClick }) => {
  // Common speech bubble path
  const bubblePath = "M20 10h60c5.5 0 10 4.5 10 10v40c0 5.5-4.5 10-10 10H45L25 85V70H20c-5.5 0-10-4.5-10-10V20c0-5.5 4.5-10 10-10z";

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 ${
        isSelected
          ? "scale-110 filter drop-shadow-[0_0_8px_rgba(255,199,0,0.6)]"
          : "opacity-80 hover:opacity-100"
      }`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-12 h-12 select-none"
        fill="#FFC700"
      >
        <path d={bubblePath} />
        {type === "angry" && (
          <>
            {/* Angry Eyebrows */}
            <path
              d="M 30 32 L 44 38"
              stroke="#000000"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M 70 32 L 56 38"
              stroke="#000000"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Angry Eyes */}
            <circle cx="37" cy="45" r="4.5" fill="#000000" />
            <circle cx="63" cy="45" r="4.5" fill="#000000" />
            {/* Angry Frown */}
            <path
              d="M 38 58 Q 50 48 62 58"
              stroke="#000000"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
        {type === "sad" && (
          <>
            {/* Neutral Eyes */}
            <circle cx="37" cy="42" r="4.5" fill="#000000" />
            <circle cx="63" cy="42" r="4.5" fill="#000000" />
            {/* Sad Mouth */}
            <path
              d="M 38 58 Q 50 46 62 58"
              stroke="#000000"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
        {type === "neutral" && (
          <>
            {/* Neutral Eyes */}
            <circle cx="37" cy="42" r="4.5" fill="#000000" />
            <circle cx="63" cy="42" r="4.5" fill="#000000" />
            {/* Flat Mouth */}
            <path
              d="M 38 54 H 62"
              stroke="#000000"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "happy" && (
          <>
            {/* Happy Eyes */}
            <circle cx="37" cy="42" r="4.5" fill="#000000" />
            <circle cx="63" cy="42" r="4.5" fill="#000000" />
            {/* Smile */}
            <path
              d="M 38 50 Q 50 62 62 50"
              stroke="#000000"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
        {type === "excited" && (
          <>
            {/* Heart Eyes */}
            <path
              d="M 37 46 C 33 42, 29 42, 29 36 C 29 32, 33 28, 37 32 C 41 28, 45 32, 45 36 C 45 42, 41 42, 37 46 Z"
              fill="#000000"
            />
            <path
              d="M 63 46 C 59 42, 55 42, 55 36 C 55 32, 59 28, 63 32 C 67 28, 71 32, 71 36 C 71 42, 67 42, 63 46 Z"
              fill="#000000"
            />
            {/* Wide Smile */}
            <path
              d="M 36 50 Q 50 64 64 50"
              stroke="#000000"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}
      </svg>
    </div>
  );
};

const FeedbackTool = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [step, setStep] = useState("rate"); // 'rate' | 'comment' | 'success'

  const containerRef = useRef(null);

  // Toggle feedback panel open/close
  const toggleOpen = () => {
    setIsOpen(!isOpen);
    // Reset state when closed
    if (isOpen) {
      setTimeout(() => {
        setRating(null);
        setComment("");
        setStep("rate");
      }, 300);
    }
  };

  // Close panel on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        // Reset state when closed
        setTimeout(() => {
          setRating(null);
          setComment("");
          setStep("rate");
        }, 300);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleNext = () => {
    if (rating !== null) {
      setStep("comment");
    }
  };

  const handleSkip = () => {
    // Log skipped feedback
    const feedbackData = {
      rating: rating !== null ? rating + 1 : null,
      comment: "",
      submittedAt: new Date().toISOString(),
      status: "skipped"
    };
    console.log("Feedback skipped:", feedbackData);
    
    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("achaia-feedback") || "[]");
      localStorage.setItem("achaia-feedback", JSON.stringify([...existing, feedbackData]));
    } catch (err) {
      console.error("Failed to save feedback to localStorage:", err);
    }

    setStep("success");
    // Auto collapse after delay
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => {
        setRating(null);
        setComment("");
        setStep("rate");
      }, 300);
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const feedbackData = {
      rating: rating !== null ? rating + 1 : null,
      comment: comment,
      submittedAt: new Date().toISOString(),
      status: "submitted"
    };

    console.log("Feedback submitted:", feedbackData);

    // 1. Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("achaia-feedback") || "[]");
      localStorage.setItem("achaia-feedback", JSON.stringify([...existing, feedbackData]));
    } catch (err) {
      console.error("Failed to save feedback to localStorage:", err);
    }

    // 2. Optional: Send to a server or webhook (like SendMyForm)
    // To send to SendMyForm or any backend, uncomment the code below:
    /*
    try {
      await fetch("https://www.sendmyform.live/api/f/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
    } catch (err) {
      console.error("Failed to transmit feedback:", err);
    }
    */

    setStep("success");
    // Auto collapse after delay
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => {
        setRating(null);
        setComment("");
        setStep("rate");
      }, 300);
    }, 2500);
  };

  const emojiTypes = ["angry", "sad", "neutral", "happy", "excited"];

  return (
    <div
      ref={containerRef}
      className="fixed top-1/2 right-0 -translate-y-1/2 z-50 flex items-center transition-all duration-500 ease-out"
      style={{
        transform: isOpen ? "translateX(0)" : "translateX(360px)",
      }}
    >
      {/* Feedback Tab Button */}
      <button
        onClick={toggleOpen}
        className="bg-tertiary text-white flex flex-col items-center gap-3 py-6 px-3 rounded-l-2xl shadow-[-4px_0_15px_rgba(0,0,0,0.15)] hover:bg-[#722fee] transition-colors duration-300 select-none cursor-pointer focus:outline-none"
      >
        <span
          className="uppercase tracking-widest text-[11px] font-bold"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Feedback
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Feedback Panel */}
      <div className="w-[360px] bg-white text-black p-7 rounded-l-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.15)] border-l border-y border-gray-100 flex flex-col justify-between min-h-[220px]">
        {step === "rate" && (
          <div>
            <h3 className="text-gray-900 font-semibold text-[15px] mb-5 tracking-tight">
              How would you rate your experience?
            </h3>
            
            {/* Emojis grid */}
            <div className="flex justify-between items-center px-1 mb-2">
              {emojiTypes.map((type, idx) => (
                <ReactionEmoji
                  key={type}
                  type={type}
                  isSelected={rating === idx}
                  onClick={() => setRating(idx)}
                />
              ))}
            </div>

            {/* Helper text */}
            <div className="flex justify-between text-gray-400 text-[11px] font-medium mb-6">
              <span>Not good at all</span>
              <span>Very good</span>
            </div>

            {/* Footer controls */}
            <div className="flex justify-end items-center gap-5">
              <button
                onClick={handleSkip}
                className="text-gray-800 font-semibold text-xs hover:text-black underline underline-offset-4 decoration-1 transition-colors"
              >
                Skip
              </button>
              <button
                disabled={rating === null}
                onClick={handleNext}
                className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${
                  rating !== null
                    ? "bg-tertiary text-white shadow-md hover:bg-[#722fee] active:scale-95"
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === "comment" && (
          <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between">
            <div>
              <h3 className="text-gray-900 font-semibold text-[15px] mb-3 tracking-tight">
                Any additional comments?
              </h3>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="What can we do to improve?"
                rows={4}
                className="w-full p-3 text-xs border border-gray-200 rounded-xl focus:border-tertiary focus:ring-1 focus:ring-tertiary outline-none resize-none text-gray-800 placeholder-gray-400 transition-colors"
                autoFocus
              />
            </div>
            
            <div className="flex justify-end items-center gap-5 mt-4">
              <button
                type="button"
                onClick={handleSkip}
                className="text-gray-800 font-semibold text-xs hover:text-black underline underline-offset-4 decoration-1 transition-colors"
              >
                Skip
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg text-xs font-semibold tracking-wide bg-tertiary text-white shadow-md hover:bg-[#722fee] active:scale-95 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center justify-center py-6 text-center animate-fade-in">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="text-gray-900 font-semibold text-sm mb-1">
              Thank you!
            </h4>
            <p className="text-gray-400 text-xs">
              We appreciate your valuable feedback.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackTool;
