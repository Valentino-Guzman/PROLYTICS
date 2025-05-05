import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tier-list-champions-buttons',
  imports: [NgFor, NgIf],
  templateUrl: './tier-list-champions-buttons.component.html',
  styleUrl: './tier-list-champions-buttons.component.css'
})
export class TierListChampionsButtonsComponent {

  roles = ['ALL', 'TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'];
  selectedRole: string = 'ALL';
  @Input() showRoleName: boolean = false;

  rolesImg: Record<string, string> = {
      "TOP": "svg/role/top.svg",
      "JUNGLE": "svg/role/jungle.svg",
      "MIDDLE": "svg/role/midlane.svg",
      "BOTTOM": "svg/role/adc.svg",
      "UTILITY": "svg/role/support.svg",
      "ALL": "svg/role/fill.svg"
  }
  
  @Output() roleSelected = new EventEmitter<string>();

  filterByRole(role: string) {
    this.selectedRole = role;
    this.roleSelected.emit(this.selectedRole);
  }

  getRoleIcon(role: string): string {
    return this.rolesImg[role] || '';
  }
  
}
