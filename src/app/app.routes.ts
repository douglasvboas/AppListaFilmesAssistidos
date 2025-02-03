import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // A primeira tela a ser carregada será a de login
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'cadastro-usuario', loadComponent: () => import('./pages/cadastro-usuario/cadastro-usuario.page').then(m => m.CadastroUsuarioPage) },
  { path: 'filme-list', loadComponent: () => import('./pages/filme-list/filme-list.page').then(m => m.FilmeListPage) },
  { path: 'filme-cadastro', loadComponent: () => import('./pages/filme-cadastro/filme-cadastro.page').then(m => m.FilmeCadastroPage) },

];
