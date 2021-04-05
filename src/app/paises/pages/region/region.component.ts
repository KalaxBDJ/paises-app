import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaces';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      button 
      {
        margin-right : 5px; 
      }    
    
    `
  ]
})
export class RegionComponent   {

  regiones : string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva : string = '';
  paises : Country[] = [];

  constructor( private paiService : PaisService) { }

  activarRegion( region : string )
  {
    if ( region === this.regionActiva ){return;}
    this.regionActiva = region;
    this.paises = [];
    //TODO: Hacer el llamado al servicio
    

    this.paiService.getRegion( region ).subscribe( paises => {
      this.paises = paises;
    } )
  }

  getClaseCSS(region : string)
  {
    return (region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
  }

}
