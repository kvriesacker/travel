import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { creditUrl, photoUrl } from '../../posts/post';
import { PostService } from '../../posts/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink, DatePipe],
  template: `
    @if (post(); as post) {
      <article>
        <header class="cover" [class.has-photo]="!!post.photo" [style.background]="post.cover">
          @if (post.photo; as photo) {
            <img
              [src]="photoUrl(photo, 1600)"
              [alt]="photo.alt"
              (error)="$any($event.target).hidden = true"
            />
          }
          <div class="container narrow">
            <p class="meta">{{ post.location }}, {{ post.country }}</p>
            <h1>{{ post.title }}</h1>
            <p class="meta">
              {{ post.date | date: 'longDate' }} · {{ post.readingMinutes }} min read
            </p>
          </div>
        </header>
        <div class="container narrow body">
          @if (post.photo; as photo) {
            <p class="credit">
              Photo by <a [href]="creditUrl(photo)">{{ photo.author }}</a> on
              <a href="https://unsplash.com/?utm_source=wanderlog&amp;utm_medium=referral"
                >Unsplash</a
              >
            </p>
          }
          @for (paragraph of post.body; track $index) {
            <p>{{ paragraph }}</p>
          }
          @if (post.tips?.length) {
            <h2>Practical tips</h2>
            <ul class="tips">
              @for (tip of post.tips; track $index) {
                <li>{{ tip }}</li>
              }
            </ul>
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
  protected readonly photoUrl = photoUrl;
  protected readonly creditUrl = creditUrl;
}
