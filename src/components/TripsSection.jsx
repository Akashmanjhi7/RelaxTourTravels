'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TripCard from '@/components/TripCard';
import { TRIP_DATA } from '@/data/trip';

// --- CAROUSEL WRAPPER COMPONENT ---
const CarouselSection = ({ title, data, onEnquiry }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      // Desktop pe 400px scroll karega, mobile pe 320px
      const scrollAmount = window.innerWidth < 768 ? 320 : 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Button ki styling: Absolute positioning se center kiya hai
  const btnStyle = "absolute top-1/2 -translate-y-1/2 z-20 bg-slate-800/90 hover:bg-yellow-500 text-white p-3 rounded-full transition-all shadow-2xl backdrop-blur-md border border-slate-700 hidden md:flex active:scale-90";

  return (
    <div className="mb-24 relative">
      {/* Category Title */}
      <h3 className="text-2xl font-serif text-white mb-8 border-l-4 border-yellow-500 pl-4">
        {title}
      </h3>

      <div className="relative group/carousel">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`${btnStyle} -left-6`}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`${btnStyle} -right-6`}
        >
          <ChevronRight size={24} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 py-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.map((trip) => (
            <div
              key={trip.id}
              // Fixed Width: w-[320px] ya md:w-[400px] se width nahi hilegi
              className="flex-shrink-0 w-[280px] md:w-[380px] snap-center"
            >
              <TripCard item={trip} onClick={onEnquiry} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN TRIPS SECTION ---
const TripsSection = ({ onEnquiry }) => {
  return (
    <section id="trips-section" className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-yellow-500 uppercase tracking-widest text-xs font-bold">
            Curated Packages
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
            Plan Your Journey
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6" />
        </div>

        {/* Alag alag categories ke liye carousel */}
        <CarouselSection 
          title="Spiritual Journeys" 
          data={TRIP_DATA.devotional} 
          onEnquiry={onEnquiry} 
        />
        
        <CarouselSection 
          title="Historic Monuments" 
          data={TRIP_DATA.historic} 
          onEnquiry={onEnquiry} 
        />
        
        <CarouselSection 
          title="State Wonders" 
          data={TRIP_DATA.statewise} 
          onEnquiry={onEnquiry} 
        />

      </div>
    </section>
  );
};

export default TripsSection;