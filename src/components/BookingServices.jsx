'use client';

import { Train, Plane } from 'lucide-react';
import Link from 'next/link';

const BookingServices = ({ setView }) => {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl -mr-20 -mt-20" />

      <div className="container mx-auto px-6 text-center relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-yellow-500 uppercase tracking-widest text-xs font-bold">
            Fast & Secure
          </span>

          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
            Ticket Booking Services
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6" />
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Train Booking */}
          <Link
          href='/railway'
            
            className="group p-10 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden hover:border-yellow-500/30"
          >
            <div className="absolute inset-0 bg-yellow-500/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-slate-900 rounded-full flex items-center justify-center border border-white/10 mb-6 group-hover:border-yellow-500/50 transition-colors">
                <Train className="w-10 h-10 text-yellow-500" />
              </div>

              <h3 className="text-3xl font-serif text-white mb-3">
                Railway Booking
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                IRCTC authorized train ticket booking with instant confirmation.
                Book sleeper, AC, and chair car tickets easily.
              </p>

              <span className="inline-block px-8 py-3 border border-yellow-500 text-yellow-500 font-bold uppercase tracking-widest text-xs hover:bg-yellow-500 hover:text-slate-900 transition-all">
                Book Train
              </span>
            </div>
          </Link>

          {/* Flight Booking */}
          <Link
            href='/flight'
            className="group p-10 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden hover:border-yellow-500/30"
          >
            <div className="absolute inset-0 bg-yellow-500/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto bg-slate-900 rounded-full flex items-center justify-center border border-white/10 mb-6 group-hover:border-yellow-500/50 transition-colors">
                <Plane className="w-10 h-10 text-yellow-500" />
              </div>

              <h3 className="text-3xl font-serif text-white mb-3">
                Flight Booking
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Domestic and International flights at best competitive prices.
                One-way and round-trip options available.
              </p>

              <span className="inline-block px-8 py-3 border border-yellow-500 text-yellow-500 font-bold uppercase tracking-widest text-xs hover:bg-yellow-500 hover:text-slate-900 transition-all">
                Book Flight
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default BookingServices;
