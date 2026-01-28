import React, { Suspense, lazy } from 'react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { heroData } from '../../data/mock';

const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
            repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
          `,
          backgroundSize: '100% 100%'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-[7.6923%] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-24 pb-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl animate-fadeInLeft">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 bg-[#00FFD1] animate-pulse" />
              <span className="text-white/70 text-sm font-medium tracking-wide">AI-POWERED DEVELOPMENT</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-tight mb-6">
              {heroData.headline}
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-normal mb-10 leading-relaxed">
              {heroData.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={heroData.emailLink}
                className="group flex items-center justify-between gap-4 bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-transparent hover:text-[#00FFD1] transition-all duration-400 border-2 border-[#00FFD1] min-w-[220px]"
              >
                <span className="flex items-center gap-3">
                  <Mail size={22} />
                  Email Me
                </span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={heroData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 bg-white/10 text-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all duration-400 border-2 border-transparent hover:border-white min-w-[220px]"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle size={22} />
                  WhatsApp Me
                </span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right - Spline 3D */}
          <div className="flex-1 w-full lg:w-auto h-[400px] lg:h-[600px] relative overflow-visible">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[#00FFD1] border-t-transparent animate-spin" />
              </div>
            }>
              <Spline
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
