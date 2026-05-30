import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1800; // 1.8 seconds
    const intervalTime = 25;
    const step = end / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
        }, 500); // brief pause before slide-up
      } else {
        setProgress(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="fixed inset-0 bg-[#111111] z-[99999] flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Top Row */}
          <div className="flex justify-between items-start font-general text-[10px] tracking-widest text-[#F5F5F3] opacity-60">
            <span>BLURRY VISUALS</span>
            <span>PRODUCTION STUDIO ©2026</span>
          </div>

          {/* Middle Headline */}
          <div className="flex flex-col justify-center flex-grow">
            <h1 className="text-[#FFFFFF] font-clash text-4xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-none select-none max-w-4xl">
              <span className="block overflow-hidden py-1">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
                  className="inline-block"
                >
                  CINEMA ENGINEERED.
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-end">
            <div className="font-general text-[9px] tracking-widest text-[#F5F5F3] opacity-40 max-w-xs hidden md:block uppercase leading-relaxed">
              Tokyo × Milan Studio Pipeline<br />
              All systems online. Core assets preloading...
            </div>
            
            {/* Elegant count display */}
            <div className="text-[#FFFFFF] font-clash text-7xl md:text-9xl font-light tracking-tighter leading-none flex items-baseline select-none">
              <span className="w-[100px] md:w-[200px] text-right inline-block tabular-nums">{progress}</span>
              <span className="text-xl md:text-3xl ml-1 font-general opacity-40 font-normal">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
