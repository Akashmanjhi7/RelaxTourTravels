"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TripCard from "@/components/TripCard";
import { TRIP_DATA } from "@/data/trip";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const DomesticSection = ({ onEnquiry }) => {
  return (
    <section className="py-20 bg-[#0a0f1c] overflow-hidden" id="domestic">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <span className="text-yellow-500 uppercase tracking-widest text-xs font-bold">
              Incredible India
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">
              Domestic Escapes
            </h2>
          </div>

          <button
            onClick={() => onEnquiry("Incredible India")}
            className="mt-6 md:mt-0 px-8 py-3 bg-yellow-500 text-slate-900 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Custom Inquiry
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="intl-prev absolute top-1/2 -translate-y-1/2 -left-6 z-20 bg-slate-800/80 hover:bg-yellow-500 text-white p-3 rounded-full transition-all shadow-lg border border-slate-700">
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button className="intl-next absolute top-1/2 -translate-y-1/2 -right-6 z-20 bg-slate-800/80 hover:bg-yellow-500 text-white p-3 rounded-full transition-all shadow-lg border border-slate-700">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={900} // smooth animation
            spaceBetween={24}
            slidesPerView={1.2}
            centeredSlides={false}
            breakpoints={{
              640: {
                slidesPerView: 1.3,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {TRIP_DATA.domestic.map((trip) => (
              <SwiperSlide key={trip.id}>
                <TripCard item={trip} onClick={onEnquiry} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DomesticSection;
