export interface MarketScoop {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: Author;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export interface Author {
  name: string;
  role: string;
  avatar?: string;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string;
  date: string;
  featured?: boolean;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: 'start-here' | 'intermediate' | 'advanced';
  readTime: number;
  downloadUrl?: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  modules: CourseModule[];
  outcomes: string[];
  instructor: Instructor;
  thumbnail?: string;
  featured?: boolean;
}

export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Instructor {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}
