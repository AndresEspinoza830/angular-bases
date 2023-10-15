import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola Counter</h1>
    <button (click)="resetCounter()">Reset Value</button>
    <button (click)="incrementCounter(2)">Incrementar contador</button>
    <p>{{ counter }}</p>
    <button (click)="decrementCounter(2)">Decrementar contador</button> `,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 4;

  public incrementCounter(value: number): void {
    if (this.counter < 10) this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 4;
  }

  public decrementCounter(value: number): void {
    if (this.counter > 0) {
      this.counter -= value;
    }
  }
}
