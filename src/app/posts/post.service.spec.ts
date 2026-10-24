import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    service = TestBed.inject(PostService);
  });

  it('returns posts newest first', () => {
    const dates = service.all().map((post) => post.date);
    expect(dates).toEqual([...dates].sort().reverse());
  });

  it('gives every post a unique slug', () => {
    const slugs = service.all().map((post) => post.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('credits every photo', () => {
    for (const { photo } of service.all()) {
      if (photo) {
        expect(photo.src).toMatch(/^https:\/\/images\.unsplash\.com\/photo-[\w-]+$/);
        expect(photo.page).toMatch(/^https:\/\/unsplash\.com\/photos\//);
        expect(photo.author).not.toBe('');
        expect(photo.alt).not.toBe('');
      }
    }
  });

  it('has city guides for every continent', () => {
    const regions = new Set(
      service
        .all()
        .filter((post) => post.tags.includes('City guide'))
        .map((post) => post.tags[1]),
    );
    for (const region of [
      'Europe',
      'Asia',
      'Middle East',
      'Africa',
      'North America',
      'South America',
      'Oceania',
    ]) {
      expect(regions).toContain(region);
    }
  });

  it('finds a post by slug', () => {
    expect(service.bySlug('kyoto-autumn')?.country).toBe('Japan');
    expect(service.bySlug('nope')).toBeUndefined();
  });
});
