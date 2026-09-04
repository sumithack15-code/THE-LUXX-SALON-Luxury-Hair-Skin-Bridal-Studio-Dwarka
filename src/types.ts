export type ServiceCategory = 
  | 'all'
  | 'hair'
  | 'skin'
  | 'bridal'
  | 'nails'
  | 'men'
  | 'spa';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  duration: string; // e.g. "45 mins", "90 mins"
  description: string;
  popular?: boolean;
  signature?: boolean;
  includes: string[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'hair' | 'bridal' | 'nails' | 'skin';
  imageUrl: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  description: string;
}

export interface Appointment {
  id: string;
  referenceNo: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  stylistId: string;
  stylistName: string;
  date: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes?: string;
  status: 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
  avatar?: string;
}
