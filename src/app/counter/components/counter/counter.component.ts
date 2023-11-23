import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h3>
  Counter: {{ counter }}
</h3>
<button (click)="increaseBY(1)">+1</button>
<button (click)="reset()">RESET</button>
<button (click)="increaseBY(-1)">-1</button>
`,
})
export class CounterComponent{
  counter = 10;

  increaseBY(value: number):void{
    this.counter += value;
  }

  reset(): void{
    this.counter = 10;
  }
}

