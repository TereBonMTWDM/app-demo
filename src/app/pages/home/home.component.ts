import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../../models/productoModel';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  productos: ProductoModel[] = [];

  constructor(
    private prodSvc: ProductoService
  ) { }

  ngOnInit() {
    this.prodSvc.getData().subscribe(
      (result: ProductoModel[]) => {
        this.productos = result;
        // console.log('===productos home: ', this.productos);
      }
    );
  }

}
