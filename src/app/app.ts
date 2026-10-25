import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);

  protected readonly year = new Date().getFullYear();

  /** Hands the query to the Stories page, which keeps its own search box in sync. */
  protected search(event: Event, input: HTMLInputElement): void {
    event.preventDefault();
    const q = input.value.trim();
    input.value = '';
    input.blur();
    this.router.navigate(['/posts'], { queryParams: q ? { q } : {} });
  }
}
