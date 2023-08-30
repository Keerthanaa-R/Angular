import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy} from '@angular/router';
import { Account } from '../account';
import { AccountserviceService } from '../accountservice.service';


@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent implements OnInit {
  service: AccountserviceService;
  account: Account;
  constructor(service: AccountserviceService, private router: Router,private route:ActivatedRoute) {
    this.service = service;
    this.account = new Account;
  }
  getUpdateAccountDetails() {
    this.service.updateAccount(this.account).subscribe();
    this.account = new Account();
    this.reDirectTOView();
  }
  reDirectTOView() {
    this.router.navigate(['viewaccount']).then(() => window.location.reload());
  }
  ngOnInit(): void {
    this.account.accountid = this.route.snapshot.params['accountid'];
    this.account.username = this.route.snapshot.params['username'];
    this.account.mailid = this.route.snapshot.params['mailid'];
    this.account.mobileno = this.route.snapshot.params['mobileno'];
    this.account.accounttype = this.route.snapshot.params['accounttype'];
    this.account.accountbalance = this.route.snapshot.params['accountbalance'];
    this.account.password = this.route.snapshot.params['password'];



  }

}
