import React from 'react';
import { Phone, MapPin, Clock, Mail, Heart, Sparkles, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/stylistsData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 text-white/50 text-xs pt-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-white">
                THE LUXX
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                SALON
              </span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed">
              Dwarka’s premier luxury atelier for haute couture hair styling, restorative scalp rituals, 
              medical skin therapies, and royal bridal makeovers.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
              >
                Book Appointment
              </button>
              <a
                href="https://www.instagram.com/theluxxsalon"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-insta-btn !py-2.5 !px-5 text-xs"
              >
                <i className="fab fa-instagram"></i> INSTAGRAM
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-normal text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/60 hover:text-[#D4AF37] transition-colors">Services & Pricing Menu</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-[#D4AF37] transition-colors">Haute Photo Gallery</a></li>
              <li><a href="#transformations" className="text-white/60 hover:text-[#D4AF37] transition-colors">Real Client Case Studies</a></li>
              <li><a href="#about" className="text-white/60 hover:text-[#D4AF37] transition-colors">The Atelier Ambience</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-[#D4AF37] transition-colors">Patron Testimonials</a></li>
              <li><a href="#location" className="text-white/60 hover:text-[#D4AF37] transition-colors">Location & Directions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-normal text-white uppercase tracking-widest">
              Contact & Reservations
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-white/40">Telephone Line:</span>
                  <a href={`tel:${SALON_INFO.phone}`} className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                    {SALON_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-white/40">Working Hours:</span>
                  <span className="text-white/70">{SALON_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-white/40">Inquiries:</span>
                  <span className="text-white/70">{SALON_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Exact Address */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-normal text-white uppercase tracking-widest">
              Dwarka Atelier Address
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {SALON_INFO.address}
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${SALON_INFO.googleMapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-white/40">
          <p>© {new Date().getFullYear()} THE LUXX SALON. All rights reserved. Sector 12B, Dwarka, New Delhi.</p>
          <div className="flex items-center gap-2">
            <span>Sterilized with medical autoclave</span>
            <span>•</span>
            <span>100% Genuine Certified Formulations</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
