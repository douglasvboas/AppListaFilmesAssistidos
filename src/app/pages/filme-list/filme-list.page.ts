import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonToolbar, IonHeader, IonButtons, IonImg } from "@ionic/angular/standalone";

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.page.html',
  styleUrls: ['./filme-list.page.scss'],
  standalone: true,
  imports: [ IonButtons, IonImg,  IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FilmeListPage  implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {

  }
}
