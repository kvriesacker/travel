import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the brand in the header', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand')?.textContent).toContain('Wanderlog');
  });

  it('sends header searches to the Stories page', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.querySelector<HTMLInputElement>('.site-header input')!;
    input.value = ' lisbon ';
    compiled.querySelector('.site-header form')!.dispatchEvent(new Event('submit'));
    await fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/posts?q=lisbon');
    expect(input.value).toBe('');
  });
});
