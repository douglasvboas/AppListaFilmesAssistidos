import { FilmeService } from './../../../services/filme.service';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filme-list',
  standalone: true,
  templateUrl: './filme-list.page.html',
  styleUrls: ['./filme-list.page.scss'],
  imports: [IonicModule, CommonModule], 
})
export class FilmeListPage implements OnInit {
  filmes: any[] = [];


  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.loadFilmes();
  }

  loadFilmes() {
    this.filmeService.getFilmes().subscribe((data: any) => {
      this.filmes = data;
    });
  }
}