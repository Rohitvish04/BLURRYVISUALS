import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/mockData';
import type { Project } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Commercial Films',
  'Corporate Videos',
  'Restaurant Promotions',
  'Fashion Campaigns',
  'Real Estate Projects',
  'Event Films',
  'Social Media Campaigns',
];

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative shrink-0 w-[68vw] sm:w-[36vw] md:w-[28vw] lg:w-[20vw] xl:w-[16vw] aspect-[4/5] rounded-[24px] overflow-hidden group cursor-pointer snap-start bg-[#ECEAE6]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="view"
      data-cursor-text="VIEW"
    >
      <Link to={`/project/${project.id}`} className="absolute inset-0 block w-full h-full">
        {/* Dark Gradient Bottom Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-[1] transition-opacity duration-500 group-hover:from-black/90" />

        {/* Cover Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Hover Loop Video */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out pointer-events-none ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
        )}

        {/* Text Details Bottom-Left overlay inside card */}
        <div className="absolute bottom-6 left-6 text-left z-10 pointer-events-none text-white max-w-[85%]">
          <p className="font-general text-[8px] md:text-[9px] font-semibold tracking-[0.2em] text-white/70 mb-1.5 uppercase">
            {project.year} // {project.location}
          </p>
          <h3 className="font-clash text-lg md:text-xl font-medium tracking-wide uppercase leading-tight">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic filter grouping by project category metadata
  const getFilteredProjects = () => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="work" className="relative w-full bg-[#FFFFFF] py-24 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-clash text-2xl md:text-3xl font-semibold tracking-[0.25em] text-[#111111] uppercase leading-none">
            FEATURED WORK
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-full overflow-x-auto pb-4 scrollbar-none whitespace-nowrap">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-general text-[9px] md:text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                activeFilter === category
                  ? 'bg-[#FF3B30] text-[#FFFFFF] border-[#FF3B30] shadow-sm font-semibold'
                  : 'bg-[#FFFFFF] text-[#666666] border-black/10 hover:border-black/30 hover:text-[#111111]'
              }`}
              data-cursor="hover"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Carousel */}
        <div 
          ref={scrollContainerRef}
          className="w-full flex overflow-x-auto gap-6 pb-12 pt-4 px-6 md:px-12 lg:px-20 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-6 md:-mx-12 lg:-mx-20"
        >
          <div className="w-[1px] shrink-0" />
          
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </AnimatePresence>
          
          <div className="w-[1px] shrink-0" />
        </div>

        {/* view more button */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            to="/#work"
            className="px-6 py-2.5 rounded-full bg-[#111111] text-[#FFFFFF] font-general text-[9px] tracking-[0.22em] uppercase hover:bg-[#C6A972] transition-colors duration-300 flex items-center gap-2 cursor-pointer group shadow-sm"
            data-cursor="hover"
          >
            <span>view more</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
