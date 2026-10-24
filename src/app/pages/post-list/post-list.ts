import { Component, computed, inject, signal } from '@angular/core';
import { PostService } from '../../posts/post.service';
import { PostCard } from '../../shared/post-card/post-card';

@Component({
  selector: 'app-post-list',
  imports: [PostCard],
  template: `
    <section class="container page">
      <h1>All stories</h1>
      <div class="filters">
        <button type="button" [class.active]="tag() === null" (click)="tag.set(null)">All</button>
        @for (t of tags; track t) {
          <button type="button" [class.active]="tag() === t" (click)="tag.set(t)">{{ t }}</button>
        }
      </div>
      <div class="grid">
        @for (post of posts(); track post.slug) {
          <app-post-card [post]="post" />
        }
      </div>
    </section>
  `,
  styleUrl: './post-list.scss',
})
export class PostList {
  private readonly all = inject(PostService).all();

  protected readonly tags = [...new Set(this.all.flatMap((post) => post.tags))].sort();
  protected readonly tag = signal<string | null>(null);
  protected readonly posts = computed(() => {
    const tag = this.tag();
    return tag ? this.all.filter((post) => post.tags.includes(tag)) : this.all;
  });
}
