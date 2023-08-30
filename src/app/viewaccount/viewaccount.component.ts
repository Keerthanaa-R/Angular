import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent implements OnInit{

service: AccountserviceService;
account:Account[];


  constructor(service:AccountserviceService) { 

    this.service=service;
    this.account=[];
  }
  ngOnInit(): void {
     this.service.viewAccount().subscribe((data)=>(this.account=data));
    
      
  }

}
