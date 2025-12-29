"use client";

import { Briefcase, Heart, Users, FileCheck } from "lucide-react";
import { openWhatsApp } from "@/utils/WhatsApp";

const ConsultancyPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Expert Travel Consultancy
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Not sure where to go? Let our travel experts design the perfect
            itinerary for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {[
            {
              icon: Briefcase,
              title: "Corporate Travel",
              desc: "Efficient and comfortable travel planning for business.",
            },
            {
              icon: Heart,
              title: "Honeymoon Packages",
              desc: "Romantic getaways tailored for couples.",
            },
            {
              icon: Users,
              title: "Group Tours",
              desc: "School trips, college excursions, and family vacations.",
            },
            {
              icon: FileCheck,
              title: "Visa Assistance",
              desc: "Complete guidance on visa documentation.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 transition-colors"
            >
              <item.icon className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-serif text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto bg-yellow-500 text-slate-900 p-10 rounded-xl text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Need Free Advice?
          </h3>
          <p className="mb-8 font-medium">
            Talk to our senior consultant today.
          </p>
          <button
            onClick={() => openWhatsApp("I need consultancy advice")}
            className="px-8 py-3 bg-slate-900 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-colors"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyPage;
