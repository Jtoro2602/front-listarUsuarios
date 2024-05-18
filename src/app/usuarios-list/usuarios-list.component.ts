import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service'; // Importa el servicio

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { } // Inyecta el servicio

  ngOnInit(): void {
    this.usuariosService.listarUsuarios().subscribe((data: any) => { // Usa el método del servicio
      console.log(data);
    });
  }

}
