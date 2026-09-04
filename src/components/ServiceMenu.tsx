import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Clock, 
  Sparkles, 
  Crown, 
  CheckCircle2, 
  ArrowRight, 
  Scissors, 
  Smile, 
  HandMetal, 
  UserCheck, 
  Flower,
  Info,
  X
} from 'lucide-react';
import { SERVICES_DATA, SALON_CATEGORIES } from '../data/servicesData';
import { ServiceItem, ServiceCategory } from '../types';

interface ServiceMenuProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const ServiceMenu: React.FC<ServiceMenuProps> = ({ onSelectServiceForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [detailedService, setDetailedService] = useState<ServiceItem | null>(null);
  const [filterTag, setFilterTag] = useState<'all' | 'popular' | 'signature'>('all');

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((item) => {
      // Category match
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = 
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.includes.some(inc => inc.toLowerCase().includes(query));

      // Filter tag match
      const matchTag = 
        filterTag === 'all' || 
        (filterTag === 'popular' && item.popular) || 
        (filterTag === 'signature' && item.signature);

      return matchCategory && matchSearch && matchTag;
    });
  }, [selectedCategory, searchQuery, filterTag]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors': return <Scissors className="w-4 h-4" />;
      case 'Smile': return <Smile className="w-4 h-4" />;
      case 'Crown': return <Crown className="w-4 h-4" />;
      case 'HandMetal': return <HandMetal className="w-4 h-4" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4" />;
      case 'Flower': return <Flower className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            Curated Services
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
            Bespoke Services & Signature Rituals
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            Every ritual is conducted by certified master artists utilizing the world’s most prestigious formulations. 
            Transparent pricing, uncompromised sanitization, and bespoke consultations.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              id="search-services-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments, balayage, facials..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-[#E5E7EB] placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick Highlight Filters */}
          <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
            <button
              onClick={() => setFilterTag('all')}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all whitespace-nowrap ${
                filterTag === 'all'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-white/[0.02] text-white/40 hover:text-white border border-white/5'
              }`}
            >
              All Offerings ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setFilterTag('signature')}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filterTag === 'signature'
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/40'
                  : 'bg-white/[0.02] text-white/40 hover:text-white border border-white/5'
              }`}
            >
              <Crown className="w-3 h-3 text-[#D4AF37]" />
              <span>Signature Only</span>
            </button>
            <button
              onClick={() => setFilterTag('popular')}
              className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filterTag === 'popular'
                  ? 'bg-white/10 text-white border border-white/30'
                  : 'bg-white/[0.02] text-white/40 hover:text-white border border-white/5'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Client Favorites</span>
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {SALON_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id as ServiceCategory)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                    : 'bg-white/[0.02] hover:bg-white/[0.06] text-white/60 border border-white/5 hover:border-white/20'
                }`}
              >
                <span className={isActive ? 'text-black' : 'text-[#D4AF37]'}>
                  {getCategoryIcon(cat.icon)}
                </span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-8">
            <p className="text-white/40 text-sm mb-3">No services found matching your search or filters.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterTag('all');
              }}
              className="text-xs text-[#D4AF37] underline hover:text-white"
            >
              Clear filters and view all services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    {service.signature && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-semibold tracking-wider uppercase">
                        <Crown className="w-2.5 h-2.5" /> Signature
                      </span>
                    )}
                    {service.popular && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/15 text-white/80 text-[10px] font-semibold tracking-wider uppercase">
                        <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" /> Most Loved
                      </span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-white/40 font-medium">
                    <Clock className="w-3 h-3 text-white/30" />
                    {service.duration}
                  </span>
                </div>

                {/* Service Name & Description */}
                <div>
                  <h3 className="font-serif text-xl font-normal text-white group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed line-clamp-2 mb-4">
                    {service.description}
                  </p>

                  {/* Included highlights preview */}
                  <div className="space-y-1.5 mb-6">
                    {service.includes.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-white/60">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                    {service.includes.length > 2 && (
                      <button
                        onClick={() => setDetailedService(service)}
                        className="text-[11px] text-[#D4AF37] hover:underline flex items-center gap-1 pt-0.5"
                      >
                        <Info className="w-3 h-3" />
                        <span>+{service.includes.length - 2} more inclusions</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block">Investment</span>
                    <span className="font-serif text-2xl font-normal text-white">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    id={`book-service-${service.id}`}
                    onClick={() => onSelectServiceForBooking(service)}
                    className="px-4 py-2.5 rounded-lg bg-white/5 group-hover:bg-[#D4AF37] border border-white/10 group-hover:border-[#D4AF37] text-white group-hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Brand Philosophy Quote Banner */}
        <div className="mt-12 p-5 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl text-center">
          <p className="text-xs leading-relaxed italic text-white/80">
            'Our philosophy is simple: we don't just change your look, we elevate your identity.'
          </p>
        </div>

        {/* Menu Footer Assistance */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl text-white font-normal mb-1">
              Looking for a Customized Bridal or Family Package?
            </h4>
            <p className="text-xs text-white/50">
              We create bespoke multi-service itineraries and personalized bridal consultations. Speak with our lead director directly.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:08800131731"
              className="px-5 py-2.5 rounded-full border border-white/15 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Call 08800131731
            </a>
            <a
              href="https://wa.me/918800131731?text=Hello%20THE%20LUXX%20SALON%2C%20I%20would%20like%20a%20customized%20package%20consultation."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase transition-colors"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>

      </div>

      {/* Deep Inclusions Modal */}
      {detailedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0A0A0B] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setDetailedService(null)}
              className="absolute top-5 right-5 p-2 text-white/40 hover:text-white rounded-full bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">Treatment Protocol</span>
              <h3 className="font-serif text-2xl font-normal text-white mt-1">
                {detailedService.name}
              </h3>
              <p className="text-xs text-white/50 mt-2 leading-relaxed">
                {detailedService.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-6">
              <div className="flex justify-between items-center text-xs mb-3 text-white/70 font-medium pb-2 border-b border-white/5">
                <span>Duration: <strong className="text-white">{detailedService.duration}</strong></span>
                <span>Price: <strong className="text-[#D4AF37] text-base font-serif">₹{detailedService.price.toLocaleString('en-IN')}</strong></span>
              </div>
              
              <h5 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-2">
                What is Included in this Session:
              </h5>
              <div className="space-y-2">
                {detailedService.includes.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setDetailedService(null)}
                className="flex-1 py-3 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-wider text-white/70 hover:bg-white/5 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = detailedService;
                  setDetailedService(null);
                  onSelectServiceForBooking(s);
                }}
                className="flex-1 py-3 rounded-lg bg-[#D4AF37] hover:bg-white text-black text-xs font-bold tracking-[0.15em] uppercase shadow-lg transition-colors active:scale-95"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
