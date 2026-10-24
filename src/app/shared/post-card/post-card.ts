import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post, photoUrl } from '../../posts/post';

@Component({
  selector: 'app-post-card',
  imports: [RouterLink, DatePipe],
  template: `
    <a class="card" [routerLink]="['/posts', post().slug]">
      <div class="cover" [style.background]="post().cover">
        @if (post().photo; as photo) {
          <img
            [src]="photoUrl(photo, 800)"
            [alt]="photo.alt"
            loading="lazy"
            (error)="$any($event.target).hidden = true"
          />
        }
        <span class="place">{{ post().location }}, {{ post().country }}</span>
      </div>
      <div class="content">
        <p class="meta">
          {{ post().date | date: 'mediumDate' }} · {{ post().readingMinutes }} min read
        </p>
        <h3>{{ post().title }}</h3>
        <p>{{ post().excerpt }}</p>
      </div>
    </a>
  `,
  styleUrl: './post-card.scss',
})
export class PostCard {
  readonly post = input.required<Post>();
  protected readonly photoUrl = photoUrl;
}
