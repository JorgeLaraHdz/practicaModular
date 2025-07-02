import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Database {
  constructor(private http:HttpClient) { }
  
  public getPokemon(pokemon:String):Observable<any>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon/"+pokemon);
  }
  
}
