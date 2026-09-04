import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceMenu } from './components/ServiceMenu';
import { Gallery } from './components/Gallery';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActionBar } from './components/FloatingActionBar';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { ServiceItem, Appointment } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Load persisted appointments from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('the_luxx_appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load appointments from localStorage', e);
    }
  }, []);

  const handleOpenBooking = (service?: ServiceItem) => {
    setSelectedServiceForBooking(service || null);
    setIsBookingOpen(true);
  };

  const handleBookingCreated = (newAppointment: Appointment) => {
    setAppointments((prev) => [newAppointment, ...prev]);
  };

  const handleCancelAppointment = (id: string) => {
    const updated = appointments.filter((item) => item.id !== id);
    setAppointments(updated);
    try {
      localStorage.setItem('the_luxx_appointments', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save updated appointments', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E5E7EB] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        bookingsCount={appointments.length}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Editorial Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Curated Service Menu & Pricing */}
        <ServiceMenu onSelectServiceForBooking={(service) => handleOpenBooking(service)} />

        {/* Haute Visual Gallery & Transformations */}
        <Gallery onOpenBooking={() => handleOpenBooking()} />

        {/* The Atelier Ambience & Hygiene Standards */}
        <AboutSection />

        {/* Verified Patron Accolades */}
        <ReviewsSection />

        {/* Prime Dwarka Location, Visiting Hours & Maps */}
        <LocationSection />
      </main>

      {/* Global Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Sticky Mobile Quick Action Bar (Call, WhatsApp, Book) */}
      <FloatingActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedServiceForBooking(null);
        }}
        preSelectedService={selectedServiceForBooking}
        onBookingCreated={handleBookingCreated}
      />

      {/* My Appointments Management Modal */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
        onOpenNewBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
