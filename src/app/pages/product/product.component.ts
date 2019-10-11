import { Component, OnInit } from '@angular/core';
// import { ProductoModel } from '../../models/productoModel';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { DetalleModel } from '../../models/productoModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  // producto: DetalleModel = {};
  producto: DetalleModel;
  codigo: string;

  constructor(
    private router: ActivatedRoute,
    private prodSvc: ProductoService
  ) {
    this.router.params.subscribe(params => {
      // console.log('===parámetro: ', params);
      this.codigo = params.codigo;

      // this.prodSvc.getDataById(this.codigo).subscribe((data: DetalleModel) => {
      // });
    });
  }

  ngOnInit() {
    this.prodSvc.getDataById(this.codigo).subscribe((data: DetalleModel) => {
      this.producto = data;
    });

    // this.prodSvc.getDataById(this.codigo).subscribe(
    //   (result: ProductoModel[]) => {
    //     this.producto = result;
    //     // console.log('===producto: ', this.producto);

    //   }
    // );
  }

}
