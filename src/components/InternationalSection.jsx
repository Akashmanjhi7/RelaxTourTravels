'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TripCard from '@/components/TripCard';
import { TRIP_DATA } from '@/data/trip';

const InternationalSection = ({ onEnquiry }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 420;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Button styling - Wahi centered logic
  const btnStyle = "absolute top-1/2 -translate-y-1/2 z-30 bg-slate-800/90 hover:bg-yellow-500 text-white p-3 rounded-full transition-all shadow-2xl backdrop-blur-md border border-slate-700 hidden md:flex active:scale-90";

  return (
    <section className="py-20 bg-[#0a0f1c] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header - Isko flex hi rakha hai taaki button side mein rahe */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <span className="text-yellow-500 uppercase tracking-widest text-xs font-bold">
              Go Global
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">
              International Escapes
            </h2>
          </div>

          <button
            onClick={() => onEnquiry('International General')}
            className="mt-6 md:mt-0 px-8 py-3 bg-yellow-500 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Custom Inquiry
          </button>
        </div>

        {/* Carousel Area */}
        <div className="relative group/intl">
          
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

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 py-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TRIP_DATA.international.map((trip) => (
              <div 
                key={trip.id} 
                className="flex-shrink-0 w-[300px] md:w-[400px] snap-center"
              >
                <TripCard
                  item={trip}
                  onClick={onEnquiry}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternationalSection;