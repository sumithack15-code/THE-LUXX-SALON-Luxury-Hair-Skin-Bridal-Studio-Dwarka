import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, Menu, X, MapPin, Sparkles, BookmarkCheck } from 'lucide-react';
import { SALON_INFO } from '../data/stylistsData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMyBookings: () => void;
  bookingsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenMyBookings,
  bookingsCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services & Pricing', href: '#services' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Transformations', href: '#transformations' },
    { label: 'About Ambience', href: '#about' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#0A0A0B] border-b border-white/5 text-xs text-white/60 py-2.5 px-4 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-[#D4AF37] font-medium tracking-wider text-[11px] uppercase">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              THE LUXX SALON • DWARKA SECTOR 12B
            </span>
            <span className="hidden md:inline text-white/10">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-white/40 text-[11px]">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              Ground Floor, Plot 39, Parmanand Colony, Pocket 8
            </span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="flex items-center gap-1.5 text-white/50">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              Open Daily: 10:00 AM – 08:30 PM
            </span>
            <a 
              href={`tel:${SALON_INFO.phone}`} 
              className="flex items-center gap-1.5 text-[#D4AF37] font-semibold hover:text-white transition-colors tracking-widest"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{SALON_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-4' 
            : 'bg-[#0A0A0B]/80 backdrop-blur-sm border-b border-white/5 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo brand */}
          <a href="#" className="flex flex-col group">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.2em] text-[#D4AF37] group-hover:text-white transition-colors">
                THE LUXX
              </span>
              <span className="h-4 w-[1px] bg-white/10 hidden sm:inline-block"></span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-white/50 font-medium hidden sm:inline-block">
                SALON
              </span>
            </div>
            <span className="text-[9px] tracking-[0.4em] uppercase text-white/40 font-sans mt-0.5">
              HAIR • SKIN • BRIDAL • DWARKA
            </span>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#D4AF37] transition-colors relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Neon Instagram Flow Button */}
            <a
              id="neon-instagram-nav-btn"
              href="https://www.instagram.com/theluxxsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-insta-btn hidden xl:inline-flex !py-2 !px-3.5 !text-[11px]"
              title="THE LUXX Instagram"
            >
              <i className="fab fa-instagram"></i> INSTAGRAM
            </a>

            {/* My Bookings Pill */}
            <button
              id="my-bookings-btn"
              onClick={onOpenMyBookings}
              className="relative hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#D4AF37]/50 text-xs font-medium text-white/80 hover:text-[#D4AF37] transition-all"
              title="View your saved appointments"
            >
              <BookmarkCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wider text-[11px] uppercase">My Bookings</span>
              {bookingsCount > 0 && (
                <span className="w-4 h-4 flex items-center justify-center rounded-full bg-[#D4AF37] text-black text-[9px] font-bold">
                  {bookingsCount}
                </span>
              )}
            </button>

            {/* Direct Call Button */}
            <a
              id="call-direct-header-btn"
              href={`tel:${SALON_INFO.phone}`}
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 hover:border-[#D4AF37]/50 bg-white/[0.02] text-[#D4AF37] text-xs font-medium tracking-wider transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>08800131731</span>
            </a>

            {/* Primary Book CTA */}
            <button
              id="book-header-btn"
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0A0B] border-b border-white/10 px-6 pt-4 pb-6 space-y-4">
            <div className="flex flex-col space-y-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-widest text-white/80 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/5 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMyBookings();
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <BookmarkCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>My Appointments</span>
                </span>
                {bookingsCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#D4AF37] text-black text-xs font-bold">
                    {bookingsCount}
                  </span>
                )}
              </button>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call: 08800131731</span>
              </a>

              <a
                href="https://www.instagram.com/theluxxsalon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="neon-insta-btn justify-center text-xs !py-2.5"
              >
                <i className="fab fa-instagram"></i> INSTAGRAM
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#D4AF37] hover:bg-white text-black text-xs font-bold tracking-widest uppercase shadow-lg transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Instant Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
