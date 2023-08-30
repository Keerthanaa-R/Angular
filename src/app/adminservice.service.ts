import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  adminLoginUrl: string;
  passwordUrl: string;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.adminLoginUrl = 'http://localhost:8080/adminLogin';
    this.passwordUrl = 'http://localhost:8080/updateAdmin';
  }
  public adminLogin(admin: Admin) {
    return this.http.post<boolean>(this.adminLoginUrl, admin);
  }
  public updatePassword(admin: Admin) {
    return this.http.put<Admin>(this.passwordUrl,admin);
  }
}
