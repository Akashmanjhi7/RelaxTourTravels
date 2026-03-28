"use client";

import React from 'react';
import { 
  Globe2, 
  MapPin, 
  PlaneTakeoff, 
  ShieldCheck, 
  Briefcase, 
  Building2, 
  ArrowRight,
  BadgeCheck,
  FileText,
  Utensils,
  Home
} from 'lucide-react';

// --- Mock Data ---
const topDestinations = [
  { id: 'uae', name: 'United Arab Emirates', jobs: '1,200+', icon: Building2 },
  { id: 'ksa', name: 'Saudi Arabia', jobs: '850+', icon: MapPin },
  { id: 'qatar', name: 'Qatar', jobs: '430+', icon: Globe2 },
  // Changed Canada to Oman for realistic Group D targeting
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
    salary: 'Based on Experience', // Changed from fixed number
    type: 'Full Time',
    tags: ['Free Accommodation', 'Transport Provided']
  },
  { 
    id: 2, 
    title: 'Heavy Vehicle Driver', 
    company: 'Saudi Binladin Group', 
    location: 'Jeddah, KSA', 
    salary: 'Discussed in Interview', // Changed from fixed number
    type: 'Full Time',
    tags: ['Overtime Pay', 'Free Medical']
  },
  { 
    id: 3, 
    title: 'General Cleaner / Housekeeping', 
    company: 'Qatar Facility Services', 
    location: 'Doha, Qatar', 
    salary: 'Depends on Skills', // Changed from fixed number
    type: 'Contract',
    tags: ['Free Food', 'Room Provided']
  },
];

export default function InternationalJobs() {
  
  // Function to handle smooth scrolling to jobs section
  const scrollToJobs = () => {
    const jobsSection = document.getElementById('featured-jobs');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900/90  text-slate-300 selection:bg-yellow-500 selection:text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] sm:h-[500px] bg-yellow-500/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800 border border-slate-700 text-yellow-500 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Globe2 size={16} />
            <span>Global Career Opportunities</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 sm:mb-6 leading-tight">
            Take Your Hard Work <br className="hidden md:block" />
            <span className="text-yellow-500">Beyond Borders</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-8 sm:mb-10 font-light leading-relaxed">
            Explore thousands of verified international jobs for skilled and semi-skilled workers. We connect you with top employers globally, ensuring safe contracts, free accommodation, and a secure relocation process.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
            {/* Added onClick event to trigger scroll function */}
            <button 
              onClick={scrollToJobs}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-yellow-500 text-slate-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 group"
            >
              Browse Global Jobs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-800 text-white font-semibold rounded-md border border-slate-700 hover:bg-slate-700 transition-colors">
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

      {/* --- TOP DESTINATIONS SECTION --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Top Destinations</h2>
            <p className="text-sm sm:text-base text-slate-400">Discover opportunities in the world's fastest-growing economies.</p>
          </div>
          {/* <button className="text-yellow-500 hover:text-yellow-400 text-sm sm:text-base font-medium flex items-center gap-1 group">
            View All Countries <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {topDestinations.map((dest) => {
            const Icon = dest.icon;
            return (
              <div key={dest.id} className="group cursor-pointer rounded-xl sm:rounded-2xl bg-slate-800 p-4 sm:p-6 border border-slate-700 hover:border-yellow-500/50 hover:bg-slate-800/80 transition-all duration-300 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-900 flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-shadow">
                  <Icon className="text-yellow-500 w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 group-hover:text-yellow-500 transition-colors">{dest.name}</h3>
                <span className="text-xs sm:text-sm text-slate-400">{dest.jobs} Openings</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- FEATURED INTERNATIONAL JOBS --- */}
      {/* Added id="featured-jobs" for smooth scrolling target */}
      <section id="featured-jobs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Hot Opportunities</h2>
          <p className="text-sm sm:text-base text-slate-400">Premium roles matching your expertise across the globe.</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {featuredJobs.map((job) => (
            <div key={job.id} className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-800 border border-slate-700 hover:border-yellow-500/40 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6">
              
              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-500 transition-colors leading-tight">{job.title}</h3>
                  <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-slate-900 text-[10px] sm:text-xs font-medium text-slate-300 border border-slate-700 whitespace-nowrap">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Building2 size={14} className="text-slate-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {job.company}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-slate-500 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {job.location}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, idx) => {
                    let TagIcon = BadgeCheck;
                    if (tag.toLowerCase().includes('food')) TagIcon = Utensils;
                    if (tag.toLowerCase().includes('accommodation') || tag.toLowerCase().includes('room')) TagIcon = Home;

                    return (
                      <span key={idx} className="flex items-center gap-1.5 text-[10px] sm:text-xs text-yellow-500/80 bg-yellow-500/10 px-2 sm:px-2.5 py-1 rounded border border-yellow-500/20">
                        <TagIcon className="w-3 h-3" /> {tag}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end w-full md:w-auto gap-3 md:gap-2 mt-2 md:mt-0 pt-4 md:pt-0 border-t border-slate-700 md:border-t-0">
                <div className="text-xs sm:text-sm md:text-base font-semibold text-white bg-slate-900 px-3 sm:px-4 py-2 rounded-lg border border-slate-700 w-full md:w-auto text-center md:text-right">
                  {job.salary}
                </div>
                <button className="w-full md:w-auto px-6 py-3 sm:py-2.5 bg-yellow-500 text-slate-900 font-semibold rounded hover:bg-yellow-400 transition-colors text-sm sm:text-base">
                  Apply Now
                </button>
              </div>

            </div>
          ))}
        </div>
        
        <div className="mt-10 sm:mt-12 text-center">
          {/* <button className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 text-sm sm:text-base font-medium pb-1 border-b border-yellow-500/30 hover:border-yellow-500 transition-all">
            Load More Jobs <ArrowRight size={16} />
          </button> */}
        </div>
      </section>

    </div>
  );
}