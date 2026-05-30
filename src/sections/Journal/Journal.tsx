import { motion } from 'framer-motion';
import { journalData } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

export default function Journal() {
  return (
    <section id="journal" className="relative w-full bg-[#F5F5F3] py-28 px-6 md:px-12 border-t border-[#D9D9D9]/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <p className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase">
              STUDIO INTELLECTUAL INSIGHTS
            </p>
            <h2 className="font-clash text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#111111] leading-none uppercase">
              THE JOURNAL
            </h2>
          </div>
          <p className="font-sans text-sm text-[#4B4B4B] max-w-sm font-light leading-relaxed">
            Written by our directors and operators. Dive into technical breakdowns, visual aesthetics theory, and production diaries.
          </p>
        </div>

        {/* Asymmetrical Journal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journalData.map((post, idx) => {
            // Apply different positioning offsets to create an editorial magazine feel
            const offsetClass = idx === 1 ? 'lg:translate-y-8' : idx === 2 ? 'lg:-translate-y-4' : '';
            
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                className={`flex flex-col justify-between bg-[#FFFFFF] border border-[#D9D9D9]/50 p-6 md:p-8 hover:shadow-lg transition-all duration-500 ease-out group ${offsetClass}`}
              >
                <div className="space-y-6">
                  {/* Image container */}
                  <div className="relative aspect-[16/10] bg-[#ECEAE6] overflow-hidden border border-[#D9D9D9]/30">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 glass-card px-3 py-1 border border-[#D9D9D9]/30">
                      <span className="font-general text-[8px] tracking-[0.15em] font-semibold text-[#111111] uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 font-general text-[9px] tracking-widest text-[#7A7A7A] uppercase">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-[#D9D9D9] rounded-full" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title & summary */}
                  <div className="space-y-3">
                    <h3 className="font-clash text-lg md:text-xl font-semibold text-[#111111] tracking-tight group-hover:text-[#4B4B4B] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-sans text-xs text-[#4B4B4B] leading-relaxed font-light line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Read Button */}
                <div className="mt-8 pt-6 border-t border-[#D9D9D9]/50 flex items-center justify-between text-[#111111]">
                  <button
                    className="font-general text-[9px] tracking-[0.2em] font-semibold uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    data-cursor="hover"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
