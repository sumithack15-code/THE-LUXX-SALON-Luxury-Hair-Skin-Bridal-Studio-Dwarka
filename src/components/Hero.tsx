import React from 'react';
import { Calendar, Phone, Star, MapPin, Sparkles, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { SALON_INFO } from '../data/stylistsData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20 bg-[#0A0A0B]">
      {/* Background Image with Dark Vignette and Minimal Sleek Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
          alt="THE LUXX SALON Luxury Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.22] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/80 to-[#0A0A0B]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0A0B]/60 to-[#0A0A0B]" />
        {/* Subtle decorative gold ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        
        {/* Prestige Tag */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 backdrop-blur-md mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            The Dwarka Flagship • Haute Hair & Beauty
          </span>
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]/60"></div>
          <span className="text-[11px] text-white/70 font-medium flex items-center gap-1">
            <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" /> 4.9 Rating
          </span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white max-w-5xl leading-[1.05] mb-8">
          The Art of Haute Hair, <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#D4AF37]">Flawless Skin</span> & Couture Elegance.
        </h1>

        {/* Descriptive subhead */}
        <p className="max-w-2xl text-sm sm:text-base text-white/60 font-normal leading-relaxed mb-10">
          Welcome to <strong className="text-white font-medium">THE LUXX SALON</strong>. 
          Indulge in bespoke precision tailoring, restorative French balayage, medical-grade rejuvenation therapies, 
          and royal bridal rituals at our private sanctuary in Sector 12B, Dwarka.
        </p>

        {/* Primary Action Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            id="hero-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-white text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.25)] active:scale-95 flex items-center justify-center gap-3"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Reserve Your Session</span>
          </button>

          <a
            id="hero-services-btn"
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-[#D4AF37]/60 bg-white/[0.02] hover:bg-white/[0.06] text-white/80 hover:text-[#D4AF37] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <span>Explore Curated Menu</span>
          </a>

          <a
            id="hero-instagram-btn"
            href="https://www.instagram.com/theluxxsalon"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-insta-btn w-full sm:w-auto text-xs"
          >
            <i className="fab fa-instagram text-sm"></i> INSTAGRAM
          </a>
        </div>

        {/* Direct Phone & WhatsApp Callout Banner */}
        <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md p-5 sm:p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold">Concierge & WhatsApp Line</p>
                <a 
                  href={`tel:${SALON_INFO.phone}`}
                  className="font-serif text-2xl sm:text-3xl font-normal text-white hover:text-[#D4AF37] transition-colors tracking-wide"
                >
                  {SALON_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="flex-1 md:flex-none px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Desk</span>
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.internationalPhone}?text=${encodeURIComponent('Hello THE LUXX SALON, I would like to inquire about booking an appointment at your Sector 12B Dwarka salon.')}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 md:flex-none px-5 py-2.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Value pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mt-14 pt-10 border-t border-white/5">
          <div className="flex flex-col items-center text-center p-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2.5" />
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Authentic Formulations</h4>
            <p className="text-[11px] text-white/40 mt-1">Kerastase, Olaplex & Casmara</p>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <Sparkles className="w-5 h-5 text-[#D4AF37] mb-2.5" />
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Master Artistry</h4>
            <p className="text-[11px] text-white/40 mt-1">European Academy Alumni</p>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <Clock className="w-5 h-5 text-[#D4AF37] mb-2.5" />
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Dedicated Suites</h4>
            <p className="text-[11px] text-white/40 mt-1">Zero wait time & valet parking</p>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <MapPin className="w-5 h-5 text-[#D4AF37] mb-2.5" />
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">Dwarka Sector 12B</h4>
            <p className="text-[11px] text-white/40 mt-1">Ground Floor, Plot 39, Pocket 8</p>
          </div>
        </div>

      </div>
    </section>
  );
};
