import React from 'react';
import { LayoutDashboard, Bot, Globe, Zap } from 'lucide-react';
import { servicesData } from '../../data/mock';

const iconMap = {
  LayoutDashboard,
  Bot,
  Globe,
  Zap
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-black py-24 lg:py-32">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-[7.6923%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00FFD1] text-sm font-medium tracking-widest mb-4">SERVICES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            What Cosmos Builds
          </h2>
          <div className="w-20 h-1 bg-[#00FFD1] mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-[#121212] border border-white/10 p-8 lg:p-10 hover:border-[#00FFD1]/50 transition-all duration-400 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/5 transition-all duration-400 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#00FFD1]/10 flex items-center justify-center mb-6 group-hover:bg-[#00FFD1]/20 transition-colors">
                    <IconComponent size={28} className="text-[#00FFD1]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-base lg:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-8 bg-[#00FFD1]/30 group-hover:bg-[#00FFD1] transition-colors" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-[#00FFD1]/30 group-hover:bg-[#00FFD1] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
