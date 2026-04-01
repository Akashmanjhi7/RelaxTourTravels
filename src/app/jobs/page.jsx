"use client";

import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  PlaneTakeoff, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  BadgeCheck,
  FileText,
  Utensils,
  Home
} from 'lucide-react';

import JobEnquiryModal from '../../components/JobEnquiryModel';
import { useEnquiry } from '@/hooks/useEnquiry';
import { openWhatsApp } from '@/utils/WhatsApp';

// 
const topDestinations = [
  { id: 'uae', name: 'United Arab Emirates', jobs: '1,200+', icon: Building2 },
  { id: 'ksa', name: 'Saudi Arabia', jobs: '850+', icon: MapPin },
  { id: 'qatar', name: 'Qatar', jobs: '430+', icon: Globe2 },
  { id: 'oman', name: 'Oman', jobs: '320+', icon: Building2 }, 
];

const benefits = [
  { id: 1, title: 'Visa Assistance', desc: 'End-to-end support for work visa processing and documentation.', icon: FileText },
  { id: 2, title: 'Verified Employers', desc: '100% background-checked companies with secure contracts.', icon: ShieldCheck },
  { id: 3, title: 'Relocation Support', desc: 'Help with flight tickets, initial accommodation, and onboarding.', icon: PlaneTakeoff },
];

const featuredJobs = [
  { 
    id: 1, 
    title: 'Construction Helper / Labor', 
    company: 'Al Naboodah Construction', 
    location: 'Dubai, UAE', 
    salary: 'Based on Experience',
    type: 'Full Time',
    tags: ['Free Accommodation', 'Transport Provided']
  },
  { 
    id: 2, 
    title: 'Heavy Vehicle Driver', 
    company: 'Saudi Binladin Group', 
    location: 'Jeddah, KSA', 
    salary: 'Discussed in Interview',
    type: 'Full Time',
    tags: ['Overtime Pay', 'Free Medical']
  },
  { 
    id: 3, 
    title: 'General Cleaner / Housekeeping', 
    company: 'Qatar Facility Services', 
    location: 'Doha, Qatar', 
    salary: 'Depends on Skills',
    type: 'Contract',
    tags: ['Free Food', 'Room Provided']
  },
];

export default function InternationalJobs() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const openModal = (jobTitle) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob("");
  };

  const scrollToJobs = () => {
    const jobsSection = document.getElementById('featured-jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ✅ Upload CV → WhatsApp
  const handleUploadCV = () => {
    const message = `
Hello, I want to apply for international jobs.

मैं विदेश में नौकरी के लिए आवेदन करना चाहता हूँ।

Please guide me for CV submission and next steps.
    `.trim();

    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-slate-900/90 text-slate-300 selection:bg-yellow-500 selection:text-slate-900">
      
      {/* HERO */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center px-4 border-b border-slate-800">

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-yellow-500 text-sm mb-8">
            <Globe2 size={16} />
            <span>Global Career Opportunities</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Take Your Hard Work <br />
            <span className="text-yellow-500">Beyond Borders</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mb-10">
            Explore thousands of verified international jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            
            <button 
              onClick={scrollToJobs}
              className="px-8 py-4 bg-yellow-500 text-slate-900 font-semibold rounded-md flex items-center justify-center gap-2"
            >
              Browse Global Jobs
              <ArrowRight size={18} />
            </button>

            <button 
              onClick={handleUploadCV}
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-md border border-slate-700"
            >
              Upload CV / Resume
            </button>

          </div>
        </div>
      </section>

          {/* --- TRUST & BENEFITS SECTION --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Why Move With Us?</h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">We handle the complexity of international relocation so you can focus on your new career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.id} className="p-6 sm:p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-yellow-500/30 transition-colors group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* JOBS */}
      <section id="featured-jobs" className="py-20 max-w-7xl mx-auto px-4">

        <div className="space-y-6">
          {featuredJobs.map((job) => (
            <div key={job.id} className="p-6 rounded-xl bg-slate-800 border border-slate-700 flex flex-col md:flex-row justify-between">

              <div>
                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <p className="text-sm text-slate-400">{job.company} • {job.location}</p>

                <div className="flex gap-2 mt-3 flex-wrap">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-yellow-500 border px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex flex-col gap-2">
                <div className="text-white font-semibold">{job.salary}</div>

                <button
                  onClick={() => openModal(job.title)}
                  className="px-6 py-2 bg-yellow-500 text-black rounded"
                >
                  Apply Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ✅ MODAL */}
      <JobEnquiryModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        jobTitle={selectedJob}
      />

    </div>
  );
}