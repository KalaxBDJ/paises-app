import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl : string = 'https://restcountries.eu/rest/v2'
  private shortFields : string = '?fields=flag;name;population;capital;alpha2Code';

  constructor( private http:HttpClient ) { }

  buscarPais( termino:string ) : Observable<Country[]>
  {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino : string ) : Observable<Country[]>
  {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

  getPais( termino : string ) : Observable<Country[]>
  {
    const url = `${this.apiUrl}/alpha/${termino}`;

    return this.http.get<Country[]>(url);
  }

  getRegion( termino : string ) : Observable<Country[]>
  {
    
    const url = `${this.apiUrl}/region/${termino}`+this.shortFields;

    return this.http.get<Country[]>(url);
  }

}
