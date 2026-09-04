import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  // Hair & Styling
  {
    id: 'hair-1',
    name: 'Bespoke Precision Cut & Blow Dry',
    category: 'hair',
    price: 1800,
    duration: '60 mins',
    description: 'Personalized face-contour haircut, deep scalp cleanse, relaxing massage, and customized editorial blow-dry finish.',
    popular: true,
    signature: false,
    includes: ['Consultation & Texture Analysis', 'Kerastase Scalp Cleansing', 'Hydrating Mask', 'Styling & Thermal Protection']
  },
  {
    id: 'hair-2',
    name: 'French Balayage & Glossing Ritual',
    category: 'hair',
    price: 7500,
    duration: '180 mins',
    description: 'Artisanal hand-painted sun-kissed dimension using premium ammonia-free Parisian pigments sealed with high-shine acidic gloss.',
    popular: true,
    signature: true,
    includes: ['Colorist Mapping & Consultation', 'Bond-building Plex Infusion', 'Custom Tonal Glaze', 'Post-Color Nourishment Blowout']
  },
  {
    id: 'hair-3',
    name: 'Brazilian Nanoplastia Smooth & Repair',
    category: 'hair',
    price: 8500,
    duration: '210 mins',
    description: 'Formaldehyde-free organic amino acid therapy that restores keratin structure, leaving hair mirror-sleek and frizz-free for up to 6 months.',
    popular: false,
    signature: true,
    includes: ['Clarifying Pre-Treatment', 'Deep Nanotech Penetration', 'Infrared Flat Iron Lock-in', 'Take-Home Maintenance Guide']
  },
  {
    id: 'hair-4',
    name: 'Olaplex Molecular Bond Reconstruction',
    category: 'hair',
    price: 3200,
    duration: '75 mins',
    description: 'Patented active chemistry that repairs broken disulfide bonds caused by heat, chemical processing, and environmental pollution.',
    popular: true,
    includes: ['Stand-Alone No.1 & No.2 Treatment', 'Micro-Mist Thermal Infusion', 'Moisture Sealing Elixir']
  },
  {
    id: 'hair-5',
    name: 'Royal Moroccan Argan Oil Spa',
    category: 'hair',
    price: 2600,
    duration: '60 mins',
    description: 'Warm cold-pressed Argan elixir combined with rhythmic acupressure head massage to stimulate microcirculation and deeply nourish hair follicles.',
    popular: false,
    includes: ['20-min Acupressure Head Massage', 'Steam Ozone Scalp Sauna', 'Velvet Argan Serum Wrap']
  },

  // Skin & Aesthetics
  {
    id: 'skin-1',
    name: '24K Imperial Gold Rejuvenation Facial',
    category: 'skin',
    price: 4800,
    duration: '90 mins',
    description: 'Pure 24K gold foil sheets and antioxidant botanical actives that tighten cellular matrix, boost collagen, and impart an opulent, regal radiance.',
    popular: true,
    signature: true,
    includes: ['Ultrasonic Deep Pore Peeling', '24K Gold Leaf Thermal Mask', 'Cryo-Cooling Lymphatic Sculpting', 'Gold Dust Infused Hydrator']
  },
  {
    id: 'skin-2',
    name: 'Hydra-Oxygen Glass Skin Facial',
    category: 'skin',
    price: 3900,
    duration: '75 mins',
    description: 'Multistage vortex suction exfoliating blackheads followed by hyperbaric oxygen serum infusion for that coveted Korean glass skin sheen.',
    popular: true,
    includes: ['Vortex Hydro-Dermabrasion', 'Gentle Salicylic + Lactic Peel', 'Hyperbaric Oxygen Mist', 'LED Light Phototherapy']
  },
  {
    id: 'skin-3',
    name: 'Caviar & Collagen Anti-Ageing Ritual',
    category: 'skin',
    price: 5500,
    duration: '90 mins',
    description: 'High-potency Caspian caviar extracts, peptide serums, and micro-current contouring to lift jawline and smooth fine expression lines.',
    signature: true,
    includes: ['Caviar Micro-Needle-Free Infusion', 'Micro-Current Facial Lifting', 'Collagen Bio-Matrix Sheet', 'Neck & Décolleté Massage']
  },
  {
    id: 'skin-4',
    name: 'Clarifying Botanical Detoxing Treatment',
    category: 'skin',
    price: 2800,
    duration: '60 mins',
    description: 'Designed for stressed city skin with active botanicals, tea tree, niacinamide, and blue light therapy to balance sebum and soothe inflammation.',
    popular: false,
    includes: ['Double Enzymatic Cleanse', 'Purifying Clay Wrap', 'High-Frequency Antibacterial Wand', 'Calming Centella Emulsion']
  },

  // Bridal & Occasion Makeup
  {
    id: 'bridal-1',
    name: 'The Royal Bridal Couture Makeover',
    category: 'bridal',
    price: 24000,
    duration: '240 mins',
    description: 'The ultimate royal bridal luxury with bespoke high-definition makeup, luxury eyelash sculpting, bespoke dupatta draping, and jewelry styling.',
    signature: true,
    popular: true,
    includes: ['Pre-Bridal Skin Priming Session', 'HD / Airbrush High-End Foundation', 'Mink/Silk Lash Extensions', 'Hair Artistry & Floral Settings', 'Dupatta & Jewelry Draping']
  },
  {
    id: 'bridal-2',
    name: 'Opulent Sangeet & Cocktail Glamour',
    category: 'bridal',
    price: 12000,
    duration: '150 mins',
    description: 'Smokey metallic or shimmering glamour eyes paired with luminous waterproof base, sculpted cheekbones, and red-carpet textured hair waves.',
    popular: true,
    includes: ['HD Waterproof Complexion', 'Dramatic Eye Design', 'Textured Hollywood Waves / Updo', 'Sari/Lehenga Draping']
  },
  {
    id: 'bridal-3',
    name: 'Pre-Bridal 7-Day Radiance Programme',
    category: 'bridal',
    price: 32000,
    duration: '7 Days Package',
    description: 'Holistic pre-wedding package covering full body polishing, customized facials, Brazilian manicure-pedicure, hair spa, and bridal glow peels.',
    signature: true,
    includes: ['2 Signature Facials', 'Full Body Organic Scrub & Polish', 'Luxury Hair Spa & Gloss', 'Spa Manicure & Pedicure with Gel', 'Full Body Waxing & Bleach / Threading']
  },

  // Nails & Hand Spa
  {
    id: 'nails-1',
    name: 'Russian Clean-Cuticle Gel Extensions',
    category: 'nails',
    price: 3200,
    duration: '120 mins',
    description: 'Precision dry electric-drill manicure for pristine cuticles, hard gel extensions, and mirror-smooth gel color that lasts chip-free for 4+ weeks.',
    popular: true,
    includes: ['Russian E-file Cuticle Work', 'Gel / Polygel Nail Extension', 'Multi-Layer Gel Polish', 'Cuticle Elixir & Hand Massage']
  },
  {
    id: 'nails-2',
    name: 'Chrome & Haute Couture Custom Nail Art',
    category: 'nails',
    price: 1800,
    duration: '60 mins',
    description: 'Glazed donut chrome, French ombré, 3D floral accents, or Swarovski crystal encrusting crafted by master nail artists.',
    popular: false,
    includes: ['Custom Moodboard Consultation', 'Hand-Painted Detailing', 'Swarovski / Chrome Powders', 'UV Gel Top Seal']
  },
  {
    id: 'nails-3',
    name: 'Rose Petal & Champagne Spa Pedicure',
    category: 'nails',
    price: 2200,
    duration: '75 mins',
    description: 'Foot bath infused with essential rose oils, Himalayan salt soak, organic fruit scrub, callus treatment, and soothing hot stone foot massage.',
    popular: true,
    includes: ['Rose & Milk Foot Soak', 'Callus Dissolving Care', 'Hot Stone Calf & Foot Massage', 'Hydrating Paraffin Mask']
  },

  // Men's Grooming
  {
    id: 'men-1',
    name: 'The Executive Gentleman Haircut & Scalp Detox',
    category: 'men',
    price: 1200,
    duration: '50 mins',
    description: 'Precision scissor and clipper taper tailored to cranial structure, cooling menthol wash, and stimulating scalp tonification.',
    popular: true,
    includes: ['Consultation & Cut', 'Tea Tree Scalp Wash', 'Neck Shave with Hot Towel', 'Matte Pomade Finish']
  },
  {
    id: 'men-2',
    name: 'Hot Towel Beard Sculpting & Royal Razor Shave',
    category: 'men',
    price: 900,
    duration: '45 mins',
    description: 'Traditional straight razor lining, botanical pre-shave oil, hot steamed towel compresses, and cedarwood soothing balm.',
    popular: true,
    includes: ['Pre-Shave Essential Oils', 'Hot Steamed Towels', 'Straight Razor Edge Lineup', 'Organic Beard Butter & Aftershave']
  },
  {
    id: 'men-3',
    name: 'Activated Charcoal Beard & Facial De-Tan',
    category: 'men',
    price: 2400,
    duration: '60 mins',
    description: 'Deep cleansing treatment addressing Delhi pollution, sun tan, ingrown beard hair, and dull tired facial complexion.',
    signature: false,
    includes: ['Exfoliating Walnut Scrub', 'Charcoal Peel-Off Mask', 'Beard Conditioning Steaming', 'SPF Hydra Protection']
  },

  // Spa & Body Wellness
  {
    id: 'spa-1',
    name: 'Swedish & Balinese Fusion Body Therapy',
    category: 'spa',
    price: 3600,
    duration: '75 mins',
    description: 'Long gliding strokes coupled with thumb pressure and warm botanical oils to melt away tension, fatigue, and muscular stress.',
    popular: true,
    includes: ['Choice of Aromatherapy Oils', 'Full Body Acupressure', 'Hot Steamed Herbal Towels', 'Herbal Refreshment']
  },
  {
    id: 'spa-2',
    name: 'Gold Glow Full Body Polish & Wrap',
    category: 'spa',
    price: 4200,
    duration: '90 mins',
    description: 'Finely ground walnut, turmeric, and micro-gold grains exfoliate dead skin, followed by a deeply hydrating cocoon wrap for silk-soft skin.',
    signature: true,
    includes: ['Full Body Exfoliating Scrub', 'Thermal Gold Silk Body Mask', 'Steam Capsule Session', 'Nourishing Body Soufflé Application']
  }
];

export const SALON_CATEGORIES = [
  { id: 'all', label: 'All Services', icon: 'Sparkles' },
  { id: 'hair', label: 'Hair & Styling', icon: 'Scissors' },
  { id: 'skin', label: 'Skin & Aesthetics', icon: 'Smile' },
  { id: 'bridal', label: 'Bridal & Couture', icon: 'Crown' },
  { id: 'nails', label: 'Nails & Hand Spa', icon: 'HandMetal' },
  { id: 'men', label: "Men's Grooming", icon: 'UserCheck' },
  { id: 'spa', label: 'Spa & Wellness', icon: 'Flower' },
] as const;
