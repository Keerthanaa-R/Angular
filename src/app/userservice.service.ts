import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Account } from './account';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  viewUrl: string;
  deleteUrl: string;
  userLoginUrl: string;
  http: HttpClient;
  viewSingleUserUrl:string;
  getUserUrl:string;
  transferUrl:string;
  

  constructor(http: HttpClient) {
    this.http = http;
    this.viewUrl = 'http://localhost:8080/admin/viewUser';
    this.deleteUrl = 'http://localhost:8080/admin/deleteUser';
    this.userLoginUrl = 'http://localhost:8080/userLogin';
    this.viewSingleUserUrl='http://localhost:8080/user/viewDetail';
    this.getUserUrl='http://localhost:8080/searchAccount';
    this.transferUrl='http://localhost:8080/transfer';
  
  }
  public viewUser(): Observable<User[]> {
    return this.http.get<User[]>(this.viewUrl);
  }
  public deleteUser(user: User) {
    return this.http.delete(this.deleteUrl + "/" + user.uid);
  }
  public userLogin(user: User) {
    return this.http.post<boolean>(this.userLoginUrl, user);
  }
  public viewSingleUser():Observable<User>{
    return this.http.get<User>(this.viewSingleUserUrl);
  }
  public getUserByAccountId(accountid:number):Observable<Account>{
    return this.http.get<Account>(this.getUserUrl+"/"+accountid);
  }
  public transfer(accountid:number,amount:number,username:string,account:Account){
    return this.http.put(this.transferUrl+"/"+accountid+"/"+amount+"/"+username,account);
  }
}
