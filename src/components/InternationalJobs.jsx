"use client";

import { useState } from "react";
import { MonitorPlay, Settings, Wrench } from "lucide-react";
import jobCategories from "@/data/internationalJobs";
import JobEnquiryModal from "./JobEnquiryModel";

export default function InternationalJobs() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  return (
    <section className="w-full bg-slate-900 py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-yellow-500">50+</span> Job Categories
          </h2>
          <p className="text-slate-300 text-lg md:text-xl">
            With over 50+ job categories, find the right job with better salary in UAE and other gulf countries.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-12">
          
          {jobCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div 
                key={category.id} 
                onClick={() => {
                  setSelectedJob(category.title); // 👈 job set
                  setIsOpen(true); // 👈 modal open
                }}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* Icon Container */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-slate-800 border border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_40px_rgba(234,179,8,0.15)]">
                  <Icon size={40} strokeWidth={1.5} className={category.color} />
                </div>
                
                {/* Title */}
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-yellow-500 transition-colors">
                  {category.title}
                </h3>

                {/* Jobs Count */}
                <p className="text-slate-400 text-sm font-light">
                  {category.jobs} Jobs Available
                </p>
              </div>
            );
          })}

        </div>

      </div>

      {/* 🔥 Modal (UI ko touch nahi karta) */}
      <JobEnquiryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        jobTitle={selectedJob}
      />
    </section>
  );
}