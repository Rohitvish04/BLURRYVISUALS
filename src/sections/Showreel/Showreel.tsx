import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

export default function Showreel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section id="showreel" className="relative w-full bg-[#FFFFFF] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Banner container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/9] md:aspect-[21/9] bg-[#ECEAE6] overflow-hidden border border-[#D9D9D9]/50 group cursor-pointer"
          onClick={() => setIsOpen(true)}
          data-cursor="play"
          data-cursor-text="PLAY"
        >
          {/* Muted background video preview inside the banner */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 group-hover:scale-100 transition-transform duration-[1500ms] ease-out"
          >
            <source
              src="https://player.vimeo.com/external/435674703.hd.mp4?s=5f0d2c4b7bdf01a2f643e9b1d9bfcf0a030438cf&profile_id=174&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>

          {/* Dark luxury vignetting */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30 opacity-70 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Central Play Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-2xl relative"
            >
              <Play className="w-6 h-6 md:w-8 md:h-8 fill-current translate-x-0.5 text-[#111111]" />
              
              {/* Outer rotating typographic ring */}
              <svg className="absolute inset-[-15px] w-[110px] h-[110px] md:w-[142px] md:h-[142px] animate-[spin_12s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100">
                <path
                  id="textPath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="font-general text-[6px] tracking-[0.25em] fill-white uppercase font-semibold">
                  <textPath href="#textPath">
                    * BLURRY VISUALS * SHOWREEL 2026 * BLURRY VISUALS * SHOWREEL 2026
                  </textPath>
                </text>
              </svg>
            </motion.div>

            <span className="font-general text-[10px] md:text-xs tracking-[0.3em] font-semibold text-white uppercase select-none drop-shadow-md">
              PLAY SHOWREEL
            </span>
          </div>

          {/* Bottom left stats overlay */}
          <div className="absolute bottom-6 left-6 font-general text-[8px] md:text-[10px] tracking-widest text-white/70 uppercase">
            RUN TIME 02:45 // FORMAT ARRI RAW // TOKYO - MILAN
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Top Bar Details */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
              <span className="font-clash text-sm text-white/50 tracking-widest">
                BLURRY VISUALS // SHOWREEL 2026
              </span>
              
              <div className="flex items-center gap-4">
                {/* Mute toggle */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                {/* Close modal */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Showreel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl aspect-[16/9] shadow-2xl bg-black border border-white/10"
            >
              <video
                src="https://player.vimeo.com/external/435674703.hd.mp4?s=5f0d2c4b7bdf01a2f643e9b1d9bfcf0a030438cf&profile_id=174&oauth2_token_id=57447761"
                autoPlay
                controls
                playsInline
                muted={isMuted}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
