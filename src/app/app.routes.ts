import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'Home',             loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  { path: 'login',            loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'cadastro-usuario', loadComponent: () => import('./pages/cadastro-usuario/cadastro-usuario.page').then(m => m.CadastroUsuarioPage) },
  { path: 'filme-list',       loadComponent: () => import('./pages/filme-list/filme-list.page').then(m => m.FilmeListPage) },
  { path: 'filme-cadastro',   loadComponent: () => import('./pages/filme-cadastro/filme-cadastro.page').then(m => m.FilmeCadastroPage) },
  { path: 'favoritos',        loadComponent: () => import('./pages/favoritos/favoritos.page').then( m => m.FavoritosPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },

];
