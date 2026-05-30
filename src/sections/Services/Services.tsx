import { motion } from 'framer-motion';
import { servicesData } from '../../data/mockData';

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#FFFFFF] py-28 px-6 md:px-12 border-t border-[#D9D9D9]/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <p className="font-general text-[10px] tracking-[0.25em] font-semibold text-[#7A7A7A] uppercase">
              OUR CAPABILITIES
            </p>
            <h2 className="font-clash text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-[#111111] leading-none uppercase">
              STUDIO SERVICES
            </h2>
          </div>
          <p className="font-sans text-sm text-[#4B4B4B] max-w-md font-light leading-relaxed">
            We offer end-to-end production capabilities, creating beautiful visual stories designed to engage clients and drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between p-8 bg-[#F5F5F3] hover:bg-[#ECEAE6] border border-[#D9D9D9]/50 min-h-[340px] transition-all duration-500 ease-out rounded-none"
              data-cursor="hover"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs text-[#7A7A7A] tracking-widest font-light">
                    {service.number}
                  </span>
                  {/* Subtle decorative dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/10 group-hover:bg-[#111111] transition-colors duration-500" />
                </div>
                <h3 className="font-clash text-xl md:text-2xl font-semibold text-[#111111] tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="font-sans text-xs text-[#4B4B4B] leading-relaxed font-light opacity-90 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Capabilities sublist */}
              <div className="mt-8 pt-6 border-t border-[#D9D9D9] group-hover:border-[#111111]/20 transition-colors duration-500">
                <ul className="space-y-1.5">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="font-general text-[9px] tracking-wider text-[#7A7A7A] group-hover:text-[#4B4B4B] uppercase flex items-center gap-1.5 transition-colors duration-500"
                    >
                      <span className="w-1 h-1 bg-[#C7C4BE] group-hover:bg-[#111111] rounded-full transition-colors" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
