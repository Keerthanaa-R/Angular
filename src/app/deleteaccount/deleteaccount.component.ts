import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
  service: AccountserviceService;
  account: Account;
  constructor(service: AccountserviceService, private router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.account = new Account();
  }
  // getDeleteDetails() {
  //   this.service.delete(this.account).subscribe();
  //   this.reDirectToView()

  // }
  reDirectToView() {
    this.router.navigate(['viewaccount']).then(() => window.location.reload());
  }
  ngOnInit(): void {
    this.account.accountid = this.route.snapshot.params['accountid'];
    this.service.delete(this.account).subscribe();
   this.reDirectToView()

  }
}
