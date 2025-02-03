import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-filme-cadastro',
  templateUrl: './filme-cadastro.page.html',
  styleUrls: ['./filme-cadastro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FilmeCadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
