import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  service: UserserviceService;
  user: User[];

  constructor(service: UserserviceService) {
    this.service = service;
    this.user = [];
  }
  ngOnInit(): void {
    this.service.viewUser().subscribe((data) => (this.user = data));
  }
}
