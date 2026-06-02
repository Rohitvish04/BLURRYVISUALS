import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

// Reusable Magnetic Hover Component
function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull factor (0.3 for subtle organic drift)
    setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, mass: 0.15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects on scroll
  const yParallax = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0]);

  // Subtle Mouse Parallax (Apple/A24 Luxury feel)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 24, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const textParallaxX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const textParallaxY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ['25%', '75%']);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ['20%', '80%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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

  // Animation variants
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const line1Words = ["WE", "DON'T", "JUST", "MAKE", "FILMS."];
  const line2Words = [
    { text: "WE", color: "text-[#111111]" },
    { text: "CREATE", color: "text-[#111111]" },
    { text: "EMOTIONS.", color: "text-[#C6A972] drop-shadow-[0_0_15px_rgba(198,169,114,0.15)]" }
  ];

  const wordVariants = {
    initial: { y: '105%', opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:h-[100vh] flex items-center justify-center overflow-hidden bg-[#F8F8F6] px-6 md:px-12 lg:px-20 py-24 lg:py-0 select-none"
    >
      {/* Interactive ambient light leak that follows mouse pointer */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          background: useMotionTemplate`radial-gradient(circle 800px at ${glowX} ${glowY}, rgba(198, 169, 114, 0.08), rgba(220, 232, 245, 0.04) 50%, transparent 80%)`,
        }}
      />

      {/* Scroll-linked Parallax Container */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityParallax }}
        className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col items-center justify-center text-center mt-12 lg:mt-16"
      >
        {/* Mouse Parallax Inner Container */}
        <motion.div
          style={{ x: textParallaxX, y: textParallaxY }}
          className="w-full flex flex-col items-center justify-center"
        >
          {/* Headline block (Exactly 2 major blocks, capital and bold, proper spacing & alignment) */}
          <motion.h1 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="font-clash font-black text-[clamp(2rem,6.5vw,3.2rem)] md:text-[clamp(3.2rem,7vw,4.8rem)] lg:text-[clamp(4.2rem,5.8vw,6.8rem)] leading-[0.9] tracking-[0.02em] uppercase text-[#111111] flex flex-col items-center space-y-2 md:space-y-3 lg:space-y-4"
          >
            {/* Line 1 */}
            <span className="flex flex-wrap justify-center gap-x-[0.28em] overflow-hidden py-2 -my-2">
              {line1Words.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden py-1 -my-1">
                  <motion.span variants={wordVariants} className="inline-block font-clash font-black">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>

            {/* Line 2 */}
            <span className="flex flex-wrap justify-center gap-x-[0.28em] overflow-hidden py-2 -my-2">
              {line2Words.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden py-1 -my-1">
                  <motion.span variants={wordVariants} className={`inline-block font-clash font-black ${word.color}`}>
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.h1>

          {/* Thin elegant horizontal line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-16 h-[1px] bg-[#C6A972] my-8 origin-center"
          />

          {/* Subheading & Buttons Container */}
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Subheadings */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="mt-4 lg:mt-6 max-w-[620px]"
            >
              <p className="font-general text-sm md:text-base lg:text-[1.05rem] leading-[1.8] text-[#4B4B4B] font-medium tracking-wide">
                Award-winning cinematic storytelling for modern brands, businesses, and creators. From concept to final delivery, we craft premium visual experiences that inspire, engage, and leave a lasting impression.
              </p>
            </motion.div>

            {/* Button Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="flex items-center justify-center gap-6 mt-12"
            >
              {/* Primary Button */}
              <Magnetic>
                <button
                  onClick={handleScrollToWork}
                  className="relative px-8 py-4 border border-[#111111] font-general text-[10px] tracking-[0.25em] font-medium uppercase bg-[#111111] text-[#F8F8F6] hover:bg-transparent hover:text-[#111111] hover:border-[#111111] transition-all duration-300 rounded-none cursor-pointer overflow-hidden group"
                  data-cursor="hover"
                >
                  <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    VIEW WORK
                  </span>
                </button>
              </Magnetic>

              {/* Secondary Button */}
              <Magnetic>
                <button
                  onClick={handleScrollToContact}
                  className="relative px-8 py-4 border border-[#111111]/20 font-general text-[10px] tracking-[0.25em] font-medium uppercase bg-transparent text-[#666666] hover:text-[#111111] hover:border-[#111111] transition-all duration-300 rounded-none cursor-pointer overflow-hidden group"
                  data-cursor="hover"
                >
                  <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    START PROJECT
                  </span>
                </button>
              </Magnetic>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        onClick={handleScrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 cursor-pointer"
        data-cursor="hover"
      >
        <span className="font-general text-[9px] tracking-[0.3em] font-medium text-[#666666] uppercase">
          SCROLL
        </span>
        <div className="w-[1px] h-12 bg-[#111111]/10 relative overflow-hidden">
          <motion.div
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#C6A972]"
          />
        </div>
      </motion.button>
    </section>
  );
}
