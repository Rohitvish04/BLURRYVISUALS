import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/mockData';
import { ArrowLeft, ArrowRight, Film, Cpu, Ratio, Play, X } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);
  const [isPlaying, setIsPlaying] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsPlaying(false);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center p-6 text-center text-[#111111]">
        <h2 className="font-clash text-4xl font-semibold text-[#111111] mb-4 tracking-wider">
          PROJECT NOT FOUND
        </h2>
        <p className="font-general text-[10px] tracking-[0.2em] text-[#7A7A7A] mb-8 max-w-xs uppercase">
          The requested production record does not exist or has been archived.
        </p>
        <Link
          to="/"
          className="bg-[#111111] text-white font-general text-[10px] tracking-[0.2em] uppercase py-3 px-8 hover:bg-[#C6A972] hover:text-black transition-colors rounded-full"
        >
          Return Home
        </Link>
      </div>
    );
  }

  // Next Project preview calculation
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="bg-[#FFFFFF] min-h-screen pb-0 text-[#111111]/90 select-none">
      
      {/* Immersive Parallax Header Banner */}
      <div className="relative w-full h-[65vh] md:h-[75vh] bg-black overflow-hidden">
        {/* Back Link (Floating on top) */}
        <div className="absolute top-28 left-6 md:left-12 z-30">
          <button
            onClick={() => navigate('/#work')}
            className="flex items-center gap-2.5 font-general text-[10px] tracking-[0.22em] font-semibold text-[#111111] hover:text-[#C6A972] uppercase group transition-colors cursor-pointer bg-white/90 backdrop-blur-md px-4 py-2 border border-black/5 rounded-full shadow-sm"
            data-cursor="hover"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </div>

        {isPlaying ? (
          <div className="absolute inset-0 w-full h-full bg-black z-20">
            <video
              src={project.videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
              onEnded={() => setIsPlaying(false)}
            />
            {/* Close Video button */}
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-28 right-6 md:right-12 z-30 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full border border-white/10 flex items-center justify-center transition-all cursor-pointer"
              data-cursor="hover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            {/* Cover Image with smooth scale-out loading zoom */}
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1.02, opacity: 0.75 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Dark Vignette Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45 pointer-events-none" />

            {/* Play Button Viewfinder Ring Overlay */}
            {project.videoUrl && (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10 group"
                data-cursor="play"
                data-cursor-text="PLAY"
              >
                <div className="relative flex items-center justify-center">
                  {/* Pulsing outer camera reticle ring */}
                  <div className="absolute w-24 h-24 rounded-full border border-white/10 group-hover:scale-110 group-hover:border-[#C6A972]/30 transition-all duration-700 ease-out animate-pulse" />
                  {/* Inner ring */}
                  <div className="absolute w-20 h-20 rounded-full border border-white/20 group-hover:scale-105 group-hover:border-[#C6A972]/50 transition-all duration-500 ease-out" />
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl group-hover:bg-[#C6A972] group-hover:text-black group-hover:border-[#C6A972] transition-all duration-500"
                  >
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </motion.div>
                </div>
              </div>
            )}

            {/* Title Content Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute bottom-12 left-6 md:left-12 right-6 pointer-events-none"
            >
              <div className="max-w-4xl space-y-3.5">
                <span className="font-general text-[9px] tracking-[0.3em] font-bold text-[#C6A972] uppercase">
                  {project.category} // {project.year}
                </span>
                <h1 className="font-clash text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-none uppercase">
                  {project.title}
                </h1>
                <div className="w-16 h-[1px] bg-[#C6A972]/50 my-2" />
                <p className="font-general text-xs md:text-sm text-white/80 font-light max-w-xl tracking-wide leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Main Details Grid Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Project Overview & Cinematic Widescreen Frames */}
          <div className="lg:col-span-8 space-y-20">
            
            {/* Project Overview */}
            <div className="space-y-6">
              <h2 className="font-general text-[9px] tracking-[0.3em] font-bold text-[#7A7A7A] uppercase border-b border-[#D9D9D9]/80 pb-3">
                PROJECT OVERVIEW
              </h2>
              <p className="font-clash text-xl md:text-2xl lg:text-3xl text-[#111111] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Production Frames Gallery */}
            <div className="space-y-8">
              <h2 className="font-general text-[9px] tracking-[0.3em] font-bold text-[#7A7A7A] uppercase border-b border-[#D9D9D9]/80 pb-3">
                PRODUCTION FRAMES // CAMERA HUD
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                {project.gallery.map((img, idx) => {
                  const isFullWidth = idx === 2 || project.gallery.length === 1;
                  const aspectClass = isFullWidth ? 'md:col-span-2 aspect-[2.39/1]' : 'aspect-[16/9]';
                  return (
                    <motion.div
                      key={img}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                      className={`relative bg-[#F5F5F3] overflow-hidden border border-[#D9D9D9]/30 group rounded-[8px] ${aspectClass}`}
                    >
                      <img
                        src={img}
                        alt={`Production Frame ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Interactive Viewfinder Overlay HUD on hover */}
                      <div className="absolute inset-0 border border-white/0 group-hover:border-white/5 transition-all duration-500 pointer-events-none p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100">
                        {/* Top Corner guidelines and blinking REC */}
                        <div className="flex justify-between items-start">
                          <div className="w-3 h-3 border-t border-l border-white/40" />
                          <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-[2px] px-2 py-0.5 rounded-[4px] text-[7px] font-general tracking-widest text-red-500 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            REC
                          </div>
                          <div className="w-3 h-3 border-t border-r border-white/40" />
                        </div>
                        
                        {/* Center Viewfinder Reticle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                          <div className="w-2.5 h-[1px] bg-white/40" />
                          <div className="h-2.5 w-[1px] bg-white/40 absolute" />
                        </div>
                        
                        {/* Bottom guidelines and changing Timecode */}
                        <div className="flex justify-between items-end">
                          <div className="w-3 h-3 border-b border-l border-white/40" />
                          <div className="text-[7px] font-mono tracking-wider text-white/50 bg-black/50 backdrop-blur-[2px] px-1.5 py-0.5 rounded-[4px]">
                            TC 01:04:12:{idx * 15 + 8}
                          </div>
                          <div className="w-3 h-3 border-b border-r border-white/40" />
                        </div>
                      </div>

                      {/* Bottom-left frame label tag */}
                      <div className="absolute bottom-3 left-3 bg-[#111111]/80 border border-white/10 backdrop-blur-md px-2.5 py-1 text-[8px] font-general text-[#FFFFFF]/75 tracking-widest uppercase rounded-[4px]">
                        FRAME {idx + 1}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Camera Metadata Specs and Credits */}
          <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-28">
            
            {/* Tech Specs Board (Light Theme) */}
            <div className="bg-[#F5F5F3] border border-[#D9D9D9]/50 rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#D9D9D9]/80 pb-4">
                <h3 className="font-clash text-lg font-medium text-[#111111] tracking-tight uppercase">
                  CAMERA METADATA
                </h3>
                {/* Active pipeline badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[8px] font-general font-semibold text-emerald-700 tracking-wider uppercase">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  Delivered
                </div>
              </div>
              
              <div className="space-y-5 font-general text-xs">
                <div className="flex gap-4 items-center group/spec">
                  <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center text-[#C6A972] border border-black/5 group-hover/spec:bg-[#111111] group-hover/spec:text-white transition-all duration-300">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[8px] text-[#7A7A7A] uppercase font-bold tracking-wider">FORMAT</p>
                    <p className="text-[#111111] font-medium tracking-wide mt-0.5">{project.specs.format}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group/spec">
                  <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center text-[#C6A972] border border-black/5 group-hover/spec:bg-[#111111] group-hover/spec:text-white transition-all duration-300">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[8px] text-[#7A7A7A] uppercase font-bold tracking-wider">OPTICS</p>
                    <p className="text-[#111111] font-medium tracking-wide mt-0.5">{project.specs.lens}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center group/spec">
                  <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center text-[#C6A972] border border-black/5 group-hover/spec:bg-[#111111] group-hover/spec:text-white transition-all duration-300">
                    <Ratio className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[8px] text-[#7A7A7A] uppercase font-bold tracking-wider">ASPECT RATIO</p>
                    <p className="text-[#111111] font-medium tracking-wide mt-0.5">{project.specs.aspect}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Credits Panel */}
            <div className="space-y-6 pt-4">
              <h3 className="font-general text-[9px] tracking-[0.3em] font-bold text-[#7A7A7A] uppercase border-b border-[#D9D9D9]/80 pb-3">
                PRODUCTION CREDITS
              </h3>

              <div className="divide-y divide-[#D9D9D9]/50 font-general">
                <div className="flex justify-between py-3.5 text-xs">
                  <span className="text-[#7A7A7A] uppercase tracking-wider text-[9px]">Client</span>
                  <span className="text-[#111111] font-medium tracking-wide">{project.client}</span>
                </div>
                <div className="flex justify-between py-3.5 text-xs">
                  <span className="text-[#7A7A7A] uppercase tracking-wider text-[9px]">Location</span>
                  <span className="text-[#111111] font-medium tracking-wide">{project.location}</span>
                </div>
                {project.credits.map((cred) => (
                  <div key={cred.role} className="flex justify-between py-3.5 text-xs group/credit cursor-pointer">
                    <span className="text-[#7A7A7A] uppercase tracking-wider text-[9px] group-hover/credit:text-[#C6A972] transition-colors">{cred.role}</span>
                    <span className="text-[#111111] font-medium tracking-wide group-hover/credit:text-black transition-colors">{cred.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Immersive Full-width Next Project Teaser Footer Banner (Light Theme) */}
      <div className="w-full border-t border-[#D9D9D9]/50 mt-32 bg-[#F8F8F6]">
        <Link 
          to={`/project/${nextProject.id}`} 
          className="relative block w-full h-[35vh] md:h-[45vh] overflow-hidden group select-none cursor-pointer"
          data-cursor="hover"
        >
          {/* Background Image */}
          <img
            src={nextProject.imageUrl}
            alt={nextProject.title}
            className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-15 transition-all duration-[1200ms] ease-out group-hover:scale-103"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F8F6]/30 to-[#F8F8F6] pointer-events-none" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3.5">
            <span className="font-general text-[8px] md:text-[9px] tracking-[0.35em] font-bold text-[#C6A972] uppercase flex items-center gap-2">
              NEXT CASE STUDY <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
            <h3 className="font-clash text-3xl md:text-5xl lg:text-6xl font-semibold text-[#111111] tracking-tight uppercase transition-all duration-500 group-hover:tracking-wider leading-none">
              {nextProject.title}
            </h3>
            <p className="font-general text-[9px] tracking-[0.2em] text-[#7A7A7A] uppercase">
              {nextProject.category} // {nextProject.year}
            </p>
          </div>
        </Link>
      </div>

    </div>
  );
}
