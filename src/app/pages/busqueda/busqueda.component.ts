import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { ProductoModel } from '../../models/productoModel';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  filtrados: ProductoModel[] = [];

  constructor(
    private prodSvc: ProductoService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( params => {
      console.log(params.criterio);

      this.prodSvc.search(params.criterio).then((data: ProductoModel[]) => {
        this.filtrados = data;
        console.log('===filtrados: ', this.filtrados);
      });
    });

  }

  ngOnInit() {
     // this.prodSvc.search(criterio);



  }

}
