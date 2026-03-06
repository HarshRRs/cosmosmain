import React from 'react';
import { Lightbulb, Palette, Code, Rocket } from 'lucide-react';
import { howItWorksData } from '../../data/mock';

const iconMap = {
  Lightbulb,
  Palette,
  Code,
  Rocket
};

const HowItWorksSection = () => {
  return (
    <section id="process" className="relative bg-black py-24 lg:py-32">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-[7.6923%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00FFD1] text-sm font-medium tracking-widest mb-4">PROCESS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-[#00FFD1] mx-auto" />
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksData.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div
                  key={step.id}
                  className="group relative bg-[#121212] border border-white/10 p-6 lg:p-8 hover:border-[#00FFD1]/50 transition-all duration-400 hover:-translate-y-2"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-black border border-[#00FFD1] flex items-center justify-center">
                    <span className="text-[#00FFD1] text-sm font-bold">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[#00FFD1]/10 flex items-center justify-center mb-5 mt-2 group-hover:bg-[#00FFD1]/20 transition-colors">
                    <IconComponent size={28} className="text-[#00FFD1]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[#00FFD1]/0 group-hover:bg-[#00FFD1]/5 transition-all duration-400 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
