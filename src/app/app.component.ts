import { Component } from '@angular/core';
import { ClimaService } from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private climaService: ClimaService
  ) {
    this.saveCiudades();
  }

  saveCiudades() {
    this.climaService.saveCiudades()
      .subscribe(result => {
        console.log(result);
      });
  }
}
