import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

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

  const springConfig = { stiffness: 45, damping: 18 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const textParallaxX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const textParallaxY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

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
        staggerChildren: 0.15,
      },
    },
  };

  const lineVariants = {
    initial: { y: '105%', opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen lg:h-[100vh] flex items-center justify-center overflow-hidden bg-[#F8F8F6] px-6 md:px-12 lg:px-20 py-24 lg:py-0 select-none"
    >
      {/* Soft Ambient Glow in the upper right background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{
          background: `radial-gradient(circle 800px at 75% 25%, rgba(198, 169, 114, 0.07), transparent 85%)`,
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
          {/* Headline block (Exactly 2 major blocks) */}
          <motion.h1 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="font-clash font-black text-[clamp(2.4rem,7.5vw,4.5rem)] md:text-[clamp(4.2rem,9vw,6.5rem)] lg:text-[clamp(5rem,10vw,8rem)] leading-[0.88] tracking-[-0.06em] uppercase text-[#111111]"
          >
            {/* Block 1 */}
            <span className="block overflow-hidden py-3 -my-3">
              <motion.span variants={lineVariants} className="inline-block">
                WE DON'T JUST MAKE FILMS.
              </motion.span>
            </span>

            {/* Block 2 */}
            <span className="block overflow-hidden py-3 -my-3">
              <motion.span variants={lineVariants} className="inline-block">
                WE CREATE <span className="text-[#C6A972]">EMOTIONS.</span>
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheading & Buttons Container */}
          <div className="flex flex-col items-center justify-center text-center">
            
            {/* Subheadings */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="mt-[40px] space-y-6 max-w-[550px] font-general text-[1.1rem] leading-[1.8] text-[#666666] font-medium"
            >
              <p>
                Award-winning cinematic storytelling for brands, businesses, and creators.
              </p>
              <p className="font-sans font-light text-sm text-[#888888] leading-relaxed">
                From concept to final delivery, we craft visual experiences that inspire, engage, and leave a lasting impression.
              </p>
            </motion.div>

            {/* Button Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
              className="flex items-center justify-center gap-4 mt-10"
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
        transition={{ delay: 1.1, duration: 0.8 }}
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
