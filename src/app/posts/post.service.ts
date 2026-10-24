import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './posts.data';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  all(): Post[] {
    return this.posts;
  }

  latest(count: number): Post[] {
    return this.posts.slice(0, count);
  }

  bySlug(slug: string): Post | undefined {
    return this.posts.find((post) => post.slug === slug);
  }
}
