import { NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault,NgStyle,FormsModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
  color: string = 'red';
  @Output() colorChangeEvent = new EventEmitter<string>();

  emitColor(){
    this.colorChangeEvent.emit(this.color);
  }
}
