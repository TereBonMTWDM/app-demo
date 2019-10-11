import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { InfoModel } from '../../models/infoModel';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  info: InfoModel = {}; // inicializar

  constructor(
    public infoSvc: InfoService
  ) {

    // this.info = infoSvc.data;
    // console.log(infoSvc.data);
  }

  async ngOnInit() {
    // this.info = (await this.infoSvc.getInfo()) as InfoModel;
    this.info = (await this.infoSvc.getInfo());

    //  console.log(this.info);

  }


}
