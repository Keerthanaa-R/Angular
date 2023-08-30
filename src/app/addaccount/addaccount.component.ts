import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { Account } from '../account';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent {
  service: AccountserviceService;
  account: Account;

  constructor(service: AccountserviceService, private router: Router) {
    this.service = service;
    this.account = new Account();
  }
  getAccountDetails() {
    this.service.addAccount(this.account).subscribe();
    this.account = new Account();
    this.reDirectTOView();
  }
  reDirectTOView() {
    this.router.navigate(['viewaccount']).then(() => window.location.reload());
  }



}
