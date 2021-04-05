import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap , tap } from "rxjs/operators";
import { Country } from '../../interfaces/interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais !: Country;

  constructor(private activatedRoute : ActivatedRoute,
              private paisService : PaisService ) { }

  ngOnInit(): void {
    //Con RxJS
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPais(id) ),
      tap( console.log )
    )
    .subscribe(pais=>{
      this.pais = pais;
    })
    
    //forma vieja
    // this.activatedRoute.params.subscribe( ({id})=>{
    //   (id);

    //   this.paisService.getPais(id).subscribe(res=>{
    //     (res);
    //   })
    // })
  }

}
