import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  // Define el método listarUsuarios que hace la solicitud HTTP
  listarUsuarios(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/usuarios/listar');
  }
}
