export interface Profile {
  id: string;
  slug: string;
  name: string;
  title: string;
  category: string;
  bio_paragraphs: string[];
  quote: string;
  photo_url: string;
  verified: boolean;
  status_text: string;
  social_links: {
    youtube?: string;
    twitter?: string;
    instagram?: string;
    spotify?: string;
    email?: string;
  };
  theme_default?: 'light' | 'dark';
  created_at?: string;
}

export interface LifeEvent {
  id: string;
  profile_id: string;
  year_range: string;
  title: string;
  description: string;
  order_index: number;
}

export interface Work {
  id: string;
  profile_id: string;
  title: string;
  category: string;
  description: string;
  link_url: string;
  order_index: number;
}

export interface Article {
  id: string;
  profile_id: string;
  title: string;
  tag: string;
  read_time: string;
  description: string;
  content_full?: string;
  link_url: string;
  order_index: number;
}

export interface Testimonial {
  id: string;
  profile_id: string;
  author_name: string;
  author_role: string;
  quote: string;
  order_index: number;
}

export interface Initiative {
  id: string;
  profile_id: string;
  title: string;
  category: string;
  description: string;
  price?: string;
  price_variants?: string[];
  action_text: string;
  link_url: string;
  order_index: number;
}

export interface FullProfileData {
  profile: Profile;
  lifeEvents: LifeEvent[];
  works: Work[];
  articles: Article[];
  testimonials: Testimonial[];
  initiatives: Initiative[];
}
