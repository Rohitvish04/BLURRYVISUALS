import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', href: 'hero' },
  { name: 'Work', href: 'work' },
  { name: 'Services', href: 'services' },
  { name: 'Studio', href: 'about' },
  { name: 'Journal', href: 'journal' },
  { name: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-6 md:px-12 lg:px-20 ${
          isScrolled
            ? 'bg-[#F8F8F6]/85 backdrop-blur-md border-b border-[#111111]/5 py-4 lg:py-5 shadow-[0_1px_10px_rgba(17,17,17,0.01)]'
            : 'bg-transparent border-b border-[#111111]/5 py-6 lg:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick('hero')}
            className="font-clash text-sm md:text-base font-semibold tracking-[0.25em] text-[#111111] hover:opacity-70 transition-opacity uppercase"
            data-cursor="hover"
          >
            BLURRY VISUALS
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="font-general text-[10px] tracking-[0.2em] uppercase text-[#666666] hover:text-[#111111] transition-colors relative group py-2"
                data-cursor="hover"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#111111] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
            
            <button
              onClick={() => handleNavClick('contact')}
              className="border border-[#111111]/15 text-[#111111] bg-transparent font-general text-[9px] tracking-[0.2em] uppercase py-2 px-5 rounded-none hover:bg-[#111111] hover:text-[#F8F8F6] hover:border-[#111111] transition-all duration-300 cursor-pointer"
              data-cursor="hover"
            >
              Start Project
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1 text-[#111111] focus:outline-none"
            aria-label="Open Menu"
            data-cursor="hover"
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#FFFFFF] z-[9999] flex flex-col justify-between p-8 md:p-16 lg:hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="font-clash text-lg font-semibold tracking-[0.15em] text-[#111111]">
                BLURRY VISUALS
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-[#111111] focus:outline-none"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-6 my-auto">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.button
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.215, 0.61, 0.355, 1],
                      delay: idx * 0.08,
                    }}
                    onClick={() => handleNavClick(item.href)}
                    className="font-clash text-4xl md:text-5xl font-medium tracking-tight text-[#111111] text-left w-full hover:opacity-60 transition-opacity"
                  >
                    {item.name}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Footer details */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-8 border-t border-[#D9D9D9]">
              <div>
                <p className="font-general text-[9px] tracking-widest text-[#7A7A7A] uppercase mb-1">
                  Locations
                </p>
                <p className="font-sans text-xs text-[#4B4B4B]">
                  Mumbai, Maharashtra, India
                </p>
              </div>
              <div>
                <p className="font-general text-[9px] tracking-widest text-[#7A7A7A] uppercase mb-1">
                  Direct Line
                </p>
                <p className="font-sans text-xs text-[#4B4B4B]">
                  studio@blurryvisuals.com
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
