import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>

    <button (click)="sumar()">+1</button>
    <button (click)="restar()">-1</button>
    <span>{{ numero }}</span>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;

  // base: number = 5;

  sumar() {
    this.numero++;
  }

  restar() {
    this.numero--;
  }
}
