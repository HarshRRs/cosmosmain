import React from 'react';
import { MessageSquare, Sparkles, TrendingUp, PenTool, GitBranch, Mic } from 'lucide-react';
import { aiFeaturesData } from '../../data/mock';

const iconMap = {
  MessageSquare,
  Sparkles,
  TrendingUp,
  PenTool,
  GitBranch,
  Mic
};

const AIFeaturesSection = () => {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FFD1]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-[7.6923%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00FFD1] text-sm font-medium tracking-widest mb-4">CAPABILITIES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            AI Features
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Advanced AI capabilities integrated into every project
          </p>
          <div className="w-20 h-1 bg-[#00FFD1] mx-auto mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeaturesData.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div
                key={feature.id}
                className="group relative bg-[#121212] border border-white/10 p-6 lg:p-8 hover:border-[#00FFD1]/50 transition-all duration-400 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#00FFD1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FFD1]/20 transition-colors">
                    <IconComponent size={24} className="text-[#00FFD1]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#00FFD1] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
