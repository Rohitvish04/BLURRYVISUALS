import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full bg-[#FFFFFF] py-28 px-6 md:px-12 border-t border-[#D9D9D9]/50 overflow-hidden">
      {/* Background glow spot */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#ECEAE6]/45 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Locations */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <p className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase">
                START A DIALOGUE
              </p>
              <h2 className="font-clash text-4xl md:text-6xl font-semibold tracking-tighter text-[#111111] leading-none uppercase">
                LET'S BUILD<br />
                SOMETHING EPIC.
              </h2>
              <p className="font-sans text-sm text-[#4B4B4B] max-w-sm leading-relaxed font-light pt-2">
                Have a campaign, film project, or story that needs high-fidelity visual execution? Drop us a line.
              </p>
            </div>

            {/* Locations Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#D9D9D9]/50">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#111111]">
                  <MapPin className="w-4 h-4 stroke-[1.5] text-[#7A7A7A]" />
                  <span className="font-clash text-base font-medium">UNIT TOKYO</span>
                </div>
                <p className="font-sans text-xs text-[#4B4B4B] leading-relaxed font-light">
                  Shinjuku 3-Chome, Tokyo, JP<br />
                  <span className="font-mono text-[10px] text-[#7A7A7A]">35.6938° N, 139.7034° E</span>
                </p>
                <a href="tel:+81300000000" className="block font-general text-[9px] tracking-wider text-[#7A7A7A] hover:text-[#111111] transition-colors uppercase">
                  +81 3 0000 0000
                </a>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#111111]">
                  <MapPin className="w-4 h-4 stroke-[1.5] text-[#7A7A7A]" />
                  <span className="font-clash text-base font-medium">UNIT MILAN</span>
                </div>
                <p className="font-sans text-xs text-[#4B4B4B] leading-relaxed font-light">
                  Via Brera, Milan, IT<br />
                  <span className="font-mono text-[10px] text-[#7A7A7A]">45.4719° N, 9.1897° E</span>
                </p>
                <a href="tel:+3902000000" className="block font-general text-[9px] tracking-wider text-[#7A7A7A] hover:text-[#111111] transition-colors uppercase">
                  +39 02 0000 0000
                </a>
              </div>
            </div>

            {/* Direct Line */}
            <div className="pt-6 border-t border-[#D9D9D9]/50 space-y-2">
              <p className="font-general text-[8px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase">
                GENERAL ENQUIRIES
              </p>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#7A7A7A]" />
                <a
                  href="mailto:studio@blurryvisuals.com"
                  className="font-clash text-lg text-[#111111] hover:text-[#7A7A7A] transition-colors"
                  data-cursor="hover"
                >
                  studio@blurryvisuals.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Minimalist Form */}
          <div className="lg:col-span-7 bg-[#F5F5F3] p-8 md:p-12 border border-[#D9D9D9]/50 relative">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#F5F5F3] z-10 flex flex-col items-center justify-center text-center p-8"
              >
                <h3 className="font-clash text-2xl font-medium text-[#111111] mb-2">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-sans text-xs text-[#4B4B4B] max-w-xs leading-relaxed font-light">
                  Thank you for reaching out. A production supervisor from our nearest unit will connect with you within 24 hours.
                </p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form Input fields with single bottom border */}
              <div className="space-y-1">
                <label className="font-general text-[9px] tracking-[0.2em] uppercase text-[#7A7A7A] block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-3 text-sm font-sans font-light text-[#111111] focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#C7C4BE]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-general text-[9px] tracking-[0.2em] uppercase text-[#7A7A7A] block">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-3 text-sm font-sans font-light text-[#111111] focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#C7C4BE]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-general text-[9px] tracking-[0.2em] uppercase text-[#7A7A7A] block">
                  Requested Service
                </label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-3 text-sm font-sans font-light text-[#111111] focus:outline-none focus:border-[#111111] transition-colors cursor-pointer"
                >
                  <option value="" disabled className="text-[#C7C4BE]">Select a service...</option>
                  <option value="Commercial Film" className="bg-[#FFFFFF] text-[#111111]">Commercial Film</option>
                  <option value="Fashion Campaign" className="bg-[#FFFFFF] text-[#111111]">Fashion Campaign</option>
                  <option value="VFX & Post-production" className="bg-[#FFFFFF] text-[#111111]">VFX & Post-production</option>
                  <option value="Creative Direction" className="bg-[#FFFFFF] text-[#111111]">Creative Direction</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-general text-[9px] tracking-[0.2em] uppercase text-[#7A7A7A] block">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Brief description of your project timeline, concept, and scope..."
                  className="w-full bg-transparent border-b border-[#D9D9D9] py-3 text-sm font-sans font-light text-[#111111] focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#C7C4BE] resize-none"
                />
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                className="w-full bg-[#111111] text-[#FFFFFF] font-general text-[10px] tracking-[0.2em] font-medium uppercase py-4 px-8 rounded-none hover:bg-[#4B4B4B] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                data-cursor="hover"
              >
                Send Message
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
