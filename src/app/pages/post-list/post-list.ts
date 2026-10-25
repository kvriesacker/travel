import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../posts/post.service';
import { PostCard } from '../../shared/post-card/post-card';

@Component({
  selector: 'app-post-list',
  imports: [PostCard],
  template: `
    <section class="container page">
      <h1>All stories</h1>
      <input
        class="search"
        type="search"
        placeholder="Search cities, food, tips…"
        aria-label="Search stories"
        [value]="q() ?? ''"
        (input)="search($any($event.target).value)"
      />
      <div class="filters">
        <button type="button" [class.active]="!tag()" (click)="filter(null)">All</button>
        @for (t of tags; track t) {
          <button type="button" [class.active]="tag() === t" (click)="filter(t)">{{ t }}</button>
        }
      </div>
      @if (q()?.trim()) {
        <p class="count" aria-live="polite">
          {{ posts().length }} {{ posts().length === 1 ? 'story' : 'stories' }} matching “{{
            q()?.trim()
          }}”{{ tag() ? ' in ' + tag() : '' }}
        </p>
      }
      <div class="grid">
        @for (post of posts(); track post.slug) {
          <app-post-card [post]="post" />
        } @empty {
          <p class="empty">No stories found. Try another word or filter.</p>
        }
      </div>
    </section>
  `,
  styleUrl: './post-list.scss',
})
export class PostList {
  private readonly router = inject(Router);
  private readonly service = inject(PostService);
  private readonly all = this.service.all();

  /** Bound from the ?q= and ?tag= query params, so searches can be linked and shared. */
  readonly q = input<string>();
  readonly tag = input<string>();

  protected readonly tags = [...new Set(this.all.flatMap((post) => post.tags))].sort();
  protected readonly posts = computed(() => {
    const tag = this.tag();
    const posts = tag ? this.all.filter((post) => post.tags.includes(tag)) : this.all;
    return this.service.search(this.q() ?? '', posts);
  });

  protected search(q: string): void {
    this.updateParams({ q: q || null });
  }

  protected filter(tag: string | null): void {
    this.updateParams({ tag });
  }

  private updateParams(queryParams: Record<string, string | null>): void {
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge', replaceUrl: true });
  }
}
