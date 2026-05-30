import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/mockData';
import type { Project } from '../../data/mockData';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Commercial Films',
  'Fashion Campaigns',
  'Brand Films',
  'Music Videos',
  'Documentary',
  'Corporate Cinema',
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      // Play video preview
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Automatic play block safety
        });
      }
    } else if (!isHovered && videoRef.current) {
      // Pause and reset video preview
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  // Adjust positioning for an asymmetrical editorial grid layout
  const offsetClass = index % 2 === 1 ? 'md:translate-y-20' : '';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col w-full pb-8 ${offsetClass}`}
    >
      <Link
        to={`/project/${project.id}`}
        className="block relative w-full aspect-[16/10] overflow-hidden bg-[#ECEAE6] border border-[#D9D9D9]/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor="view"
        data-cursor-text="VIEW"
      >
        {/* Cover Image */}
        <img
          src={project.imageUrl}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 ${
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

        {/* Glass Tag Overlay */}
        <div className="absolute top-4 left-4 glass-card px-3 py-1.5 border border-[#D9D9D9]/30 flex items-center gap-1.5">
          <span className="font-general text-[8px] tracking-[0.15em] font-semibold text-[#111111] uppercase">
            {project.category}
          </span>
        </div>
      </Link>

      {/* Info Metadata */}
      <div className="flex justify-between items-start mt-6">
        <div className="space-y-1">
          <p className="font-general text-[9px] tracking-widest text-[#7A7A7A] uppercase">
            {project.client} — {project.year}
          </p>
          <Link
            to={`/project/${project.id}`}
            className="font-clash text-lg md:text-xl font-medium tracking-tight text-[#111111] hover:text-[#4B4B4B] transition-colors block"
          >
            {project.title}
          </Link>
          <p className="font-sans text-xs text-[#4B4B4B] font-light max-w-sm">
            {project.subtitle}
          </p>
        </div>
        
        {/* Arrow Button */}
        <Link
          to={`/project/${project.id}`}
          className="w-10 h-10 border border-[#D9D9D9] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#FFFFFF] group-hover:border-[#111111] transition-all"
          aria-label={`View ${project.title}`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="relative w-full bg-[#FFFFFF] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <p className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase">
              SELECTED PRODUCTIONS
            </p>
            <h2 className="font-clash text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#111111] leading-none uppercase">
              FEATURED WORK
            </h2>
          </div>
          <p className="font-sans text-sm text-[#4B4B4B] max-w-md font-light leading-relaxed">
            A curated portfolio spanning luxury commercial films, cinematic fashion campaigns, music videos, and editorial documentaries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 mb-16 border-b border-[#D9D9D9]/50 pb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-general text-[10px] tracking-[0.2em] uppercase py-2 px-5 transition-all duration-300 rounded-none cursor-pointer ${
                activeFilter === category
                  ? 'bg-[#111111] text-[#FFFFFF]'
                  : 'bg-[#F5F5F3] text-[#4B4B4B] hover:bg-[#ECEAE6] hover:text-[#111111]'
              }`}
              data-cursor="hover"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:gap-y-24 md:pb-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
