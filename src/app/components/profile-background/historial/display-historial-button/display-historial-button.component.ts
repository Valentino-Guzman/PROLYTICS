import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-historial-button',
  imports: [CommonModule],
  templateUrl: './display-historial-button.component.html',
  styleUrl: './display-historial-button.component.css'
})
export class DisplayHistorialButtonComponent {
  @Input() win: string = '';
  @Input() isRotated: boolean = false;
  @Output() toggle = new EventEmitter<void>();

}
