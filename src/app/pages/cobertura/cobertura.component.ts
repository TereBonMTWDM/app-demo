import { Component, OnInit } from '@angular/core';
import { CoberturaService } from '../../services/cobertura.service';
import { PaisModel } from '../../models/paisModel';

@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styles: []
})
export class CoberturaComponent implements OnInit {
  data: any;
  paisesList: PaisModel[] = []; // inicializar
  // paisesList: any = [];

  constructor(
    private coberturaSvc: CoberturaService
  ) {
  }

  async ngOnInit() {
    this.data = (await this.coberturaSvc.getInfo('europe'));

    this.paisesList = this.data;
    console.log(this.paisesList);

  }

}
