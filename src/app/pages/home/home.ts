import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostService } from '../../posts/post.service';
import { PostCard } from '../../shared/post-card/post-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PostCard],
  template: `
    <section class="hero">
      <div class="container">
        <p class="eyebrow">Stories from the road</p>
        <h1>Slow travel, good food and the long way round.</h1>
        <p class="lead">Notes, tips and photos from trips near and far.</p>
        <a class="button" routerLink="/posts">Read the stories</a>
      </div>
    </section>

    <section class="container latest">
      <div class="section-head">
        <h2>Latest stories</h2>
        <a routerLink="/posts">View all →</a>
      </div>
      <div class="grid">
        @for (post of latest; track post.slug) {
          <app-post-card [post]="post" />
        }
      </div>
    </section>
  `,
  styleUrl: './home.scss',
})
export class Home {
  protected readonly latest = inject(PostService).latest(3);
}
