'use client';

import { ArrowDown, Mouse } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/90 z-10" />

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1350&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-in fade-in zoom-in duration-1000">
        <h2 className="text-yellow-500 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold">
          Premium Travel Experience
        </h2>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
          Discover the <br />
          <span className="italic text-yellow-500">Unseen</span> World
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          Curated journeys to devotional sanctuaries, historic monuments, and exotic international destinations.
        </p>

        <button
          onClick={() =>
            document
              .getElementById('trips-section')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          className="group relative px-8 py-3 bg-transparent border border-white text-white overflow-hidden hover:border-yellow-500 transition-colors duration-300"
        >
          <span className="absolute inset-0 w-full h-full bg-yellow-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>

          <span className="relative uppercase tracking-widest text-sm font-bold flex items-center gap-2">
            Start Exploring <ArrowDown className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-10">
        <Mouse className="text-white/50 w-6 h-6" />
      </div>
    </header>
  );
};

export default Hero;
