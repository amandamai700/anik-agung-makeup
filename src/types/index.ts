export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: string;
  includes: string[];
  faq: { q: string; a: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  avatar: string;
  service: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  popular: boolean;
  badge?: string;
}

export interface BookingForm {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  address: string;
  notes: string;
  referenceImage: File | null;
}

export interface AdminUser {
  username: string;
  password: string;
  role: string;
}
