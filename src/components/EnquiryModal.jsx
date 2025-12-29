"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

// ✅ FIX: Utility function ko yahin define kar diya taaki import error na aaye
const openWhatsApp = (text) => {
  // Replace this number with your actual business number
  const phoneNumber = "919876543210";
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};

const EnquiryModal = ({ isOpen, onClose, destination }) => {
  // ✅ FIX: Hook ko sabse upar le aaye (Top Level)
  // Ab chahe modal khule ya band ho, ye logic hamesha execute hoga
  useEffect(() => {
    if (isOpen) {
      // Jab modal khule, scroll roko
      document.body.style.overflow = "hidden";
    } else {
      // Jab modal band ho (isOpen = false), scroll wapis lao
      document.body.style.overflow = "";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    // Cleanup function (Jab component unmount ho)
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = ""; // 'unset' ki jagah empty string safe hai
    };
  }, [onClose, isOpen]);

  // 🛑 Ab yahan check lagao. Agar band hai toh null return karo.
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const text = `
Hello, I am interested in planning a trip.

Destination: ${destination}

Traveler Details:
• Name: ${formData.get("name")}
• Age: ${formData.get("age")}
• Number of People: ${formData.get("people")}
• Preferred Travel Date: ${formData.get("date")}

Please share the best available package details, pricing, and inclusions.
Thank you.
`.trim();

    openWhatsApp(text);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-slate-900 border border-white/10 shadow-2xl rounded-xl p-8 my-8 animate-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h3 className="text-2xl font-serif text-white mb-1">Plan Your Trip</h3>
        <p className="text-yellow-500 text-sm mb-6">
          Destination: <span className="font-semibold">{destination}</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-gray-400">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 outline-none transition-colors"
            />
          </div>

          {/* Age + People */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-400">
                Age
              </label>
              <input
                name="age"
                type="number"
                min="1"
                required
                placeholder="Age"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest text-gray-400">
                People
              </label>
              <input
                name="people"
                type="number"
                min="1"
                required
                placeholder="No. of people"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Date */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-gray-400">
              Travel Date
            </label>
            <input
              name="date"
              type="date"
              required
              className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 outline-none transition-colors"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 bg-yellow-500 text-slate-900 font-bold py-3 rounded-md uppercase tracking-widest hover:bg-white transition-colors"
          >
            Get Quote on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
