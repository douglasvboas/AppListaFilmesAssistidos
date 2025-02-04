import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonTitle, IonToolbar, IonHeader, IonButtons, IonImg, IonIcon, IonItem, IonLabel, IonButton, IonList } from "@ionic/angular/standalone";
import { FilmeService } from '../../../services/filme.service';
import { addIcons } from 'ionicons';
import { menu, playCircle } from 'ionicons/icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.page.html',
  styleUrls: ['./filme-list.page.scss'],
  standalone: true,
  imports: [IonList, IonButton, IonLabel, IonItem, IonIcon,  IonButtons, IonImg,  IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FilmeListPage   {

  filmes: any[] = [];
    
  
    constructor(private filmeService: FilmeService, private router: Router) {
      addIcons({menu,playCircle}); // Adiciona o ícone 'menu'
    }
  
    ngOnInit() {
      this.loadFilmes();
    }
  
    loadFilmes() {
      this.filmeService.getFilmes().subscribe((data: any) => {
        this.filmes = data;
      });
    }
    
    openMenu() {
      this.router.navigate(['/filme-cadastro']); // Navega para a página de cadastro
    }
  
    openTrailer(trailerUrl: string) {
      window.open(trailerUrl, '_system'); // Abre o link em uma nova aba ou no navegador
    }
  }


