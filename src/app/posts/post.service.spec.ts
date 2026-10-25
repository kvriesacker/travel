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

  describe('search', () => {
    it('returns everything for an empty query', () => {
      expect(service.search('  ')).toBe(service.all());
    });

    it('matches title, city and country', () => {
      expect(service.search('tram 28').map((post) => post.slug)).toContain('lisbon-tram-28');
      expect(service.search('portugal').map((post) => post.slug)).toContain('lisbon-tram-28');
    });

    it('matches body text and tips', () => {
      expect(service.search('sardines').map((post) => post.slug)).toContain('lisbon-tram-28');
      expect(service.search('oyster card').map((post) => post.slug)).toContain('london-city-guide');
    });

    it('ignores case and accents', () => {
      expect(service.search('REYKJAVIK').map((post) => post.slug)).toContain('iceland-ring-road');
      expect(service.search('pastéis').length).toBeGreaterThan(0);
    });

    it('requires every word to match', () => {
      expect(service.search('lisbon sardines').map((post) => post.slug)).toEqual([
        'lisbon-tram-28',
      ]);
      expect(service.search('lisbon glacier')).toEqual([]);
    });

    it('searches within a given list', () => {
      const japan = service.all().filter((post) => post.country === 'Japan');
      expect(service.search('kyoto', japan).every((post) => post.country === 'Japan')).toBe(true);
    });
  });
});
