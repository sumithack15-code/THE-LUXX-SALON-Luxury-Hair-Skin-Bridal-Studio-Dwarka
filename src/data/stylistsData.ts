import { Stylist, Review } from '../types';

export const STYLISTS_DATA: Stylist[] = [
  {
    id: 'any',
    name: 'First Available Master Artist',
    role: 'Salon Team Recommendation',
    experience: 'Certified Experts',
    specialty: 'Matched automatically to your service selection for minimum wait time',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 4.9
  },
  {
    id: 'aryan-k',
    name: 'Aryan Kapoor',
    role: 'Creative Hair Director & Master Colorist',
    experience: '12+ Years Experience (Toni&Guy London Alumnus)',
    specialty: 'Balayage, Nanoplastia, Precision Bob & Layered Sculpting',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 4.98
  },
  {
    id: 'meher-s',
    name: 'Meher Sharma',
    role: 'Lead Bridal & Couture Makeup Artist',
    experience: '9+ Years Experience (Celebrity Wedding Specialist)',
    specialty: 'HD Airbrush Base, Royal Mughal Bridal, Cocktail Glam',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 4.96
  },
  {
    id: 'vikram-r',
    name: 'Vikram Rawat',
    role: 'Senior Aesthetician & Skin Director',
    experience: '8+ Years (Dermatological Aesthetic Certified)',
    specialty: '24K Gold Facials, Hydra Medi-Dermabrasion, Lymphatic Lift',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 4.94
  },
  {
    id: 'divya-p',
    name: 'Divya Patel',
    role: 'Master Nail Artist & Russian E-file Specialist',
    experience: '6+ Years (International Nail Academy Certified)',
    specialty: 'Chrome Nails, Sculpted Gel Extensions, Custom 3D Art',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 4.92
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Radhika Singhania',
    location: 'Sector 12, Dwarka',
    rating: 5,
    date: '3 days ago',
    comment: 'THE LUXX SALON is hands down the best luxury salon in Dwarka. Aryan did my balayage and the blend is so soft and luminous! The hospitality, sanitization, and coffee were top notch.',
    service: 'French Balayage & Glossing Ritual'
  },
  {
    id: 'rev-2',
    author: 'Kunal Sachdeva',
    location: 'Pocket 8, Parmanand Colony',
    rating: 5,
    date: '1 week ago',
    comment: 'Dwarka desperately needed an executive grooming studio like this. The hot towel straight razor shave and haircut were done to perfection. Booking online was effortless.',
    service: "Executive Haircut & Beard Sculpting"
  },
  {
    id: 'rev-3',
    author: 'Ananya Verma',
    location: 'Sector 11 Dwarka',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Booked my sister’s engagement makeup here with Meher. The airbrush base did not budge all night despite 6 hours of dancing! The Ground Floor studio is super spacious and chic.',
    service: 'Opulent Sangeet & Cocktail Glamour'
  },
  {
    id: 'rev-4',
    author: 'Pooja Kashyap',
    location: 'Sector 14 Dwarka',
    rating: 5,
    date: '3 weeks ago',
    comment: 'The 24K Imperial Gold facial left my skin glowing for days before my family function. Very respectful and trained therapists. Cleanest salon in Dwarka Sector 12B without question.',
    service: '24K Imperial Gold Rejuvenation Facial'
  }
];

export const SALON_INFO = {
  name: 'THE LUXX SALON',
  tagline: 'The Pinnacle of Bespoke Hair, Skin & Couture Artistry',
  address: 'Ground Floor, Plot Number 39, Parmanand Colony, Pocket 8, Block B, Sector 12B, Dwarka, New Delhi, Delhi, 110078',
  shortAddress: 'Ground Floor, Plot 39, Sector 12B, Dwarka, New Delhi',
  phone: '08800131731',
  phoneFormatted: '08800131731',
  internationalPhone: '+918800131731',
  email: 'theluxxsalon.dwarka@gmail.com',
  hours: 'Mon – Sun: 10:00 AM – 08:30 PM',
  googleMapsQuery: 'Ground+Floor+Plot+Number+39+Parmanand+Colony+Pocket+8+Block+B+Sector+12B+Dwarka+New+Delhi+Delhi+110078',
  landmarks: 'Convenient ground floor access, near Sector 12 Metro Station & City Centre Mall Dwarka, dedicated valet parking available.',
  rating: '4.9',
  reviewsCount: '480+'
};
