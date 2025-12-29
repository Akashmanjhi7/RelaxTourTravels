"use client";

import { Train } from "lucide-react";
import { openWhatsApp } from "@/utils/WhatsApp";

const RailwayPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const text = `
Hello, I would like to book a train ticket.

Passenger Details:
Name: ${formData.get("name")}
Age: ${formData.get("age")}
Number of Passengers: ${formData.get("passengers")}

Journey Details:
From: ${formData.get("from")}
To: ${formData.get("to")}
Travel Date: ${formData.get("date")}
Class: ${formData.get("class")}

Please check availability and guide me on the next steps.
Thank you.
`.trim();

    openWhatsApp(text);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-900 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Train className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Railway Booking
          </h1>
          <p className="text-gray-400">
            Fast & Secure Train Ticket Reservations
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto bg-white/5 p-8 md:p-10 rounded-xl border border-white/10 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-400 tracking-widest">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded focus:border-yellow-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-400 tracking-widest">
                  Age
                </label>
                <input
                  name="age"
                  type="number"
                  min="1"
                  required
                  placeholder="Age"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded focus:border-yellow-500 outline-none"
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="space-y-2">
              <label className="text-xs uppercase text-gray-400 tracking-widest">
                Number of Passengers
              </label>
              <input
                name="passengers"
                type="number"
                min="1"
                required
                placeholder="e.g. 2"
                className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded focus:border-yellow-500 outline-none"
              />
            </div>

            {/* From + To */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-400 tracking-widest">
                  From Station
                </label>
                <input
                  name="from"
                  type="text"
                  required
                  placeholder="e.g. New Delhi"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded focus:border-yellow-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-400 tracking-widest">
                  To Station
                </label>
                <input
                  name="to"
                  type="text"
                  required
                  placeholder="e.g. Mumbai Central"
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded focus:border-yellow-500 outline-none"
                />
              </div>
            </div>

            {/* Date + Class */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-400 tracking-widest">
                  Travel Date
                </label>
                <input
                  name="date"
                  type="date"
                  required
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded font-semibold focus:border-yellow-500 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase text-gray-400 tracking-widest">
                  Class
                </label>
                <select
                  name="class"
                  required
                  className="w-full bg-slate-800 border border-white/10 text-white px-4 py-3 rounded focus:border-yellow-500 outline-none"
                >
                  <option value="">Select Class</option>
                  <option>Sleeper (SL)</option>
                  <option>AC 3 Tier (3A)</option>
                  <option>AC 2 Tier (2A)</option>
                  <option>First Class (FC)</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-slate-900 font-bold py-4 rounded uppercase tracking-widest hover:bg-white transition-colors"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RailwayPage;
