import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList:Character[] = [{
    id: uuid(),
    name: 'Trunks',
    power: 10
  }];
  @Output()
  public onDelete = new EventEmitter<string>();

  onDeleteCharacter( id?: string ):void {
    //TODO: Emitir el ID del personaje
    if( !id ) return;
    this.onDelete.emit(id);

  }
}
