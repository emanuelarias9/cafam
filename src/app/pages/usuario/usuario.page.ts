import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/pages/usuario.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  information=null;
  constructor(private activatedRoute : ActivatedRoute, private usuarioService : UsuarioService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
  this.usuarioService.getDetail(id).subscribe(result  =>  {
    this.information  = result;
  }
    )
  }

}
