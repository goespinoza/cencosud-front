import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/interfaces/interface';
import { ClimaService } from 'src/app/services/clima.service';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  ciudades: Ciudad[];

  constructor(
    private climaService: ClimaService
  ) { }

  ngOnInit() {
    this.getCiudades();
    this.climaService.onCiudadesClima()
      .subscribe(result => {
        if (result.ok) {
          this.ciudades = this.setContenido(result.ciudades);
        }
      });
  }

  getCiudades() {
    this.climaService.getCiudades()
      .subscribe(result => {
        if (result.body['ok']) {
          this.ciudades = this.setContenido(result.body['ciudades']);
        }
      });
  }

  setContenido(ciudades) {
    ciudades.forEach(ciudad => {
      ciudad.cuidad = ciudad.cuidad.toUpperCase();
      let jun = moment(new Date(ciudad.clima.currently.time * 1000));// creating obj.
      ciudad.clima.currently.time = jun.tz(ciudad.clima.timezone).format('hh : mm : ss a');
    });
    return ciudades
  }

}
