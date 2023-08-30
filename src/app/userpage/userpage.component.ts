import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { Account } from '../account';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  service: UserserviceService
  account: Account;
  constructor(service: UserserviceService, private router: Router) {
    this.service = service;
    this.account = new Account();

  }
  viewSingleUserDetails() {
    this.service.getUserByAccountId(this.account.accountid).subscribe((data) => {
      this.account = data;
      this.reDirectToViewSingleUser();
    });
  }
  reDirectToViewSingleUser() {
    this.router.navigate(['viewSingleUser', this.account]).then(() => {
      window.location.reload();
    });
  }
  ngOnInit(): void {
      
  }

}
