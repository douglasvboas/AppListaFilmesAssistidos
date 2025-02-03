import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = 'http://localhost:8100/appMovie/api.php';

  constructor(private http: HttpClient) { }

  getFilmes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addFilme(filme: any): Observable<any> {
    return this.http.post(this.apiUrl, filme);
  }
}