import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: '150+', label: 'PROJECTS DELIVERED' },
    { value: '50+', label: 'HAPPY CLIENTS' },
    { value: 'MUMBAI', label: 'STUDIO BASE' },
    { value: '4K & 8K', label: 'PRODUCTION' },
  ];

  return (
    <section id="about" className="relative w-full bg-[#F5F5F3] py-28 px-6 md:px-12 overflow-hidden border-t border-[#D9D9D9]/50">
      {/* Decorative large watermarked background text */}
      <div className="absolute right-[-10%] bottom-[-5%] font-clash text-[18vw] font-bold text-[#ECEAE6] select-none pointer-events-none leading-none opacity-45">
        STUDIO
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading Info */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase">
              WHO WE ARE
            </p>
            <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#111111] leading-none uppercase">
              ABOUT OUR<br />
              STUDIO.
            </h2>
          </div>

          {/* Right Column: Editorial Text & Details */}
          <div className="lg:col-span-8 space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-clash text-2xl md:text-4xl text-[#111111] leading-snug tracking-tight font-light max-w-4xl"
            >
              Blurry Visuals Film Production is a creative film and content production studio helping brands, businesses, and creators tell compelling stories through cinematic visuals. We specialize in commercials, corporate films, social media campaigns, product videos, and branded storytelling.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-sans text-sm md:text-base text-[#4B4B4B] leading-relaxed font-light max-w-2xl"
            >
              Operating out of Mumbai, we focus on helping businesses grow through high-quality visual content and storytelling. We collaborate closely with startups, corporate brands, restaurants, real estate developers, and luxury clients to deliver premium visual experiences designed for modern digital landscapes.
            </motion.p>

            {/* Statistics Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#D9D9D9]">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                  className="space-y-2"
                >
                  <p className="font-clash text-xl md:text-2xl lg:text-3xl font-semibold text-[#111111] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="font-general text-[8px] md:text-[9px] tracking-[0.2em] text-[#7A7A7A] uppercase leading-tight font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Split Images Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {/* Image Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] bg-[#ECEAE6] overflow-hidden border border-[#D9D9D9]/30"
              >
                <img
                  src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800"
                  alt="Mumbai production unit"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 glass-card px-4 py-2 border border-[#D9D9D9]/30">
                  <p className="font-general text-[8px] tracking-widest text-[#111111] font-semibold uppercase">
                    UNIT MUMBAI / PRODUCTION
                  </p>
                </div>
              </motion.div>

              {/* Image Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="relative aspect-[4/5] bg-[#ECEAE6] overflow-hidden border border-[#D9D9D9]/30 md:translate-y-12"
              >
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800"
                  alt="Goa studio workflow"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 glass-card px-4 py-2 border border-[#D9D9D9]/30">
                  <p className="font-general text-[8px] tracking-widest text-[#111111] font-semibold uppercase">
                    UNIT GOA / LANDSCAPES
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
