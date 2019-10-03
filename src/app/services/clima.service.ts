import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private socket: any;
  private ciudades: any;

  constructor(
    private http: HttpClient
  ) {
    this.socket = io.connect(environment.pathSocket)
  }

  /* GUARDAR LAS COORDENADAS */
  saveCiudades() {
    return this.http.post(`${environment.path}${environment.services.saveCiudades.endpoint}`, { observe: 'response' });
  }

  /* OBTENER CLIMA DE LAS CIUDADES */
  getCiudades() {
    return this.http.get(`${environment.path}${environment.services.getCiudades.endpoint}`, { observe: 'response' });
  }

  /* ESCUCHA EMIT DESDE EL BACK PARA OBTENER LAS CIUDADES */
  onCiudadesClima(): Observable<any> {
    this.socket.on('climaCiudades', (res) => {
      this.ciudades.next(res);
    })
    return this.ciudadesClima();
  }

  ciudadesClima(): Observable<any> {
    return new Observable(mensaje => {
      this.ciudades = mensaje;
    });
  }
}
