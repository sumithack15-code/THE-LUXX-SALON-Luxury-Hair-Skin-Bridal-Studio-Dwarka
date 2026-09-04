import React from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Trash2, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { Appointment } from '../types';
import { SALON_INFO } from '../data/stylistsData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
  onOpenNewBooking: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
  onOpenNewBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0A0A0B] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-light text-white tracking-wide">
                Your Salon Appointments
              </h3>
              <p className="text-[11px] text-white/40">THE LUXX SALON • {appointments.length} Active Booking(s)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {appointments.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/40">
                <Calendar className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-serif text-xl text-white font-light">No Active Appointments</h4>
                <p className="text-xs text-white/50 max-w-xs mx-auto mt-1">
                  You haven't reserved any salon sessions yet. Treat yourself to our signature hair or skin rituals today.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenNewBooking();
                }}
                className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-white text-black text-xs font-bold tracking-widest uppercase shadow-md transition-colors"
              >
                Book Your First Ritual
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-[#D4AF37] px-2 py-0.5 rounded bg-white/5 border border-[#D4AF37]/30">
                          {apt.referenceNo}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-700/40">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Confirmed
                        </span>
                      </div>
                      <h4 className="font-serif text-lg text-white font-normal">
                        {apt.serviceName}
                      </h4>
                      <p className="text-xs text-white/50">
                        With specialist <strong className="text-white/80">{apt.stylistName}</strong>
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-base font-normal text-[#D4AF37]">
                        ₹{apt.servicePrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-white/70 py-2 border-y border-white/5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{apt.timeSlot}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-white/40 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span className="truncate">{SALON_INFO.shortAddress}</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2">
                    <a
                      href={`https://wa.me/918800131731?text=${encodeURIComponent(`Hello THE LUXX SALON, I am messaging regarding my booking Ref: ${apt.referenceNo} for ${apt.serviceName} on ${apt.date}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[11px] font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Desk</span>
                    </a>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${SALON_INFO.phone}`}
                        className="p-2 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        title="Call salon desk"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you wish to cancel this appointment reservation?')) {
                            onCancelAppointment(apt.id);
                          }
                        }}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                        title="Cancel reservation"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
          <a
            href={`https://maps.google.com/?q=${SALON_INFO.googleMapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
          >
            <span>Dwarka Sector 12B Navigation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => {
              onClose();
              onOpenNewBooking();
            }}
            className="px-4 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
          >
            + Book Another
          </button>
        </div>

      </div>
    </div>
  );
};
