import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, power } from 'ionicons/icons';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})

export class AppComponent {
  constructor(private router: Router) {
      addIcons({power});}

  public appPages = [

    //{ title: '', url: '/filme-list', icon: 'list' },
    { title: 'home',                url: '/home',             icon: 'home' },
    { title: 'Cadastro de Filmes',  url: '/filme-cadastro',   icon: 'film' },
    { title: 'Lista de Filmes',     url: '/filme-list',       icon: 'list' },
    { title: 'Cadastro de Usuário', url: '/cadastro-usuario', icon: 'person-add' },
    { title: 'Favoritos',           url: '/favoritos',        icon: 'list' },
  ];
 
  navigateTo(url: string) {
    this.router.navigate([url]);
  }


}
