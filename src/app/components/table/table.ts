import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  // En tu componente.ts
productos = [
  { id: 1, nombre: 'Laptop', precio: 15000 },
  { id: 2, nombre: 'Smartphone', precio: 8000 },
  { id: 3, nombre: 'Tablet', precio: 6000 },
];

}
