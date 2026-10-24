export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  location: string;
  country: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  /** CSS background shown behind the photo, or on its own when there is no photo. */
  cover: string;
  photo?: Photo;
  body: string[];
  /** Practical tips, shown as a list after the body. */
  tips?: string[];
}

/** A hotlinked Unsplash photo, free to use under the Unsplash License. */
export interface Photo {
  /** images.unsplash.com URL without a query string. */
  src: string;
  alt: string;
  author: string;
  /** The photo's page on unsplash.com, linked from the credit line. */
  page: string;
}

/** Unsplash resizes on the fly, so ask for no more pixels than the layout needs. */
export function photoUrl(photo: Photo, width: number): string {
  return `${photo.src}?auto=format&fit=crop&w=${width}&q=70`;
}

/** Unsplash asks for credit links to carry referral parameters. */
export function creditUrl(photo: Photo): string {
  return `${photo.page}?utm_source=wanderlog&utm_medium=referral`;
}
