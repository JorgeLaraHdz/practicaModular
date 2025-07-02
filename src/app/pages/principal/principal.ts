import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Table } from "../../components/table/table";
import { Footer } from "../../components/footer/footer";
import { Database } from '../../services/database';
import {FormsModule} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-principal',
  imports: [Navbar, Table, Footer, FormsModule],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

  pokemon={
    nombre:'',
    imagen:'',
    tipo:''
  }
  estatus:boolean=true;
  nombre:string='';

  constructor(private database:Database){}

  ngOnInit(){
    this.pokemon.nombre = '';
  }
  atrapaPokemon(){
    this.database.getPokemon(this.nombre).subscribe((res:any)=>{
      this.pokemon.nombre = res.name;
      this.pokemon.imagen = res.sprites.other['official-artwork'].front_default;
      this.pokemon.tipo=res.types[0].type.name;
    },(error:  HttpErrorResponse)=>{
      console.error('Error fetching Pokemon: ',error.status);
      this.pokemon.nombre = '';
    })
  }
}
