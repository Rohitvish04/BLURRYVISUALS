import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GalleryCardProps {
  src: string;
  alt: string;
  title: string;
  details: string;
  momentIndex: string;
  projectId: string;
  aspectClass: string;
  delay?: number;
}

function GalleryCard({ src, alt, title, details, momentIndex, projectId, aspectClass, delay = 0 }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      className={`relative overflow-hidden bg-[#ECEAE6] border border-[#D9D9D9]/30 group cursor-pointer ${aspectClass}`}
      data-cursor="hover"
    >
      <Link to={`/project/${projectId}`} className="absolute inset-0 block w-full h-full">
        {/* Grayscale to color zoom transition */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-[1000ms] ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Tag - Slides down on hover */}
        <div className="absolute top-4 left-4 font-general text-[7px] tracking-[0.2em] uppercase text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 pointer-events-none">
          MOMENT // {momentIndex}
        </div>

        {/* Bottom Details - Slides up on hover */}
        <div className="absolute bottom-4 left-4 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 pointer-events-none text-white max-w-[80%]">
          <h4 className="font-clash text-base font-medium uppercase tracking-wide leading-tight">
            {title}
          </h4>
          <p className="font-general text-[8px] tracking-[0.15em] text-[#C6A972] uppercase mt-0.5">
            {details}
          </p>
        </div>

        {/* Bottom Right Arrow indicator */}
        <div className="absolute bottom-4 right-4 text-[#C6A972] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0 pointer-events-none">
          <span className="font-light text-base">↗</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative w-full bg-[#F8F8F6] py-28 px-6 md:px-12 lg:px-20 overflow-hidden select-none border-t border-[#D9D9D9]/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Block with staggered animations */}
        <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase mb-4"
          >
            PORTFOLIO
          </motion.span>
          
          <h2 className="font-clash text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#111111] leading-tight uppercase mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Moments
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="block font-general font-normal text-lg md:text-xl lg:text-2xl tracking-[0.12em] text-[#7A7A7A] mt-2"
            >
              We're Honored to Share
            </motion.span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="font-sans text-sm md:text-base text-[#4B4B4B] leading-relaxed font-light mb-8 max-w-md"
          >
            A glimpse into the weddings we've lovingly created — each one a unique expression of love.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            <Link 
              to="/#work"
              className="px-6 py-2.5 rounded-full bg-[#111111] text-[#FFFFFF] font-general text-[9px] tracking-[0.22em] uppercase hover:bg-[#C6A972] transition-colors duration-300 flex items-center gap-2 cursor-pointer group shadow-sm"
              data-cursor="hover"
            >
              <span>View all work</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 w-full">
            {/* Card 1: Anita & Colm Portrait */}
            <GalleryCard
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
              alt="Anita & Colm Portrait"
              title="Anita & Colm"
              details="Kent // Summer Wedding"
              momentIndex="01"
              projectId="anita-colm"
              aspectClass="aspect-[3/4]"
              delay={0}
            />
            
            {/* Card 2: Two smaller portrait side-by-side */}
            <div className="grid grid-cols-2 gap-6 w-full">
              <GalleryCard
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600"
                alt="Isha & Devpal Arch"
                title="Isha & Devpal"
                details="Udaipur // Palace Ceremony"
                momentIndex="02"
                projectId="isha-devpal"
                aspectClass="aspect-[3/4]"
                delay={0.1}
              />
              <GalleryCard
                src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600"
                alt="Floral Details Kent"
                title="Love & Petals"
                details="Kent // Floral Styling"
                momentIndex="03"
                projectId="anita-colm"
                aspectClass="aspect-[3/4]"
                delay={0.2}
              />
            </div>
            
            {/* Card 3: Landscape couple walking */}
            <GalleryCard
              src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=800"
              alt="Moments of Joy walking"
              title="Moments of Joy"
              details="Kent // Candid Moments"
              momentIndex="04"
              projectId="anita-colm"
              aspectClass="aspect-[4/3]"
              delay={0.15}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 w-full">
            {/* Card 4: Kabir & Riya Close-up Hands */}
            <GalleryCard
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800"
              alt="Close-up of wedding rings and holding hands"
              title="Kabir & Riya"
              details="Goa // Beach Sunset"
              momentIndex="05"
              projectId="kabir-riya"
              aspectClass="aspect-[2/3] lg:aspect-[9/14]"
              delay={0.05}
            />
            
            {/* Card 5: Gowns & Monochromatic Details */}
            <GalleryCard
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800"
              alt="Monochromatic fashion detail"
              title="Zara SS Campaign"
              details="Goa // Fashion Editorial"
              momentIndex="06"
              projectId="zara-indigo"
              aspectClass="aspect-[1/1] lg:aspect-[4/3]"
              delay={0.1}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 w-full md:col-span-2 lg:col-span-1">
            {/* Card 6: Two smaller portrait side-by-side */}
            <div className="grid grid-cols-2 gap-6 w-full">
              <GalleryCard
                src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=600"
                alt="Roma & Jaskaran Bride Veil"
                title="Roma & Jaskaran"
                details="Oman // Royal Legacy"
                momentIndex="07"
                projectId="roma-jaskaran"
                aspectClass="aspect-[3/4]"
                delay={0.1}
              />
              <GalleryCard
                src="https://images.unsplash.com/photo-1507504038482-76210f5c0be1?q=80&w=600"
                alt="Beach vows sunset walking"
                title="Beach Vows"
                details="Goa // Sunset Vows"
                momentIndex="08"
                projectId="kabir-riya"
                aspectClass="aspect-[3/4]"
                delay={0.2}
              />
            </div>
            
            {/* Card 7: Gopalika & Dhruv rose petal Haldi */}
            <GalleryCard
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800"
              alt="Rose petals shower Haldi"
              title="Gopalika & Dhruv"
              details="Mila // Rose Shower"
              momentIndex="09"
              projectId="gopalika-dhruv"
              aspectClass="aspect-[4/3]"
              delay={0.15}
            />

            {/* Card 8: Sparkler celebration send-off */}
            <GalleryCard
              src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800"
              alt="Sparklers send-off reception"
              title="Sparkler Send-off"
              details="Oman // Reception"
              momentIndex="10"
              projectId="roma-jaskaran"
              aspectClass="aspect-[4/3]"
              delay={0.2}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
