import { NgIf } from '@angular/common';
import { AfterViewChecked, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoadingSpinnerComponent } from "../loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-loading',
  imports: [NgIf, LoadingSpinnerComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnChanges, AfterViewChecked {
  @Input() loading = true;
  private scrolled = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['loading'] && !changes['loading'].currentValue) {
      this.scrolled = false;
    }
  }

  ngAfterViewChecked(): void {
    if (!this.loading && !this.scrolled) {
      window.scrollTo(0, 0);
      this.scrolled = true;
    }
  }
}
