import { useState, useEffect } from 'react';
import { ArrowUp, Instagram, Play, Compass, Linkedin } from 'lucide-react';

export default function Footer() {
  const [tokyoTime, setTokyoTime] = useState('');
  const [milanTime, setMilanTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      } as const;

      setTokyoTime(new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Asia/Tokyo' }).format(new Date()));
      setMilanTime(new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Rome' }).format(new Date()));
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] pt-20 pb-10 px-6 md:px-12 border-t border-[#FFFFFF]/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DCE8F5]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#FFFFFF]/10">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="font-clash text-2xl font-semibold tracking-widest text-[#FFFFFF]">
              BLURRY VISUALS
            </h3>
            <p className="font-sans text-xs text-[#7A7A7A] max-w-xs leading-relaxed">
              Premium visual storytelling crafted for brands, artists, and immersive digital platforms. Operating globally out of Tokyo & Milan.
            </p>
          </div>

          {/* Navigation Col */}
          <div>
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
                    className="font-general text-xs tracking-[0.1em] text-[#C7C4BE] hover:text-[#FFFFFF] transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Clocks & Locations */}
          <div>
            <h4 className="font-general text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] mb-5">
              WORLDTIME
            </h4>
            <div className="space-y-4 font-general text-xs">
              <div className="flex justify-between items-center max-w-[200px]">
                <span className="text-[#C7C4BE] tracking-widest">TOKYO</span>
                <span className="tabular-nums font-mono text-[#DCE8F5]">{tokyoTime || '00:00:00'}</span>
              </div>
              <div className="flex justify-between items-center max-w-[200px]">
                <span className="text-[#C7C4BE] tracking-widest">MILAN</span>
                <span className="tabular-nums font-mono text-[#DCE8F5]">{milanTime || '00:00:00'}</span>
              </div>
            </div>
            <p className="mt-6 text-[10px] font-sans text-[#7A7A7A] leading-relaxed">
              All systems online. Syncing worldwide pipeline.
            </p>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h4 className="font-general text-[10px] tracking-[0.2em] uppercase text-[#7A7A7A] mb-1">
              DIRECT LINE
            </h4>
            <a
              href="mailto:studio@blurryvisuals.com"
              className="block font-clash text-lg md:text-xl text-[#FFFFFF] hover:text-[#C7C4BE] transition-colors break-words"
              data-cursor="hover"
            >
              studio@blurryvisuals.com
            </a>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFFFFF]/10 flex items-center justify-center text-[#7A7A7A] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-all"
                data-cursor="hover"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFFFFF]/10 flex items-center justify-center text-[#7A7A7A] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-all"
                data-cursor="hover"
              >
                <Play className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFFFFF]/10 flex items-center justify-center text-[#7A7A7A] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-all"
                data-cursor="hover"
              >
                <Compass className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#FFFFFF]/10 flex items-center justify-center text-[#7A7A7A] hover:text-[#FFFFFF] hover:border-[#FFFFFF] transition-all"
                data-cursor="hover"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 font-general text-[10px] tracking-widest text-[#7A7A7A] uppercase">
          <div>
            © {new Date().getFullYear()} BLURRY VISUALS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#FFFFFF] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#FFFFFF] transition-colors">Terms of Service</a>
          </div>
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-[#FFFFFF]/10 hover:border-[#FFFFFF] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll to Top"
            data-cursor="hover"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
