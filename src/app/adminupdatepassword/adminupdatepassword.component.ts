import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Admin } from '../admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminupdatepassword',
  templateUrl: './adminupdatepassword.component.html',
  styleUrls: ['./adminupdatepassword.component.css']
})
export class AdminupdatepasswordComponent implements OnInit {
  service: AdminserviceService;
  admin: Admin;
  constructor(service: AdminserviceService, private router: Router) {
    this.service = service;
    this.admin = new Admin();
  }
  getUpdatePasswordDetails() {
    this.service.updatePassword(this.admin).subscribe();
    this.admin = new Admin();
    this.reDirectToAdmin();
  }
  reDirectToAdmin() {
    this.router.navigate(['adminLogin']).then(() => window.location.reload());
  }
  ngOnInit(): void {

  }

}
