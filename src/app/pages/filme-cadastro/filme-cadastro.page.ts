import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-filme-cadastro',
  templateUrl: './filme-cadastro.page.html',
  styleUrls: ['./filme-cadastro.page.scss'],
  standalone: true,
  imports: [IonImg, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FilmeCadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
