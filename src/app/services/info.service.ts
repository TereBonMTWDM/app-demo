import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  data: any = {};
  url: string = '';

  constructor(
    public http: HttpClient
  ) {
    // this.http.get('assets/data/info.json').subscribe(
    //   result => {
    //     // console.log(result);
    //     this.data = result;
    //     console.log(this.data);
    //   }
    // );
  }

  // getPaisesByBlock = (block : string) => this.http.get(`https://restcountries.eu/rest/v2/regionalbloc/${block}`).toPromise()

  getInfo = () => this.http.get('assets/data/info.json').toPromise();


  // getInfo() {
  //   return this.http.get('assets/data/info.json');
  // }

  getPaises(region: string) {

    return this.http.get(`${this.url}/region/`);
  }
}
