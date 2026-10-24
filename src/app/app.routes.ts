import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Wanderlog' },
  {
    path: 'posts',
    loadComponent: () => import('./pages/post-list/post-list').then((m) => m.PostList),
    title: 'Stories · Wanderlog',
  },
  {
    path: 'posts/:slug',
    loadComponent: () => import('./pages/post-detail/post-detail').then((m) => m.PostDetail),
    title: 'Story · Wanderlog',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Not found · Wanderlog',
  },
];
