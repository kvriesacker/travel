import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="container" style="padding-block: 5rem">
      <h1>Lost?</h1>
      <p>This page doesn't exist. Let's get you back on the map.</p>
      <a routerLink="/">← Home</a>
    </section>
  `,
})
export class NotFound {}
