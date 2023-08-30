import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  service: UserserviceService;
  user: User;
  constructor(service: UserserviceService, private router: Router, private route: ActivatedRoute) {
    this.service = service;
    this.user = new User();

  }
  // getDeleteUserDetails() {
  //   this.service.deleteUser(this.user).subscribe();
  //   this.reDirectToView();
  // }
  reDirectToView() {
    this.router.navigate(['viewUser']).then(() => window.location.reload());
  }
  ngOnInit(): void {
    this.user.uid = this.route.snapshot.params['uid'];
    console.log(this.user.uid);
    this.service.deleteUser(this.user).subscribe();
    this.reDirectToView();

  }

}
