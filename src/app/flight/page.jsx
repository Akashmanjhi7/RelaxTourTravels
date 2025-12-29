"use client";

import { Plane } from "lucide-react";
import { openWhatsApp } from "@/utils/WhatsApp";

const FlightPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const text = `
Hello, I would like to enquire about a flight booking.

Passenger Details:
Name: ${formData.get("name")}
Age: ${formData.get("age")}
Adults: ${formData.get("adults")}
Children: ${formData.get("children")}

Travel Details:
From: ${formData.get("from")}
To: ${formData.get("to")}
Departure Date: ${formData.get("date")}
Class: ${formData.get("class")}

Please share the best available options and fares.
Thank you.
`.trim();

    openWhatsApp(text);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Plane className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Flight Booking
          </h1>
          <p className="text-gray-400">
            Domestic & International Flight Tickets
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white/5 p-8 md:p-10 rounded-xl border border-white/10 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 focus:ring-0 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Age
                </label>
                <input
                  name="age"
                  type="number"
                  min="1"
                  required
                  placeholder="Age"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 focus:ring-0 outline-none"
                />
              </div>
            </div>

            {/* Passenger Count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Adults
                </label>
                <input
                  name="adults"
                  type="number"
                  min="1"
                  required
                  placeholder="Adults"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 focus:ring-0 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Children
                </label>
                <input
                  name="children"
                  type="number"
                  min="0"
                  defaultValue="0"
                  placeholder="Children"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 focus:ring-0 outline-none"
                />
              </div>
            </div>

            {/* From + To */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  From
                </label>
                <input
                  name="from"
                  type="text"
                  required
                  placeholder="City / Airport"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 focus:ring-0 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  To
                </label>
                <input
                  name="to"
                  type="text"
                  required
                  placeholder="City / Airport"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 focus:ring-0 outline-none"
                />
              </div>
            </div>

            {/* Date + Class */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Departure Date
                </label>
                <input
                  name="date"
                  type="date"
                  required
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md font-semibold focus:border-yellow-500 focus:ring-0 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400">
                  Travel Class
                </label>
                <select
                  name="class"
                  required
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded-md focus:border-yellow-500 focus:ring-0 outline-none"
                >
                  <option value="">Select Class</option>
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-slate-900 font-bold py-4 rounded-md uppercase tracking-widest hover:bg-white transition-colors"
            >
              Search Flights
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FlightPage;
