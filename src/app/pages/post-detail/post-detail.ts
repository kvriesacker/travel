import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../../posts/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, DatePipe],
  template: `
    @if (post(); as post) {
      <article>
        <header class="cover" [style.background]="post.cover">
          <div class="container narrow">
            <p class="meta">{{ post.location }}, {{ post.country }}</p>
            <h1>{{ post.title }}</h1>
            <p class="meta">
              {{ post.date | date: 'longDate' }} · {{ post.readingMinutes }} min read
            </p>
          </div>
        </header>
        <div class="container narrow body">
          @for (paragraph of post.body; track $index) {
            <p>{{ paragraph }}</p>
          }
          <ul class="tags">
            @for (tag of post.tags; track tag) {
              <li>{{ tag }}</li>
            }
          </ul>
          <a routerLink="/posts">← Back to all stories</a>
        </div>
      </article>
    } @else {
      <section class="container narrow body">
        <h1>Story not found</h1>
        <p>We couldn't find that story. It may have wandered off.</p>
        <a routerLink="/posts">← Back to all stories</a>
      </section>
    }
  `,
  styleUrl: './post-detail.scss',
})
export class PostDetail {
  private readonly posts = inject(PostService);

  /** Bound from the `:slug` route parameter. */
  readonly slug = input.required<string>();
  protected readonly post = computed(() => this.posts.bySlug(this.slug()));
}
