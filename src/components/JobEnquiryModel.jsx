"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { openWhatsApp } from "@/utils/WhatsApp";

const JobEnquiryModal = ({ isOpen, onClose, jobTitle }) => {

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");

    let text = "";

    if (language === "en") {
      text = `
Hello, I am interested in this job.

Job Role: ${jobTitle}

Candidate Details:
• Name: ${name}
• Phone: ${phone}

Please share full details.
      `;
    } else {
      text = `
नमस्ते, मुझे इस नौकरी में रुचि है।

नौकरी: ${jobTitle}

उम्मीदवार की जानकारी:
• नाम: ${name}
• फोन: ${phone}

कृपया पूरी जानकारी साझा करें।
      `;
    }

    openWhatsApp(text.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-slate-900 border border-white/10 shadow-2xl rounded-xl p-8">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-yellow-500"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl text-white mb-1">Apply for Job</h3>
        <p className="text-yellow-500 text-sm mb-4">
          Job: <span className="font-semibold">{jobTitle}</span>
        </p>

        {/* 🌐 Language Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded ${language === "en" ? "bg-yellow-500 text-black" : "bg-white/10 text-white"}`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("hi")}
            className={`px-3 py-1 rounded ${language === "hi" ? "bg-yellow-500 text-black" : "bg-white/10 text-white"}`}
          >
            हिंदी
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            type="text"
            required
            placeholder={language === "en" ? "Full Name" : "पूरा नाम"}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-md"
          />

          <input
            name="phone"
            type="tel"
            required
            placeholder={language === "en" ? "WhatsApp Number" : "व्हाट्सएप नंबर"}
            className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-slate-900 font-bold py-3 rounded-md"
          >
            {language === "en" ? "Apply on WhatsApp" : "व्हाट्सएप पर आवेदन करें"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default JobEnquiryModal;