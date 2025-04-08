import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-historial',
  imports: [CommonModule],
  templateUrl: './display-historial.component.html',
  styleUrl: './display-historial.component.css'
})
export class DisplayHistorialComponent {
  @Input() win: string = '';
  isRotated = false;
}
