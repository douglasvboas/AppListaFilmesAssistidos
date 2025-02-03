import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8100/appMovie/api.php';  

  constructor(private http: HttpClient) {}

  // Função para login
  login(username: string, password: string, email: string): Observable<any> {
    const loginData = {
      username: username,
      password: password,
      email: email,
    };

    // Enviar os dados para a API de login
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }
}
