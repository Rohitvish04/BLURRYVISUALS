import { useState, useEffect } from 'react';
import { ArrowUp, Instagram, Play, Compass, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [mumbaiTime, setMumbaiTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      } as const;

      setMumbaiTime(new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Kolkata' }).format(new Date()));
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] pt-20 pb-10 px-6 md:px-12 border-t border-[#FFFFFF]/10 relative overflow-hidden">
      
      {/* Drifting Golden Ambient Background Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#C6A972]/5 blur-[100px] rounded-full pointer-events-none" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#FFFFFF]/10">
          
          {/* Brand Col */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-clash text-2xl font-semibold tracking-widest text-[#FFFFFF]">
              BLURRY VISUALS
            </h3>
            <p className="font-sans text-xs text-[#7A7A7A] max-w-xs leading-relaxed">
              Premium Visual Storytelling For Modern Brands. Operating out of Mumbai, India.
            </p>
          </motion.div>

          {/* Navigation Col */}
          <motion.div variants={itemVariants}>
            <h4 className="font-general text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] mb-5">
              INDEX
            </h4>
            <ul className="space-y-3">
              {['Work', 'Services', 'Studio', 'Journal', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.toLowerCase());
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="relative group/link font-general text-xs tracking-[0.1em] text-[#C7C4BE] hover:text-[#FFFFFF] transition-colors py-0.5 cursor-pointer"
                  >
                    {link}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A972] transition-all duration-300 group-hover/link:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Studio Clocks & Locations */}
          <motion.div variants={itemVariants}>
            <h4 className="font-general text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] mb-5">
              STUDIO TIME
            </h4>
            <div className="space-y-4 font-general text-xs">
              <div className="flex justify-between items-center max-w-[200px]">
                <span className="text-[#C7C4BE] tracking-widest">MUMBAI (IST)</span>
                <span className="tabular-nums font-mono text-[#DCE8F5]">{mumbaiTime || '00:00:00'}</span>
              </div>
            </div>
            <p className="mt-6 text-[10px] font-sans text-[#7A7A7A] leading-relaxed flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All systems online. Syncing local pipeline.
            </p>
          </motion.div>

          {/* Contact Direct */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-general text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] mb-1">
              DIRECT LINE
            </h4>
            <a
              href="mailto:studio@blurryvisuals.com"
              className="relative inline-block font-clash text-lg md:text-xl text-[#FFFFFF] hover:text-[#C6A972] transition-colors break-words group/email py-1"
              data-cursor="hover"
            >
              studio@blurryvisuals.com
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A972] transition-all duration-500 group-hover/email:w-full" />
            </a>
            
            <div className="flex gap-4 pt-2">
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Play, href: 'https://vimeo.com', fill: true },
                { icon: Compass, href: 'https://behance.net' },
                { icon: Linkedin, href: 'https://linkedin.com' }
              ].map((soc, idx) => (
                <motion.a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full border border-[#FFFFFF]/10 flex items-center justify-center text-[#7A7A7A] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-colors"
                  data-cursor="hover"
                >
                  <motion.div whileHover={{ rotate: 10 }}>
                    <soc.icon className={`w-4 h-4 ${soc.fill ? 'fill-current' : ''}`} />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 font-general text-[10px] tracking-widest text-[#7A7A7A] uppercase"
        >
          <div>
            © {new Date().getFullYear()} BLURRY VISUALS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="relative group/botlink hover:text-[#FFFFFF] transition-colors">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A972] transition-all duration-300 group-hover/botlink:w-full" />
            </a>
            <a href="#terms" className="relative group/botlink hover:text-[#FFFFFF] transition-colors">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A972] transition-all duration-300 group-hover/botlink:w-full" />
            </a>
          </div>
          {/* Scroll to Top */}
          <motion.button
            whileHover={{ y: -3, borderColor: '#FFFFFF' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-10 h-10 border border-[#FFFFFF]/10 hover:border-[#FFFFFF] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll to Top"
            data-cursor="hover"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
