export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  format: 'Online & Presencial' | 'Online' | 'Presencial';
  duration: string;
  featured?: boolean;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  service: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Constelação' | 'Online' | 'Valores';
}

export interface BookingFormData {
  name: string;
  whatsapp: string;
  email: string;
  service: string;
  modality: 'online' | 'presencial';
  bestTime: 'manha' | 'tarde' | 'noite' | 'qualquer';
  situation: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    category: string;
    serviceRecommendation: string;
  }[];
}
