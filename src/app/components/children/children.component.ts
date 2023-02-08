import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() title?: string;

  @Output() titleChange = new EventEmitter<string>();

  pepe:string = 'hola';

  emitTitleChange(){
    this.titleChange.emit(this.title);
  }
}
