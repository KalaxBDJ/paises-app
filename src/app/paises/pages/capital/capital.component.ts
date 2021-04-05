import { Component   } from '@angular/core';
import { Country } from '../../interfaces/interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent {
  error : boolean = false;
  termino : string = '';
  paises : Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar(termino : string)
  {
    this.error = false;
    this.termino = termino;
    (this.termino);

    this.paisService.buscarCapital(this.termino).subscribe(paises=>{
      
      (paises)
      this.paises = paises;
    },(err)=>{
      this.error = true;
      this.paises = [];
    })
  }

}
