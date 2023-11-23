import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 } from 'uuid';




@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: v4(),
    name: 'Krillin',
    power: 1000
  },{
    id: v4(),
    name: 'Goku',
    power: 9500
  },{
    id: v4(),
    name: 'Vegetta',
    power: 7500
  }];


  newCharacter(character: Character): void{
    const newCharacter: Character = { id: v4(), ...character  }

    console.log(character);
    this.characters.push(newCharacter);
  }

  // deleteIndex(i:number) {
  //   this.characters.splice(i, 1);
  // }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter( character => character.id !== id)
  }
}
