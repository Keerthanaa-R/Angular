import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-adminloginpage',
  templateUrl: './adminloginpage.component.html',
  styleUrls: ['./adminloginpage.component.css']
})
export class AdminloginpageComponent {
  service: AdminserviceService;
  admin: Admin;

  constructor(service: AdminserviceService, private router: Router) {
    this.service = service;
    this.admin = new Admin();

  }
  checkLogin() {
    this.service.adminLogin(this.admin).subscribe((data) => {
      if (data == true) {
        this.redirectToView();
      } else {
        alert('Invalid Credentials!!');
        this.redirectToHome();
      }
    });
  }
  redirectToView() {
    this.router.navigate(['viewaccount']).then(() => {
      window.location.reload();
    });
  }
  redirectToHome() {
    this.router.navigate(['adminLogin']).then(() => {
      window.location.reload();
    });


  }

}

