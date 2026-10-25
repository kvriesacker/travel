import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './posts.data';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly posts = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
  private readonly searchText = new Map(this.posts.map((post) => [post, searchText(post)]));

  all(): Post[] {
    return this.posts;
  }

  latest(count: number): Post[] {
    return this.posts.slice(0, count);
  }

  bySlug(slug: string): Post | undefined {
    return this.posts.find((post) => post.slug === slug);
  }

  /** Posts containing every word of the query, in any field, ignoring case and accents. */
  search(query: string, posts = this.posts): Post[] {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    if (words.length === 0) {
      return posts;
    }
    return posts.filter((post) => {
      const text = this.searchText.get(post) ?? searchText(post);
      return words.every((word) => text.includes(word));
    });
  }
}

function searchText(post: Post): string {
  return normalize(
    [
      post.title,
      post.excerpt,
      post.location,
      post.country,
      ...post.tags,
      ...post.body,
      ...(post.tips ?? []),
    ].join('\n'),
  );
}

/** Lowercases and strips accents, so "reykjavik" finds "Reykjavík". */
function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();
}
