import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductoModel } from '../models/productoModel';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: ProductoModel[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get(`${environment.UrlFirebase}/productos.json`);
  }

  getDataById(code: string) {
    return this.http.get(`${environment.UrlFirebase}/detalle/${code}.json`);
  }

  // mientras, porque esto se haría en el back
  search(criterio: string) {
    // Promesa:
    return new Promise((resolve, reject) => {

      const filtro: ProductoModel[] = [];

      return this.http.get(`${environment.UrlFirebase}/productos.json`).subscribe((data: ProductoModel[]) => {
        this.productos = data;
        this.productos.forEach((item: ProductoModel) => {
          if (item.categoria.indexOf(criterio) >= 0 || item.titulo.indexOf(criterio) >= 0) {
            filtro.push(item);
          }
        });
        resolve(filtro);
      });
    });



/*
    const filtro: ProductoModel[] = [];

    return this.http.get(`${environment.UrlFirebase}/productos.json`).subscribe((data: ProductoModel[]) => {
        this.productos = data;
        this.productos.forEach((item: ProductoModel) => {
          if (item.categoria.indexOf(criterio) >= 0 || item.titulo.indexOf(criterio) >= 0) {
            filtro.push(item);
          }
        });
        console.log('===filtro: ', filtro);

      });
*/
  }
}
