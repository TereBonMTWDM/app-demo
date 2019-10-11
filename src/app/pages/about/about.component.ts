import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { EquipoModel } from '../../models/equipoModel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  equipo: EquipoModel[] = [];

  constructor(
    private eqpoSvc: EquipoService
  ) { }

  ngOnInit() {
    this.eqpoSvc.getData().subscribe(
      (result: EquipoModel[]) => {
        this.equipo = result;
        console.log('===equipo: ', this.equipo);
      }
    );
  }

}
