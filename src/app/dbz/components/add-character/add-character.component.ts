import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public newCharacter: EventEmitter<Character> = new EventEmitter();


  public characterN:  Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if( this.characterN.name.length === 0 ) return;

    this.newCharacter.emit(this.characterN);

    this.characterN = { name: '', power: 0};
  }
}
