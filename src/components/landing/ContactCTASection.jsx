import React from 'react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { contactData } from '../../data/mock';

const ContactCTASection = () => {
  return (
    <section id="contact" className="relative bg-black py-24 lg:py-32">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FFD1]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00FFD1]/3 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-[7.6923%] relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Content Card */}
          <div className="relative bg-[#121212] border border-white/10 p-8 md:p-12 lg:p-16 text-center">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-12 h-12">
              <div className="absolute top-0 left-0 w-full h-px bg-[#00FFD1]" />
              <div className="absolute top-0 left-0 h-full w-px bg-[#00FFD1]" />
            </div>
            <div className="absolute top-0 right-0 w-12 h-12">
              <div className="absolute top-0 right-0 w-full h-px bg-[#00FFD1]" />
              <div className="absolute top-0 right-0 h-full w-px bg-[#00FFD1]" />
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12">
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#00FFD1]" />
              <div className="absolute bottom-0 left-0 h-full w-px bg-[#00FFD1]" />
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12">
              <div className="absolute bottom-0 right-0 w-full h-px bg-[#00FFD1]" />
              <div className="absolute bottom-0 right-0 h-full w-px bg-[#00FFD1]" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/30 mb-8">
              <span className="w-2 h-2 bg-[#00FFD1] animate-pulse" />
              <span className="text-[#00FFD1] text-sm font-medium">READY TO START</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
              {contactData.title}
            </h2>

            <p className="text-white/60 text-lg md:text-xl mb-10 max-w-lg mx-auto">
              {contactData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={contactData.emailLink}
                className="group flex items-center justify-between gap-4 bg-[#00FFD1] text-black px-8 py-4 font-medium text-lg hover:bg-transparent hover:text-[#00FFD1] transition-all duration-400 border-2 border-[#00FFD1] min-w-[220px] hover:shadow-[0_0_30px_rgba(0,255,209,0.3)]"
              >
                <span className="flex items-center gap-3">
                  <Mail size={22} />
                  Email Me
                </span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={contactData.whatsappLink}
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
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
