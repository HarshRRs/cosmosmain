import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import { footerData } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-[7.6923%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
                <span className="text-black font-bold text-xl">C</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">Cosmos</span>
            </div>
            <p className="text-white/60 text-lg mb-6 max-w-md">
              {footerData.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#services" className="text-white/60 hover:text-[#00FFD1] transition-colors">Services</a>
              <a href="#portfolio" className="text-white/60 hover:text-[#00FFD1] transition-colors">Portfolio</a>
              <a href="#process" className="text-white/60 hover:text-[#00FFD1] transition-colors">Process</a>
              <a href="#contact" className="text-white/60 hover:text-[#00FFD1] transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${footerData.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-[#00FFD1] transition-colors"
              >
                <Mail size={18} className="text-[#00FFD1]" />
                <span>{footerData.email}</span>
              </a>
              <a
                href={`tel:${footerData.phone}`}
                className="flex items-center gap-3 text-white/60 hover:text-[#00FFD1] transition-colors"
              >
                <Phone size={18} className="text-[#00FFD1]" />
                <span>{footerData.phone}</span>
              </a>
              <a
                href={`https://instagram.com/${footerData.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-[#00FFD1] transition-colors"
              >
                <Instagram size={18} className="text-[#00FFD1]" />
                <span>{footerData.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Cosmos. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm">Built with AI</span>
            <span className="w-2 h-2 bg-[#00FFD1] animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
