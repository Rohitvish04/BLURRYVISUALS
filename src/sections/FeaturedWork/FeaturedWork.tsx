import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/mockData';
import type { Project } from '../../data/mockData';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
      layout="position"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, y: 15 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative shrink-0 w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[21.5vw] xl:w-[19.5vw] aspect-[4/5] rounded-[12px] overflow-hidden group cursor-pointer snap-start bg-[#ECEAE6] border border-black/5 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-12px_rgba(198,169,114,0.15)] transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="view"
      data-cursor-text="VIEW"
    >
      <Link to={`/project/${project.id}`} className="absolute inset-0 block w-full h-full">
        {/* Deep Dark Gradient Bottom Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-[2] transition-opacity duration-500 group-hover:from-black/100" />

        {/* Cover Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03] z-0"
          loading="lazy"
        />

        {/* Hover Loop Video - Synchronized Scale zoom on hover */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-[1] group-hover:scale-[1.03] ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transition: 'opacity 500ms ease-out, transform 1600ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        )}

        {/* Text Details Overlay inside card */}
        <div className="absolute bottom-6 left-6 text-left z-10 pointer-events-none text-white max-w-[88%]">
          <div className="flex flex-col transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-2">
            {/* Category Tag Glassmorphic Pill */}
            <span className="self-start inline-block px-2.5 py-0.5 mb-2 font-general text-[7px] tracking-[0.15em] uppercase border border-white/10 bg-black/30 backdrop-blur-[3px] rounded-full text-white/90 transition-all duration-500 group-hover:border-white/30 group-hover:bg-black/50">
              {project.category}
            </span>
            
            <p className="font-general text-[8px] md:text-[9px] font-semibold tracking-[0.2em] text-white/60 mb-1 uppercase">
              {project.year} // {project.location}
            </p>
            
            <h3 className="font-clash text-lg md:text-xl font-medium tracking-wide uppercase leading-tight transition-colors duration-300 group-hover:text-[#C6A972]">
              {project.title}
            </h3>

            {/* Camera metadata specs reveal on hover */}
            <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:h-5 group-hover:opacity-100 mt-2 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#C6A972]" />
              <span className="font-general text-[7px] tracking-[0.15em] text-white/50 uppercase">
                {project.specs.format} // {project.specs.aspect}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic filter grouping by project category metadata
  const getFilteredProjects = () => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());
  };

  const filteredProjects = getFilteredProjects();

  // Reset scroll and progress indicator when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
    setScrollProgress(0);
  }, [activeFilter]);

  const advanceCarousel = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const card = scrollContainerRef.current.querySelector('.snap-start') as HTMLElement;
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 24; // gap-6 is 24px in Tailwind
        const scrollStep = cardWidth + gap;
        let nextScroll = scrollLeft + scrollStep;
        
        // Wrap around if close to the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          nextScroll = 0;
        }
        
        scrollContainerRef.current.scrollTo({ left: nextScroll, behavior: 'smooth' });
      }
    }
  };

  // Autoplay loop: waits 1 second for first transition, then advances every 3.5 seconds
  useEffect(() => {
    if (isMouseOver) return;

    const initialTeaser = setTimeout(() => {
      advanceCarousel();
    }, 1000);

    const interval = setInterval(() => {
      advanceCarousel();
    }, 3500); // 3.5 seconds interval gives plenty of time to view cards

    return () => {
      clearTimeout(initialTeaser);
      clearInterval(interval);
    };
  }, [isMouseOver, filteredProjects]);

  // Track horizontal scroll position for the progress bar
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial run
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [filteredProjects]);

  // Chevron step scroll calculation: Card Width + Gap
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const card = scrollContainerRef.current.querySelector('.snap-start') as HTMLElement;
      
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 24; // gap-6 is 24px
        const scrollStep = cardWidth + gap;
        const scrollTo = direction === 'left' ? scrollLeft - scrollStep : scrollLeft + scrollStep;
        scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      } else {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.3;
        const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
        scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="work" className="relative w-full bg-[#FFFFFF] py-24 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header with Title & Nav Arrows */}
        <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-[#D9D9D9]/30">
          <div className="flex flex-col text-left">
            <h2 className="font-clash text-2xl md:text-3xl font-semibold tracking-[0.25em] text-[#111111] uppercase leading-none">
              FEATURED WORK
            </h2>
            <span className="font-general text-[8px] md:text-[9px] tracking-[0.15em] text-[#7A7A7A] uppercase mt-2">
              Selected commercial campaigns & cinematic stories // Mumbai, India
            </span>
          </div>
          
          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-black/5 bg-white shadow-sm flex items-center justify-center text-[#111111] hover:bg-[#C6A972] hover:text-black hover:border-[#C6A972] transition-all duration-300 cursor-pointer"
              aria-label="Previous projects"
              data-cursor="hover"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-black/5 bg-white shadow-sm flex items-center justify-center text-[#111111] hover:bg-[#C6A972] hover:text-black hover:border-[#C6A972] transition-all duration-300 cursor-pointer"
              aria-label="Next projects"
              data-cursor="hover"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-full overflow-x-auto pb-4 scrollbar-none whitespace-nowrap">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-general text-[9px] md:text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer border ${
                activeFilter === category
                  ? 'bg-[#111111] text-[#FFFFFF] border-[#111111] shadow-sm font-semibold'
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
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
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

        {/* Scroll Progress Bar Track (Longer & Delicate Scrubber Line) */}
        {filteredProjects.length > 1 && (
          <div className="w-64 h-[1px] bg-black/10 rounded-full mb-8 mt-4 relative">
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#C6A972] rounded-full transition-all duration-200 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}

        {/* view more button */}
        <div className="mt-4 flex items-center justify-center">
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
