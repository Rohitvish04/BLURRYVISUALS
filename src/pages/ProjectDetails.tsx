import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/mockData';
import { ArrowLeft, Film, Cpu, Ratio } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="font-clash text-4xl font-semibold text-[#111111] mb-4">
          PROJECT NOT FOUND
        </h2>
        <p className="font-sans text-xs text-[#7A7A7A] mb-8 max-w-xs">
          The requested production record does not exist or has been archived.
        </p>
        <Link
          to="/"
          className="bg-[#111111] text-white font-general text-[10px] tracking-[0.2em] uppercase py-3 px-8 hover:bg-[#4B4B4B] transition-colors"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] min-h-screen pb-28">
      
      {/* Immersive Parallax Header Banner */}
      <div className="relative w-full h-[65vh] md:h-[75vh] bg-black overflow-hidden select-none">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/35" />

        {/* Back Link */}
        <div className="absolute top-28 left-6 md:left-12 z-10">
          <button
            onClick={() => navigate('/#work')}
            className="flex items-center gap-2.5 font-general text-[10px] tracking-[0.2em] font-semibold text-white/70 hover:text-white uppercase group transition-colors cursor-pointer"
            data-cursor="hover"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </div>

        {/* Title Content */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6">
          <div className="max-w-4xl space-y-4">
            <span className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#DCE8F5] uppercase">
              {project.category} // {project.year}
            </span>
            <h1 className="font-clash text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-none uppercase">
              {project.title}
            </h1>
            <p className="font-sans text-sm md:text-base text-white/80 font-light max-w-xl">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main details content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Block: Description & Production Frames */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Project Overview */}
            <div className="space-y-6">
              <h2 className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase border-b border-[#D9D9D9] pb-3">
                PROJECT OVERVIEW
              </h2>
              <p className="font-clash text-xl md:text-2xl text-[#111111] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Production Frames (Gallery) */}
            <div className="space-y-8">
              <h2 className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase border-b border-[#D9D9D9] pb-3">
                PRODUCTION FRAMES // BEHIND THE SCENES
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                {project.gallery.map((img, idx) => {
                  const offsetClass = idx === 1 ? 'md:translate-y-8' : idx === 2 ? 'md:col-span-2' : '';
                  return (
                    <motion.div
                      key={img}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative aspect-[16/10] bg-[#ECEAE6] overflow-hidden border border-[#D9D9D9]/30 group ${offsetClass}`}
                    >
                      <img
                        src={img}
                        alt={`Production Frame ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 bg-[#111111]/70 backdrop-blur-md px-3 py-1 text-[8px] font-general text-[#FFFFFF] tracking-widest uppercase">
                        FRAME {idx + 1}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Block: Project Metadata & Credits */}
          <div className="lg:col-span-4 space-y-12 lg:sticky lg:top-28">
            
            {/* Tech specs board */}
            <div className="bg-[#F5F5F3] border border-[#D9D9D9]/50 p-6 md:p-8 space-y-6">
              <h3 className="font-clash text-lg font-semibold text-[#111111] tracking-tight uppercase border-b border-[#D9D9D9] pb-3">
                CAMERA METADATA
              </h3>
              
              <div className="space-y-4 font-general text-xs">
                <div className="flex gap-4 items-center">
                  <Film className="w-4 h-4 text-[#7A7A7A]" />
                  <div>
                    <p className="text-[9px] text-[#7A7A7A] uppercase font-semibold">FORMAT</p>
                    <p className="text-[#111111] font-medium">{project.specs.format}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Cpu className="w-4 h-4 text-[#7A7A7A]" />
                  <div>
                    <p className="text-[9px] text-[#7A7A7A] uppercase font-semibold">OPTICS</p>
                    <p className="text-[#111111] font-medium">{project.specs.lens}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Ratio className="w-4 h-4 text-[#7A7A7A]" />
                  <div>
                    <p className="text-[9px] text-[#7A7A7A] uppercase font-semibold">ASPECT RATIO</p>
                    <p className="text-[#111111] font-medium">{project.specs.aspect}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Production credits board */}
            <div className="space-y-6">
              <h3 className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase border-b border-[#D9D9D9] pb-3">
                PRODUCTION CREDITS
              </h3>

              <div className="divide-y divide-[#D9D9D9]/50">
                <div className="flex justify-between py-3 text-xs">
                  <span className="font-general text-[#7A7A7A] uppercase">Client</span>
                  <span className="font-sans text-[#111111] font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between py-3 text-xs">
                  <span className="font-general text-[#7A7A7A] uppercase">Location</span>
                  <span className="font-sans text-[#111111] font-medium">{project.location}</span>
                </div>
                {project.credits.map((cred) => (
                  <div key={cred.role} className="flex justify-between py-3 text-xs">
                    <span className="font-general text-[#7A7A7A] uppercase">{cred.role}</span>
                    <span className="font-sans text-[#111111] font-medium">{cred.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
