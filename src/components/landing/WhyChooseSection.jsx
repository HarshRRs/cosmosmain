import React from 'react';
import { Check } from 'lucide-react';
import { whyChooseData } from '../../data/mock';

const WhyChooseSection = () => {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-[7.6923%]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block text-[#00FFD1] text-sm font-medium tracking-widest mb-4">WHY COSMOS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Why Choose Cosmos
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              I specialize in building intelligent applications that not only look stunning but also automate and optimize your business operations.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-[#121212] border border-white/5 hover:border-[#00FFD1]/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-[#00FFD1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00FFD1]/20 transition-colors">
                    <Check size={18} className="text-[#00FFD1]" />
                  </div>
                  <span className="text-white/90 text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-[#121212] border border-white/10 p-8 lg:p-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#00FFD1]/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-[#00FFD1] text-4xl font-bold">AI</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Intelligent Solutions</h3>
                  <p className="text-white/60 text-base">Every project is infused with AI capabilities to give you a competitive edge.</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-px bg-[#00FFD1]" />
                  <div className="absolute top-0 left-0 h-full w-px bg-[#00FFD1]" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-full h-px bg-[#00FFD1]" />
                  <div className="absolute bottom-0 right-0 h-full w-px bg-[#00FFD1]" />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -inset-4 bg-[#00FFD1]/5 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
