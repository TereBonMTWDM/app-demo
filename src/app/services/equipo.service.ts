import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    // console.log('on service');
    return this.http.get(`${environment.UrlFirebase}/equipo.json`);
  }
}
