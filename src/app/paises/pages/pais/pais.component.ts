import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaces';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
      li
      {
        cursor:pointer;
      }
    `
  ]
})
export class PaisComponent{

  error : boolean = false;
  termino : string = '';
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencias : boolean = false;

  constructor(private paisService:PaisService) { }

  buscar(termino : string)
  {
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
    (this.termino);

    this.paisService.buscarPais(this.termino).subscribe(paises=>{
      
      (paises)
      this.paises = paises;
    },(err)=>{
      this.error = true;
      this.paises = [];
    })
  }

  sugerencia( event : any )
  {
    this.termino = event;
    this.paisesSugeridos = [];
    this.mostrarSugerencias = true;
    this.error = false;
    // TODO: crear sugerencias
    // console.log( "Debouncer : " ,  event );

    this.paisService.buscarPais( event )
        .subscribe( paises => { this.paisesSugeridos = paises.splice( 0,4 ) } , err =>
        {
          this.paisesSugeridos = [];
        } )
        
  }
}
