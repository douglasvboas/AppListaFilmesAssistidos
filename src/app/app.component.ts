import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList,  IonItem,  IonLabel, IonRouterOutlet, IonRouterLink, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/angular/standalone';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [  IonIcon, IonTitle, IonToolbar, IonHeader, RouterLink,  IonApp, IonSplitPane, IonMenu, IonContent, IonList,   IonItem,  IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  constructor(private router: Router) {}

  openMenu() {
    this.router.navigate(['/home']);
  }
}
