import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  MapPin, 
  MessageSquare, 
  CalendarPlus,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, SALON_CATEGORIES } from '../data/servicesData';
import { STYLISTS_DATA, SALON_INFO } from '../data/stylistsData';
import { ServiceItem, Stylist, Appointment } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
  onBookingCreated: (appointment: Appointment) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  onBookingCreated,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist>(STYLISTS_DATA[0]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  
  // Guest details form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  // Created appointment record
  const [confirmedBooking, setConfirmedBooking] = useState<Appointment | null>(null);

  // Initialize service when opened with preselection
  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
      setStep(2); // Jump directly to Stylist / Date selection
    } else {
      setSelectedService(SERVICES_DATA[0]);
    }
  }, [preSelectedService, isOpen]);

  // Generate the next 10 dates for appointment selection
  const availableDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 10; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      dates.push({
        fullDateString: d.toISOString().split('T')[0],
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: d.getDate(),
        monthName: d.toLocaleDateString('en-US', { month: 'short' }),
        isToday: i === 0,
      });
    }
    return dates;
  }, []);

  // Set default date when dates are generated
  useEffect(() => {
    if (availableDates.length > 0 && !selectedDate) {
      setSelectedDate(availableDates[0].fullDateString);
    }
  }, [availableDates, selectedDate]);

  const timeSlots = {
    morning: ['10:00 AM', '11:00 AM', '11:45 AM', '12:30 PM'],
    afternoon: ['01:30 PM', '02:30 PM', '03:15 PM', '04:00 PM', '04:45 PM'],
    evening: ['05:30 PM', '06:15 PM', '07:00 PM', '07:45 PM'],
  };

  // Set default time slot
  useEffect(() => {
    if (!selectedTimeSlot) {
      setSelectedTimeSlot('11:00 AM');
    }
  }, [selectedTimeSlot]);

  if (!isOpen) return null;

  const validateStep4 = () => {
    const errs: { name?: string; phone?: string; email?: string } = {};
    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!phone.trim()) {
      errs.phone = 'Phone number is required for appointment confirmation';
    } else if (phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirmBooking = () => {
    if (!validateStep4()) return;
    if (!selectedService) return;

    const referenceNo = `LUXX-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment: Appointment = {
      id: `apt-${Date.now()}`,
      referenceNo,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      stylistId: selectedStylist.id,
      stylistName: selectedStylist.name,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      notes,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    // Save to local storage
    try {
      const existing = localStorage.getItem('the_luxx_appointments');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newAppointment);
      localStorage.setItem('the_luxx_appointments', JSON.stringify(list));
    } catch (e) {
      console.error(e);
    }

    setConfirmedBooking(newAppointment);
    onBookingCreated(newAppointment);
    setStep(5);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setConfirmedBooking(null);
    onClose();
  };

  // Google Calendar URL generator
  const getGoogleCalendarUrl = (apt: Appointment) => {
    const title = encodeURIComponent(`THE LUXX SALON: ${apt.serviceName}`);
    const details = encodeURIComponent(
      `Appointment at THE LUXX SALON, Dwarka Sector 12B\nService: ${apt.serviceName}\nStylist: ${apt.stylistName}\nBooking Ref: ${apt.referenceNo}\nAddress: Ground Floor, Plot 39, Parmanand Colony, Pocket 8, Sector 12B, Dwarka, New Delhi\nPhone: 08800131731`
    );
    const location = encodeURIComponent(SALON_INFO.address);
    // Approximate 1 hour block for calendar
    const dateFormatted = apt.date.replace(/-/g, '');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  // WhatsApp confirmation text
  const getWhatsAppBookingUrl = (apt: Appointment) => {
    const text = encodeURIComponent(
      `*New Appointment Confirmation - THE LUXX SALON*\n\n` +
      `Reference: *${apt.referenceNo}*\n` +
      `Client: *${apt.customerName}* (${apt.customerPhone})\n` +
      `Service: *${apt.serviceName}* (₹${apt.servicePrice.toLocaleString('en-IN')})\n` +
      `Specialist: *${apt.stylistName}*\n` +
      `Date & Time: *${apt.date} at ${apt.timeSlot}*\n` +
      `Location: Ground Floor, Plot 39, Sector 12B Dwarka\n` +
      (apt.notes ? `Special Notes: ${apt.notes}\n` : '') +
      `\nPlease keep my VIP suite reserved. Thank you!`
    );
    return `https://wa.me/918800131731?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0A0A0B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-light text-white tracking-wide">
                Bespoke Atelier Reservation
              </h3>
              <p className="text-[11px] text-white/40">THE LUXX SALON • Sector 12B Dwarka • 08800131731</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-3 bg-white/[0.01] border-b border-white/5 flex items-center justify-between text-xs">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Stylist' },
              { num: 3, label: 'Date & Time' },
              { num: 4, label: 'Guest Details' },
            ].map((s, idx) => (
              <div key={s.num} className="flex items-center gap-2">
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${
                    step === s.num 
                      ? 'bg-[#D4AF37] text-black ring-2 ring-[#D4AF37]/30' 
                      : step > s.num 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                        : 'bg-white/5 text-white/40'
                  }`}
                >
                  {step > s.num ? <Check className="w-3 h-3" /> : s.num}
                </div>
                <span className={`hidden sm:inline font-medium ${step === s.num ? 'text-white' : 'text-white/40'}`}>
                  {s.label}
                </span>
                {idx < 3 && <span className="text-white/20 mx-1">›</span>}
              </div>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 max-h-[72vh] overflow-y-auto">
          
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Select Desired Service Ritual
                </h4>
                <span className="text-xs text-white/40">{SERVICES_DATA.length} Available</span>
              </div>

              <div className="space-y-2.5 max-h-[48vh] overflow-y-auto pr-1">
                {SERVICES_DATA.map((srv) => {
                  const isSelected = selectedService?.id === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-4 rounded-xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'bg-[#D4AF37]/10 border-[#D4AF37] shadow-md'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h5 className="text-sm font-medium text-white">{srv.name}</h5>
                            {srv.signature && (
                              <span className="px-2 py-0.5 rounded bg-[#D4AF37]/15 text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase">
                                Signature
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-white/50 mt-1 line-clamp-1">{srv.description}</p>
                          <span className="inline-flex items-center gap-1 text-[11px] text-white/40 mt-2">
                            <Clock className="w-3 h-3 text-[#D4AF37]" /> {srv.duration}
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-serif text-base font-normal text-[#D4AF37]">
                            ₹{srv.price.toLocaleString('en-IN')}
                          </span>
                          <div className={`mt-2 w-5 h-5 rounded-full flex items-center justify-center ml-auto border ${
                            isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-white/20'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-end">
                <button
                  disabled={!selectedService}
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center gap-2 disabled:opacity-50 transition-colors"
                >
                  <span>Continue to Specialist</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Select Specialist */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Select Preferred Artist or Director
                </h4>
                <span className="text-xs text-white/40">Selected: {selectedService?.name}</span>
              </div>

              <div className="space-y-2.5 max-h-[48vh] overflow-y-auto pr-1">
                {STYLISTS_DATA.map((stylist) => {
                  const isSelected = selectedStylist.id === stylist.id;
                  return (
                    <div
                      key={stylist.id}
                      onClick={() => setSelectedStylist(stylist)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-[#D4AF37]/10 border-[#D4AF37] shadow-md'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                      }`}
                    >
                      <img
                        src={stylist.avatar}
                        alt={stylist.name}
                        className="w-12 h-12 rounded-full object-cover border border-white/10 shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-medium text-white">{stylist.name}</h5>
                          <span className="text-[10px] text-[#D4AF37] font-semibold">★ {stylist.rating}</span>
                        </div>
                        <p className="text-xs text-[#D4AF37] font-medium">{stylist.role}</p>
                        <p className="text-[11px] text-white/40 line-clamp-1">{stylist.specialty}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'border-white/20'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-white/70 hover:bg-white/5 flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to Service</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center gap-2 transition-colors"
                >
                  <span>Select Date & Time</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Select Date & Time */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
                  1. Select Appointment Date
                </h4>
                {/* Horizontal Date Picker */}
                <div className="flex gap-2.5 overflow-x-auto pb-2 no-scrollbar">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.fullDateString;
                    return (
                      <button
                        key={item.fullDateString}
                        type="button"
                        onClick={() => setSelectedDate(item.fullDateString)}
                        className={`flex flex-col items-center justify-center min-w-[72px] py-3 px-2 rounded-xl border transition-all ${
                          isSelected
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold shadow-md scale-105'
                            : 'bg-white/[0.02] border-white/10 text-white/70 hover:border-white/30'
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider">{item.dayName}</span>
                        <span className="font-serif text-xl my-0.5">{item.dayNumber}</span>
                        <span className="text-[10px] opacity-80">{item.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2.5">
                  2. Select Preferred Time Window
                </h4>
                
                {/* Morning Slots */}
                <div className="mb-3">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1.5 font-medium">
                    Morning (10:00 AM – 01:00 PM)
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.morning.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-1 rounded-lg text-xs font-medium border transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] font-bold'
                            : 'bg-white/[0.02] border-white/5 text-white/70 hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Afternoon Slots */}
                <div className="mb-3">
                  <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1.5 font-medium">
                    Afternoon (01:00 PM – 05:00 PM)
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.afternoon.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-1 rounded-lg text-xs font-medium border transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] font-bold'
                            : 'bg-white/[0.02] border-white/5 text-white/70 hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Evening Slots */}
                <div>
                  <span className="text-[11px] text-white/40 uppercase tracking-wider block mb-1.5 font-medium">
                    Evening (05:00 PM – 08:30 PM)
                  </span>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.evening.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-1 rounded-lg text-xs font-medium border transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] font-bold'
                            : 'bg-white/[0.02] border-white/5 text-white/70 hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="w-4 h-4 text-[#D4AF37]" />
                  <span>{selectedDate}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>{selectedTimeSlot}</span>
                </span>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-white/70 hover:bg-white/5 flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  disabled={!selectedDate || !selectedTimeSlot}
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center gap-2 disabled:opacity-50 transition-colors"
                >
                  <span>Enter Guest Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Guest Details & Review */}
          {step === 4 && (
            <div className="space-y-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                Guest Information & Booking Review
              </h4>

              {/* Booking Summary Box */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-white/40">Treatment:</span>
                  <strong className="text-white font-medium">{selectedService?.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Specialist:</span>
                  <span className="text-white/80">{selectedStylist.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">Date & Slot:</span>
                  <span className="text-[#D4AF37] font-semibold">{selectedDate} at {selectedTimeSlot}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/5 text-sm">
                  <span className="text-white/70 font-medium">Estimated Investment:</span>
                  <span className="font-serif text-lg font-light text-[#D4AF37]">
                    ₹{selectedService?.price.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    Your Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Priyanshi Saxena"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    Mobile Number (for SMS & WhatsApp Confirmation) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="e.g. 9811234567"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. priyanshi@example.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">
                    Special Inquiries, Allergies or Bridal Requests
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Sensitive scalp, requested beverage, bridal party companion"
                    className="w-full p-3 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-white/40 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Venue: Ground Floor, Plot 39, Parmanand Colony, Pocket 8, Sector 12B, Dwarka. 
                  No advance payment needed online. Pay at reception after complete satisfaction.
                </span>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-white/70 hover:bg-white/5 flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  id="submit-confirm-booking-btn"
                  onClick={handleConfirmBooking}
                  className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-white text-black font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2 active:scale-95 transition-colors"
                >
                  <span>Confirm Reservation</span>
                  <CheckCircle2 className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Instant Confirmation Screen */}
          {step === 5 && confirmedBooking && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-white mt-1">
                  We Await Your Presence
                </h3>
                <p className="text-xs text-white/50 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{confirmedBooking.customerName}</strong>. 
                  Your bespoke appointment has been secured at THE LUXX SALON.
                </p>
              </div>

              {/* Reference Card */}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 text-left max-w-md mx-auto space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-xs text-white/40">Booking Reference:</span>
                  <span className="font-mono text-sm font-bold text-[#D4AF37] px-2.5 py-1 rounded bg-white/5 border border-[#D4AF37]/30">
                    {confirmedBooking.referenceNo}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-white/70">
                  <div className="flex justify-between">
                    <span className="text-white/40">Service:</span>
                    <strong className="text-white">{confirmedBooking.serviceName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Specialist:</span>
                    <span>{confirmedBooking.stylistName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Appointment Time:</span>
                    <span className="text-[#D4AF37] font-medium">{confirmedBooking.date} • {confirmedBooking.timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Total Investment:</span>
                    <strong className="text-white">₹{confirmedBooking.servicePrice.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-white/40 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Ground Floor, Plot 39, Parmanand Colony, Sector 12B Dwarka</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppBookingUrl(confirmedBooking)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Send to WhatsApp Desk</span>
                </a>

                <a
                  href={getGoogleCalendarUrl(confirmedBooking)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <CalendarPlus className="w-4 h-4 text-[#D4AF37]" />
                  <span>Add to Calendar</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="text-xs text-[#D4AF37] hover:underline uppercase tracking-wider font-semibold"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
