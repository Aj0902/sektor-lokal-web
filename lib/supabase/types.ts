export interface SocialLinks {
  youtube?: string;
  twitter?: string;
  instagram?: string;
  spotify?: string;
  tiktok?: string;
  linkedin?: string;
  threads?: string;
  facebook?: string;
  website?: string;
  email?: string;
  substack?: string;
  medium?: string;
  trakteer?: string;
  patreon?: string;
}

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
  social_links: SocialLinks;
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

export interface GalleryItem {
  id: string;
  profile_id: string;
  title: string;
  image_url: string;
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
  image_url?: string;
  action_text: string;
  link_url: string;
  order_index: number;
}

export interface FullProfileData {
  profile: Profile;
  lifeEvents: LifeEvent[];
  works: Work[];
  articles: Article[];
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  initiatives: Initiative[];
}
