import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UsuarioService} from 'src/app/pages/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  results: Observable<any>
  
  constructor(private usuarioService : UsuarioService) {
    this.results = this.usuarioService.getUsuario()
  }

  ngOnInit() {
  }

}
