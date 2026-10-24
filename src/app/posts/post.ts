export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  location: string;
  country: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  /** CSS background used as the cover until real photos are added. */
  cover: string;
  body: string[];
}
