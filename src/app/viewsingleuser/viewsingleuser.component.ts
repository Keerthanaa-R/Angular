import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewsingleuser',
  templateUrl: './viewsingleuser.component.html',
  styleUrls: ['./viewsingleuser.component.css']
})
export class ViewsingleuserComponent implements OnInit {
  accountid: number;
  account: Account;
  service: UserserviceService;
  constructor(service: UserserviceService, private route: ActivatedRoute) {
    this.accountid = this.route.snapshot.params['accountid'];
    this.service = service;
    this.account = new Account();
  }
  ngOnInit(): void {
    this.accountid = this.route.snapshot.params['accountid'];
    this.account = new Account();
    this.service.getUserByAccountId(this.accountid).subscribe(data => {
      this.account = data;
    });
  }

}
