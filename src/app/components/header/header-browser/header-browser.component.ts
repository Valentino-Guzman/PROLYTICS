import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServiceService } from '../../../services/account-service.service';
import { Account } from '../../../interfaces/account';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-header-browser',
  imports: [FormsModule],
  templateUrl: './header-browser.component.html',
  styleUrl: './header-browser.component.css'
})
export class HeaderBrowserComponent {
  name:string = '';
  gameName: string = '';
  hashtag: string = '';
  account: Account | null = null; 

  constructor(
    private accountService: AccountServiceService,
    private sharedData: SharedDataService
  ) {}

  browseAccount() {
    if (this.name.includes('#')){
      this.gameName = this.name.split('#')[0];
      this.hashtag = this.name.split('#')[1];
    }

    this.accountService.gameName = this.gameName;
    this.accountService.hashtag = this.hashtag;

    this.accountService.getAccount().subscribe(
      (data:Account) => {
      this.sharedData.setAccountData(data);
      },
    )
    this.name = '';
  }
}
  

