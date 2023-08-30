import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';


@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  viewUrl: string;
  addUrl: string;
  updateUrl: string;
  deleteUrl: string;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
    this.viewUrl = 'http://localhost:8080/admin/viewAccount';
    this.addUrl = 'http://localhost:8080/admin/addAccount';
    this.updateUrl = 'http://localhost:8080/admin/updateAccount';
    this.deleteUrl = 'http://localhost:8080/admin/deleteAccount';


  }
  public viewAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.viewUrl);
  }
  public addAccount(account: Account) {
    return this.http.post<Account>(this.addUrl, account);
  }
  public updateAccount(account: Account) {
    return this.http.put<Account>(this.updateUrl, account);
  }
  public delete(account:Account){
    return this.http.delete<Account>(this.deleteUrl+"/"+account.accountid)
  }


}
