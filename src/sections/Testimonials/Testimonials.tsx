import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/mockData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-28 px-6 md:px-12 border-t border-[#D9D9D9]/50 overflow-hidden">
      {/* Subtle decorative background quote icon */}
      <Quote className="absolute right-10 top-10 w-96 h-96 text-[#F5F5F3] opacity-30 pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Label */}
        <p className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase mb-16 text-center">
          VOICES OF COLLABORATION
        </p>

        {/* Carousel Content Container */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center space-y-8 max-w-4xl"
            >
              {/* Quote Mark */}
              <span className="text-[#C7C4BE] font-clash text-7xl select-none font-bold leading-none">
                “
              </span>

              {/* Quote Text */}
              <blockquote className="font-clash text-2xl md:text-3xl lg:text-4xl text-[#111111] font-light leading-snug tracking-tight">
                {current.quote}
              </blockquote>

              {/* Author info */}
              <div className="space-y-1">
                <cite className="font-clash text-lg font-medium text-[#111111] not-italic">
                  {current.author}
                </cite>
                <p className="font-general text-[9px] tracking-widest text-[#7A7A7A] uppercase">
                  {current.role} // {current.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Control navigation */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-[#D9D9D9]/50">
          {/* Pagination Counter */}
          <div className="font-general text-[10px] tracking-widest text-[#7A7A7A]">
            <span className="text-[#111111] font-semibold">0{activeIndex + 1}</span> / 0{testimonialsData.length}
          </div>

          {/* Nav buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-[#D9D9D9] hover:border-[#111111] hover:bg-[#111111] hover:text-white flex items-center justify-center transition-all cursor-pointer rounded-none"
              aria-label="Previous Testimonial"
              data-cursor="hover"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border border-[#D9D9D9] hover:border-[#111111] hover:bg-[#111111] hover:text-white flex items-center justify-center transition-all cursor-pointer rounded-none"
              aria-label="Next Testimonial"
              data-cursor="hover"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
