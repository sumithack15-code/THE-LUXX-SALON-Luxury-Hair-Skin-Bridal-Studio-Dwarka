import React from 'react';
import { Phone, Calendar, MessageSquare } from 'lucide-react';
import { SALON_INFO } from '../data/stylistsData';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0A0A0B]/95 backdrop-blur-md border-t border-white/10 md:hidden shadow-[0_-8px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          id="mobile-float-call-btn"
          href={`tel:${SALON_INFO.phone}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold flex flex-col items-center justify-center gap-0.5"
          aria-label="Call THE LUXX SALON"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[10px] text-white/70">Call Desk</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          id="mobile-float-whatsapp-btn"
          href={`https://wa.me/${SALON_INFO.internationalPhone}?text=${encodeURIComponent('Hello THE LUXX SALON, I would like to book an appointment.')}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex flex-col items-center justify-center gap-0.5"
          aria-label="WhatsApp THE LUXX SALON"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] text-[#25D366]">WhatsApp</span>
        </a>

        {/* Primary Booking Button */}
        <button
          id="mobile-float-book-btn"
          onClick={onOpenBooking}
          className="flex-[2] py-2.5 px-3 rounded-xl bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-colors"
          aria-label="Book Appointment Online"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
};
