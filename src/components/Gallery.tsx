import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Scissors, 
  Layers 
} from 'lucide-react';
import { GALLERY_ITEMS, TRANSFORMATION_SHOWCASES } from '../data/galleryData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenBooking: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'interior' | 'hair' | 'bridal' | 'nails' | 'skin'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeTransformationTab, setActiveTransformationTab] = useState<'after' | 'before'>('after');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const categories = [
    { id: 'all', label: 'Curated Showcase' },
    { id: 'interior', label: 'Salon Ambience' },
    { id: 'hair', label: 'Hair Artistry' },
    { id: 'bridal', label: 'Bridal Couture' },
    { id: 'nails', label: 'Nails & Hand Spa' },
    { id: 'skin', label: 'Skin Aesthetics' },
  ] as const;

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0B] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-[0.3em] mb-4">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            Visual Portfolio
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight mb-4">
            The Haute Couture Visual Gallery
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed">
            Step into our Ground Floor haven in Sector 12B Dwarka. Explore our bespoke architecture, 
            relaxing scalp suites, and transformations designed by our master stylists.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                    : 'bg-white/[0.02] hover:bg-white/[0.06] text-white/50 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-xl text-white font-normal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold tracking-wider">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View in high resolution</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After Interactive Transformations Section */}
        <div id="transformations" className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-2">
                <Scissors className="w-3 h-3 text-[#D4AF37]" /> Real Dwarka Client Transformations
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-white font-light">
                Hair Restoration & Balayage Case Studies
              </h3>
            </div>
            
            {/* Toggle After / Before View */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10">
              <button
                onClick={() => setActiveTransformationTab('after')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  activeTransformationTab === 'after'
                    ? 'bg-[#D4AF37] text-black shadow-sm'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Finished Look (After)
              </button>
              <button
                onClick={() => setActiveTransformationTab('before')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  activeTransformationTab === 'before'
                    ? 'bg-white/15 text-white shadow-sm'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Initial Hair State (Before)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSFORMATION_SHOWCASES.map((study) => (
              <div 
                key={study.id}
                className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <img
                    src={activeTransformationTab === 'after' ? study.afterImage : study.beforeImage}
                    alt={study.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-black/85 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30">
                    {activeTransformationTab === 'after' ? '✨ Final Result' : '⏳ Initial Baseline'}
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-md text-[10px] font-medium bg-black/75 backdrop-blur-md text-white/70">
                    {study.duration}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
                    {study.category}
                  </span>
                  <h4 className="font-serif text-xl font-normal text-white mt-1 mb-2">
                    {study.title}
                  </h4>
                  <p className="text-xs text-white/50 mb-4">
                    {activeTransformationTab === 'after' ? study.afterDesc : study.beforeDesc}
                  </p>
                  
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-white/40">Stylist: <strong className="text-white/80">{study.stylist}</strong></span>
                    <button
                      onClick={onOpenBooking}
                      className="text-[#D4AF37] hover:underline font-bold uppercase tracking-wider text-[11px] flex items-center gap-1"
                    >
                      <span>Book Transformation</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white hover:bg-[#D4AF37] hover:text-black transition-colors z-50 border border-white/10"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white hover:bg-[#D4AF37] hover:text-black transition-colors z-50 border border-white/10"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden max-h-[70vh] shadow-2xl border border-white/10">
              <img
                src={filteredItems[selectedPhotoIndex].imageUrl}
                alt={filteredItems[selectedPhotoIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl"
              />
            </div>
            
            <div className="mt-5 text-center max-w-xl">
              <span className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
                {filteredItems[selectedPhotoIndex].category.toUpperCase()} • {selectedPhotoIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-2xl text-white font-normal mt-1">
                {filteredItems[selectedPhotoIndex].title}
              </h3>
              <p className="text-xs text-white/50 mt-2">
                {filteredItems[selectedPhotoIndex].description}
              </p>
              
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    closeLightbox();
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-white text-black text-xs font-bold tracking-widest uppercase shadow-md active:scale-95 transition-colors"
                >
                  Book This Look at THE LUXX
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
