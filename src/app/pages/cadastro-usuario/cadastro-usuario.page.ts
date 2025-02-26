import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
  standalone: true,
  imports: [IonImg, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CadastroUsuarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
