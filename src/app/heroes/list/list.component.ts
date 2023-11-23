import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiterman','Ironman','Holk','Thor','Mole','Hawkeye'];
  public deleteHero?: string ;

  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();
  }
}
