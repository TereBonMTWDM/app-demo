import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoberturaService {
  url = 'https://restcountries.eu/rest/v2/region/';

  constructor(
    public http: HttpClient
  ) { }

  getInfo = (region: string) => this.http.get(`${this.url}${region}`).toPromise();
  // getInfo = () => this.http.get(`${this.url}europe`).toPromise();
}
