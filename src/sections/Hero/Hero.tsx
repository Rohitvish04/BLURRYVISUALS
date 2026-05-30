import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  // Performance-friendly Mouse Parallax (No React Re-renders)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -0.5 and 0.5
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Spring settings for organic drift lag
  const springConfig = { stiffness: 50, damping: 18, mass: 0.5 };

  // Generate staggered translation values for floating cards
  const x1 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-35, 35]), springConfig);
  const y1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-35, 35]), springConfig);

  const x2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [45, -45]), springConfig);
  const y2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const x3 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const y3 = useSpring(useTransform(mouseY, [-0.5, 0.5], [40, -40]), springConfig);

  const x4 = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, -30]), springConfig);
  const y4 = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, -30]), springConfig);

  const handleScrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-[#FFFFFF] px-6 md:px-12 py-20"
    >
      {/* Autoplay Cinematic Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        >
          <source
            src="https://player.vimeo.com/external/371433846.hd.mp4?s=236da2f3c0227e339f37a916e1e1273934336c1e&profile_id=174&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Editorial Soft White Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.3) 40%, 
            rgba(255, 255, 255, 0.75) 75%, 
            rgba(255, 255, 255, 1) 100%)`,
        }}
      />

      {/* Floating Interactive Parallax Cards */}
      <div className="absolute inset-0 z-[2] hidden md:block pointer-events-none select-none">
        {/* Card 1 */}
        <motion.div
          style={{ x: x1, y: y1 }}
          className="absolute top-[20%] right-[10%] glass-card px-5 py-3 flex items-center gap-3 border border-[#D9D9D9]/50 shadow-md pointer-events-auto"
          data-cursor="hover"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-ping" />
          <span className="font-general text-[10px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
            ARRI WORKFLOW
          </span>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          style={{ x: x2, y: y2 }}
          className="absolute top-[40%] left-[8%] glass-card px-5 py-3 flex items-center gap-3 border border-[#D9D9D9]/50 shadow-md pointer-events-auto"
          data-cursor="hover"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4B4B4B]" />
          <span className="font-general text-[10px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
            8K PRODUCTION
          </span>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          style={{ x: x3, y: y3 }}
          className="absolute bottom-[35%] right-[12%] glass-card px-5 py-3 flex items-center gap-3 border border-[#D9D9D9]/50 shadow-md pointer-events-auto"
          data-cursor="hover"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C7C4BE]" />
          <span className="font-general text-[10px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
            VFX PIPELINE
          </span>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          style={{ x: x4, y: y4 }}
          className="absolute bottom-[20%] left-[15%] glass-card px-5 py-3 flex items-center gap-3 border border-[#D9D9D9]/50 shadow-md pointer-events-auto"
          data-cursor="hover"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#DCE8F5]" />
          <span className="font-general text-[10px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
            PRIME OPTICS
          </span>
        </motion.div>
      </div>

      {/* Main Core Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-8 mt-12">
        {/* Label */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-general text-[10px] md:text-xs tracking-[0.25em] font-semibold text-[#4B4B4B] uppercase"
          >
            Tokyo × Milan Visual Production Studio
          </motion.p>
        </div>

        {/* Headline */}
        <h1 className="font-clash text-4xl md:text-7xl lg:text-8xl font-medium text-[#111111] tracking-tighter leading-[0.9] max-w-4xl text-center select-none uppercase">
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="inline-block"
            >
              CINEMA ENGINEERED
            </motion.span>
          </span>
          <span className="block overflow-hidden py-1">
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#4B4B4B] to-[#7A7A7A]"
            >
              FOR MODERN STORYTELLING
            </motion.span>
          </span>
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
          className="font-sans text-sm md:text-base text-[#4B4B4B] max-w-2xl leading-relaxed font-light"
        >
          Premium visual storytelling crafted for brands, artists, and cinematic digital experiences. From concept development to master grading, we deliver high-fidelity productions designed to stand out.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <button
            onClick={() => {
              const reelSection = document.getElementById('showreel');
              if (reelSection) reelSection.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-[#111111] text-[#FFFFFF] font-general text-[10px] tracking-[0.2em] font-medium uppercase py-3.5 px-8 rounded-none hover:bg-[#4B4B4B] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
            data-cursor="play"
            data-cursor-text="PLAY"
          >
            <Play className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" />
            View Reel
          </button>
          
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto bg-transparent border border-[#D9D9D9] text-[#111111] font-general text-[10px] tracking-[0.2em] font-medium uppercase py-3.5 px-8 rounded-none hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all flex items-center justify-center gap-2 cursor-pointer"
            data-cursor="hover"
          >
            Start Project
            <ArrowRight className="w-3 h-3" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        data-cursor="hover"
      >
        <span className="font-general text-[8px] tracking-[0.3em] font-medium text-[#7A7A7A] uppercase">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-[#D9D9D9] relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#111111]"
          />
        </div>
      </motion.button>
    </section>
  );
}
