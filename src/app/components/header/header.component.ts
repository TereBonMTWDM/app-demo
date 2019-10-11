import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  busqueda(criterio: string) {
    this.route.navigate(['/busqueda', criterio]);



    // esto va a pages busqueda:
/*
    // console.log('===criterio: ', criterio);

    // this.prodSvc.search(criterio);

    this.prodSvc.search(criterio).then(filtro => {
      // viene de la promesa:
      console.log('===filtro: ', filtro);
    });
    */
  }

}
