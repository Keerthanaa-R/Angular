import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  service: UserserviceService;
  account: Account;
  amount: number;
  accountid: number;
  username: string;

  constructor(service: UserserviceService, private router: Router) {
    this.service = service;
    this.account = new Account();
    this.amount = 0;
    this.accountid = 0;
    this.username = '';
  }
  transferAmount() {
    console.log(this.accountid, this.amount, this.account.username);
    this.service.transfer(this.accountid, this.amount, this.account.username, this.account).subscribe();
    this.reDirectToUserPage();
  }
  reDirectToUserPage() {
    this.router.navigate(['userPage']).then(() => {
      window.location.reload();
    });
  }
  ngOnInit(): void {
      
  }
}
