import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],  // Adicione o FormsModule aqui
})
export class LoginPage {
  email: string = '';
  password: string = '';
  username: string = '';

  constructor(private router: Router) {}

  login() {
    // Lógica de login (pode ser autenticado via backend)
    this.router.navigateByUrl('/filme-list');
  }

  goToSignup() {
    this.router.navigateByUrl('/cadastro-usuario');
  }
}
