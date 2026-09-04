import React from 'react';
import { Star, Sparkles, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA, SALON_INFO } from '../data/stylistsData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            Client Accolades
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
            Cherished by Discerning Patrons
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-white/50">
            <div className="flex items-center text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="font-semibold text-white text-base">4.9 / 5.0</span>
            <span className="text-white/20">•</span>
            <span>Based on {SALON_INFO.reviewsCount} Google & Salon Reviews in Dwarka</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-white/20" />
                </div>

                <p className="text-xs text-white/70 leading-relaxed italic mb-6 font-light">
                  “{rev.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-white flex items-center gap-1">
                      <span>{rev.author}</span>
                      <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                    </h4>
                    <p className="text-[10px] text-white/40">{rev.location}</p>
                  </div>
                  <span className="text-[10px] text-white/40">{rev.date}</span>
                </div>
                <span className="inline-block mt-2 px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#D4AF37] font-medium truncate max-w-full">
                  Ritual: {rev.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review Badge */}
        <div className="mt-12 text-center">
          <p className="text-xs text-white/40">
            Have you experienced THE LUXX SALON recently?{' '}
            <a 
              href={`https://maps.google.com/?q=${SALON_INFO.googleMapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#D4AF37] underline hover:text-white transition-colors"
            >
              Leave your feedback on Google
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
