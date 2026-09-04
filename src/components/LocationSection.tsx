import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Copy, 
  Check, 
  MessageSquare, 
  ExternalLink,
  Car,
  Train
} from 'lucide-react';
import { SALON_INFO } from '../data/stylistsData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scheduleHours = [
    { day: 'Monday', hours: '10:00 AM – 08:30 PM', open: true },
    { day: 'Tuesday', hours: '10:00 AM – 08:30 PM', open: true },
    { day: 'Wednesday', hours: '10:00 AM – 08:30 PM', open: true },
    { day: 'Thursday', hours: '10:00 AM – 08:30 PM', open: true },
    { day: 'Friday', hours: '10:00 AM – 08:30 PM', open: true },
    { day: 'Saturday', hours: '10:00 AM – 08:30 PM', open: true },
    { day: 'Sunday', hours: '10:00 AM – 08:30 PM', open: true },
  ];

  return (
    <section id="location" className="py-24 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
            <MapPin className="w-3 h-3 text-[#D4AF37]" />
            Visit Our Atelier
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
            Prime Dwarka Location & Hours
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            Conveniently situated on the ground floor with private parking and effortless accessibility across Southwest Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Phone, Action Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/10 shadow-xl relative">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-5">
                <MapPin className="w-5 h-5" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-1">
                Official Salon Address
              </span>
              <h3 className="font-serif text-2xl font-light text-white mb-3">
                THE LUXX SALON
              </h3>
              
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 text-xs text-white/70 leading-relaxed font-sans mb-4">
                {SALON_INFO.address}
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={handleCopyAddress}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                </button>

                <a
                  href={`https://maps.google.com/?q=${SALON_INFO.googleMapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Direct Phone & Contact Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.02] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 block">Appointments Desk</span>
                    <a 
                      href={`tel:${SALON_INFO.phone}`}
                      className="font-serif text-2xl font-light text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {SALON_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="py-2.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Direct Call</span>
                </a>
                <a
                  href={`https://wa.me/${SALON_INFO.internationalPhone}?text=${encodeURIComponent('Hi THE LUXX SALON, I am reaching out to book an appointment at your Sector 12B Dwarka studio.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Metro & Transit Proximity */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/50 space-y-2.5">
              <div className="flex items-center gap-2 text-white/70 font-medium">
                <Train className="w-4 h-4 text-[#D4AF37]" />
                <span>Metro Transit: <strong className="text-white">Dwarka Sector 12 Metro Station (Blue Line)</strong></span>
              </div>
              <div className="flex items-center gap-2 text-white/70 font-medium">
                <Car className="w-4 h-4 text-[#D4AF37]" />
                <span>Arrival: Dedicated ground floor driveway with valet staff on-site</span>
              </div>
            </div>

          </div>

          {/* Right Column: Weekly Schedule & Map Preview */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Opening Hours Schedule */}
            <div className="p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/10 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                  <h3 className="font-serif text-xl font-light text-white">Visiting & Operating Hours</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                  Open All 7 Days
                </span>
              </div>

              <div className="divide-y divide-white/5">
                {scheduleHours.map((item) => (
                  <div key={item.day} className="py-2.5 flex items-center justify-between text-xs">
                    <span className="text-white/70 font-medium">{item.day}</span>
                    <span className="font-mono text-white/90">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Google Map Frame */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] h-72 sm:h-80 shadow-2xl flex flex-col justify-end">
              {/* Google Maps iframe centered on Dwarka Sector 12 */}
              <iframe
                title="THE LUXX SALON Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2751433989337!2d77.0375494!3d28.591522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b32d08a594d%3A0x7d6f5193988b488a!2sSector%2012%20Dwarka%2C%20Dwarka%2C%20Delhi%2C%20110078!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter invert-[90%] hue-rotate-180 contrast-[1.1] opacity-75"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>

              {/* Floating Address Overlay Card */}
              <div className="relative z-10 m-4 p-4 rounded-xl bg-[#0A0A0B]/95 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold text-xs shrink-0">
                    LUXX
                  </div>
                  <div className="text-left">
                    <h5 className="text-xs font-semibold text-white">THE LUXX SALON • Dwarka 12B</h5>
                    <p className="text-[11px] text-white/50">Ground Floor, Plot 39, Parmanand Colony</p>
                  </div>
                </div>
                
                <a
                  href={`https://maps.google.com/?q=${SALON_INFO.googleMapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md shrink-0 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Start GPS Navigation</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
