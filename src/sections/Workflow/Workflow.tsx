import { motion } from 'framer-motion';
import { equipmentData } from '../../data/mockData';
import { Cpu, Film, Disc, Eye, Zap } from 'lucide-react';

const CATEGORY_ICONS: Record<string, any> = {
  'Camera Systems': Film,
  'Optics': Eye,
  'Aviation': Zap,
  'Color & Grading': Disc,
  'default': Cpu
};

export default function Workflow() {
  return (
    <section id="studio" className="relative w-full bg-[#F5F5F3] py-28 px-6 md:px-12 border-t border-[#D9D9D9]/50 overflow-hidden">
      {/* Absolute decorative gradient spot */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#DCE8F5]/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <p className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase">
              STUDIO CAPABILITIES & TECH
            </p>
            <h2 className="font-clash text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#111111] leading-none uppercase">
              HARDWARE & WORKFLOW
            </h2>
          </div>
          <p className="font-sans text-sm text-[#4B4B4B] max-w-sm font-light leading-relaxed">
            We invest in bleeding-edge optics and data capture workflows to guarantee elite fidelity from sensor to grading monitors.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentData.map((item, idx) => {
            const IconComponent = CATEGORY_ICONS[item.category] || CATEGORY_ICONS.default;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="glass-card p-8 border border-white/50 flex flex-col justify-between min-h-[280px] hover:border-[#111111]/20 hover:shadow-lg transition-all duration-500 ease-out"
                data-cursor="hover"
              >
                <div className="space-y-6">
                  {/* Card Top Info */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#D9D9D9]/30 flex items-center justify-center text-[#111111]">
                      <IconComponent className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <span className="font-general text-[8px] tracking-[0.2em] font-semibold text-[#7A7A7A] uppercase bg-[#ECEAE6] px-3 py-1 border border-[#D9D9D9]/50">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <p className="font-general text-[9px] tracking-widest text-[#7A7A7A] uppercase">
                      {item.category}
                    </p>
                    <h3 className="font-clash text-xl font-semibold text-[#111111] tracking-tight">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-[#4B4B4B] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Specs row */}
                <div className="mt-8 pt-4 border-t border-[#D9D9D9]/50 flex justify-between items-center text-[10px] font-general text-[#7A7A7A]">
                  <span className="tracking-widest uppercase">TECH SPECS //</span>
                  <span className="text-[#111111] font-medium tracking-wider">{item.spec}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Pipeline Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 bg-[#ECEAE6] border border-[#D9D9D9] p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <div className="space-y-2">
            <h4 className="font-clash text-lg md:text-xl font-medium tracking-tight text-[#111111]">
              INTEGRATED COLOR-MANAGED PIPELINE
            </h4>
            <p className="font-sans text-xs text-[#4B4B4B] font-light max-w-xl leading-relaxed">
              We coordinate ACES-based workflow models from camera sensor metadata capture to DaVinci Resolve color-grading monitors, guaranteeing that what is shot on set is accurately maintained all the way to final delivery.
            </p>
          </div>
          <div className="flex gap-4 font-general text-[10px] tracking-[0.2em] font-semibold text-[#111111] uppercase shrink-0">
            <div className="border border-[#D9D9D9] bg-white/40 px-5 py-3">ACES v1.3</div>
            <div className="border border-[#D9D9D9] bg-white/40 px-5 py-3">DOLBY VISION</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
