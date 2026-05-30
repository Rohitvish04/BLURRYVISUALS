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

  const videoFrameX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const videoFrameY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);



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
      className="relative w-full min-h-screen lg:h-[100vh] flex items-center justify-center overflow-hidden bg-[#FFFFFF] px-6 md:px-12 py-24 lg:py-0"
    >
      {/* Autoplay Cinematic Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 lg:opacity-85 scale-105 transition-opacity duration-700"
        >
          <source
            src="https://player.vimeo.com/external/371433846.hd.mp4?s=236da2f3c0227e339f37a916e1e1273934336c1e&profile_id=174&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Left-to-Right Editorial Gradient Overlay for Desktop */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden lg:block"
        style={{
          background: `linear-gradient(to right, 
            #FFFFFF 0%, 
            #FFFFFF 35%, 
            rgba(255, 255, 255, 0.95) 45%, 
            rgba(245, 245, 243, 0.6) 60%, 
            rgba(17, 17, 17, 0.4) 80%, 
            rgba(17, 17, 17, 0.75) 100%)`,
        }}
      />
      {/* Top-to-Bottom Soft Gradient for Mobile */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none lg:hidden"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(255, 255, 255, 0.85) 40%, 
            rgba(245, 245, 243, 0.95) 100%)`,
        }}
      />

      {/* Main Core Content Container (Responsive Split Grid) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12">
        
        {/* LEFT SIDE: Editorial Typography & Actions */}
        <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 md:space-y-8">
          {/* Label */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-general text-[10px] md:text-xs tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase"
            >
              Tokyo × Milan Visual Production Studio
            </motion.p>
          </div>

          {/* Headline */}
          <h1 className="font-clash text-5xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-[#111111] leading-[0.9] tracking-tighter uppercase select-none">
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="inline-block"
              >
                CINEMA
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#4B4B4B] to-[#7A7A7A]"
              >
                THAT MOVES
              </motion.span>
            </span>
            <span className="block overflow-hidden py-1">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="inline-block"
              >
                PEOPLE
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="font-sans text-sm md:text-base text-[#4B4B4B] max-w-md leading-relaxed font-light"
          >
            Premium visual storytelling crafted for brands, artists, and cinematic digital experiences. From concept development to master grading, we deliver high-fidelity productions designed to stand out.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
          >
            <button
              onClick={() => {
                const reelSection = document.getElementById('showreel');
                if (reelSection) reelSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-[#111111] text-[#FFFFFF] font-general text-[10px] tracking-[0.2em] font-medium uppercase py-4 px-8 rounded-none hover:bg-[#4B4B4B] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
              data-cursor="play"
              data-cursor-text="PLAY"
            >
              <Play className="w-3 h-3 fill-current group-hover:scale-110 transition-transform" />
              View Reel
            </button>
            
            <button
              onClick={handleScrollToContact}
              className="w-full sm:w-auto bg-white/30 backdrop-blur-md border border-[#111111]/10 text-[#111111] font-general text-[10px] tracking-[0.2em] font-medium uppercase py-4 px-8 rounded-none hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-all flex items-center justify-center gap-2 cursor-pointer"
              data-cursor="hover"
            >
              Start Project
              <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="grid grid-cols-2 gap-y-4 gap-x-8 pt-8 border-t border-[#D9D9D9]/40 w-full max-w-sm"
          >
            <div>
              <span className="font-clash text-xl md:text-2xl font-semibold text-[#111111] tracking-tight">120+</span>
              <p className="font-general text-[8px] tracking-[0.18em] uppercase text-[#7A7A7A] mt-1">Productions</p>
            </div>
            <div>
              <span className="font-clash text-xl md:text-2xl font-semibold text-[#111111] tracking-tight">15</span>
              <p className="font-general text-[8px] tracking-[0.18em] uppercase text-[#7A7A7A] mt-1">Countries</p>
            </div>
            <div>
              <span className="font-clash text-xl md:text-2xl font-semibold text-[#111111] tracking-tight">8K</span>
              <p className="font-general text-[8px] tracking-[0.18em] uppercase text-[#7A7A7A] mt-1">Workflow</p>
            </div>
            <div>
              <span className="font-clash text-xl md:text-2xl font-semibold text-[#111111] tracking-tight">AWARD</span>
              <p className="font-general text-[8px] tracking-[0.18em] uppercase text-[#7A7A7A] mt-1">Winning Team</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Large Floating Cinematic Preview & Layered Stack */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center min-h-[380px] md:min-h-[460px] mt-8 lg:mt-0">
          
          {/* Main Featured Video Frame (Visual Focal Point) */}
          <motion.div
            style={{ x: videoFrameX, y: videoFrameY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative w-full max-w-[480px] aspect-[16/9] bg-[#111111] border-2 border-white/30 shadow-2xl overflow-hidden group cursor-pointer z-10"
            onClick={() => {
              const reelSection = document.getElementById('showreel');
              if (reelSection) reelSection.scrollIntoView({ behavior: 'smooth' });
            }}
            data-cursor="play"
            data-cursor-text="PLAY"
          >
            {/* Film Still Image */}
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000"
              alt="Echoes of Tokyo Film Still"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Camera HUD Overlay */}
            <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none select-none text-[8px] md:text-[9px] font-mono text-white/70">
              {/* Top HUD Row */}
              <div className="flex justify-between items-center bg-black/30 px-2 py-1 backdrop-blur-[1px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  <span>REC</span>
                </div>
                <div>RAW 8K</div>
                <div>TC 01:24:45:12</div>
              </div>

              {/* Middle Safe Area Crop Lines */}
              <div className="absolute inset-5 border border-white/5 border-dashed flex items-center justify-center">
                <div className="w-4 h-4 border-l border-t border-white/30 absolute top-0 left-0" />
                <div className="w-4 h-4 border-r border-t border-white/30 absolute top-0 right-0" />
                <div className="w-4 h-4 border-l border-b border-white/30 absolute bottom-0 left-0" />
                <div className="w-4 h-4 border-r border-b border-white/30 absolute bottom-0 right-0" />
                {/* Center crosshair */}
                <div className="w-2 h-[1px] bg-white/40" />
                <div className="h-2 w-[1px] bg-white/40 absolute" />
              </div>

              {/* Bottom HUD Row */}
              <div className="flex justify-between items-center bg-black/30 px-2 py-1 backdrop-blur-[1px]">
                <div>FPS 24</div>
                <div>SHUTTER 180°</div>
                <div>ISO 800</div>
                <div>F2.8</div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </motion.div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex justify-between items-end text-white">
              <div>
                <p className="text-[8px] font-general tracking-widest text-[#C7C4BE] uppercase">Featured Project</p>
                <h4 className="text-[11px] md:text-xs font-clash font-medium uppercase tracking-wider mt-0.5">ECHOES OF TOKYO</h4>
              </div>
              <span className="text-[9px] font-mono bg-white/10 px-2 py-0.5 border border-white/10 backdrop-blur-[2px]">02:45</span>
            </div>
          </motion.div>

          {/* Floating Interactive Parallax Cards */}
          <div className="absolute inset-0 z-20 pointer-events-none select-none">
            {/* Card 1: ARRI Workflow */}
            <motion.div
              style={{ x: x1, y: y1 }}
              className="absolute top-[8%] left-[2%] md:left-[10%] glass-card px-4 py-2 flex items-center gap-2 border border-white/30 shadow-lg pointer-events-auto"
              data-cursor="hover"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-ping" />
              <span className="font-general text-[8px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
                ARRI WORKFLOW
              </span>
            </motion.div>

            {/* Card 2: 8K Production */}
            <motion.div
              style={{ x: x2, y: y2 }}
              className="absolute top-[20%] right-[2%] md:right-[5%] glass-card px-4 py-2 flex items-center gap-2 border border-white/30 shadow-lg pointer-events-auto"
              data-cursor="hover"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4B4B4B]" />
              <span className="font-general text-[8px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
                8K PRODUCTION
              </span>
            </motion.div>

            {/* Card 3: VFX Pipeline */}
            <motion.div
              style={{ x: x3, y: y3 }}
              className="absolute bottom-[20%] left-[-2%] md:left-[5%] glass-card px-4 py-2 flex items-center gap-2 border border-white/30 shadow-lg pointer-events-auto"
              data-cursor="hover"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C7C4BE]" />
              <span className="font-general text-[8px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
                VFX PIPELINE
              </span>
            </motion.div>

            {/* Card 4: Prime Optics */}
            <motion.div
              style={{ x: x4, y: y4 }}
              className="absolute bottom-[10%] right-[-2%] md:right-[8%] glass-card px-4 py-2 flex items-center gap-2 border border-white/30 shadow-lg pointer-events-auto"
              data-cursor="hover"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCE8F5]" />
              <span className="font-general text-[8px] tracking-[0.2em] font-semibold text-[#111111] uppercase">
                PRIME OPTICS
              </span>
            </motion.div>
          </div>

        </div>
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
