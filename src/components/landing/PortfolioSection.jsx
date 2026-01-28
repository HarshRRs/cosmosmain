import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/mock';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative bg-black py-24 lg:py-32">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-[7.6923%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00FFD1] text-sm font-medium tracking-widest mb-4">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            See Cosmos in Action
          </h2>
          <div className="w-20 h-1 bg-[#00FFD1] mx-auto" />
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-[#121212] border border-white/10 overflow-hidden hover:border-[#00FFD1]/50 transition-all duration-500 ${
                index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
              }`}
            >
              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[#00FFD1]/10 flex items-center justify-center">
                    <Sparkles size={24} className="text-[#00FFD1]" />
                  </div>

                  {/* Hover Arrow */}
                  <div className="w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={24} className="text-[#00FFD1]" />
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="w-2 h-2 bg-[#00FFD1] animate-pulse" />
                  <span className="text-[#00FFD1] text-sm font-medium">{project.tag}</span>
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00FFD1]/0 group-hover:via-[#00FFD1] to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
