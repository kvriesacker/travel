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

  it('finds a post by slug', () => {
    expect(service.bySlug('kyoto-autumn')?.country).toBe('Japan');
    expect(service.bySlug('nope')).toBeUndefined();
  });
});
