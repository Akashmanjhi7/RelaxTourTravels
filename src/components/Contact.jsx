"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/utils/WhatsApp";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const text = `
Hello, I contacted you through your website.

Contact Details:
Name: ${formData.get("name")}
Email: ${formData.get("email")}

Message:
${formData.get("message")}

Please get back to me at your convenience.
Thank you.
    `.trim();

    openWhatsApp(text);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 relative bg-[#0a0f1c] border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-serif text-white mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-400 mb-8">
              Ready to start your adventure? Contact us for personalized travel
              planning or consultancy.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  desc: "Shop 42, Relax Tower, Main Market, New Delhi",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  desc: "+91 98765 43210",
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  desc: "bookings@relaxtour.com",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-full text-yellow-500">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="mt-10">
              <button
                onClick={() =>
                  openWhatsApp("Hello, I would like to get in touch.")
                }
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/5">
            <h3 className="text-xl font-serif text-white mb-6">
              Quick Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-slate-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-slate-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full bg-slate-900 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="w-full bg-slate-900 text-yellow-500 border-2 border-yellow-500 font-bold py-3  uppercase tracking-widest hover:bg-yellow-500 hover:text-slate-900 hover:border-slate-900 transition-colors transform duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
