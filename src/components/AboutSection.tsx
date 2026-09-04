import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Coffee, 
  Car, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { SALON_INFO } from '../data/stylistsData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0B] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              The Atelier Philosophy
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-6 leading-tight">
              An Oasis of Bespoke Indulgence in Dwarka Sector 12B
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
              Founded with the belief that hair and beauty are deeply intimate art forms, 
              <strong className="text-white font-medium"> THE LUXX SALON</strong> reimagines the traditional salon visit into an unhurried, 
              private sanctuary. Situated comfortably on the Ground Floor of Plot 39 in Parmanand Colony, 
              we combine the technical precision of European academies with genuine Indian hospitality.
            </p>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-8">
              Whether you are preparing for a fairytale wedding, rejuvenating stressed hair after seasons of city life, 
              or indulging in an afternoon of Russian nail artistry, our master artists curate rituals solely around 
              your individual facial symmetry, skin tone, and texture.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="font-serif text-2xl font-light text-[#D4AF37]">10+ Years</h4>
                <p className="text-[11px] text-white/40 mt-1">Lead Stylist Expertise & Academy Pedigree</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="font-serif text-2xl font-light text-[#D4AF37]">100% Authentic</h4>
                <p className="text-[11px] text-white/40 mt-1">Directly Sourced Salon-Grade Formulations</p>
              </div>
            </div>
          </div>

          {/* Luxury Atelier Imagery Collage */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                alt="THE LUXX SALON Ambience"
                className="w-full h-[420px] object-cover filter brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0A0B]/90 backdrop-blur-md border border-white/10">
                <p className="font-serif text-sm italic text-white/90">
                  “Beauty begins the moment you decide to be yourself, framed by craftsmanship that leaves no detail to chance.”
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-white/40">
                  <span className="text-[#D4AF37] font-medium">— Creative Director, THE LUXX</span>
                  <span>Dwarka, New Delhi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Distinction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-normal text-white mb-2">Master Artistry</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Every haircut, balayage, and makeup stroke is executed by verified senior stylists with international certifications.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-normal text-white mb-2">Hospital-Grade Hygiene</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Medical autoclave tool sterilization, single-use disposable capes, and sanitized brushes between every single guest.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-normal text-white mb-2">Complimentary Lounge</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Enjoy freshly brewed gourmet espresso, Moroccan mint tea, and artisanal snacks while relaxing in our private waiting suites.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-normal text-white mb-2">Valet & Ground Access</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Hassle-free ground-floor entrance with no stairs or tight elevators. Seamless valet parking right outside our Sector 12B gates.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
