import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { HomeComponent } from './home/home.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { UserloginpageComponent } from './userloginpage/userloginpage.component';
import { AdminupdatepasswordComponent } from './adminupdatepassword/adminupdatepassword.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ViewsingleuserComponent } from './viewsingleuser/viewsingleuser.component';
import { TransferComponent } from './transfer/transfer.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewaccountComponent,
    AddaccountComponent,
    HomeComponent,
    ViewuserComponent,
    UpdateaccountComponent,
    DeleteaccountComponent,
    DeleteuserComponent,
    AdminloginpageComponent,
    UserloginpageComponent,
    AdminupdatepasswordComponent,
    UserpageComponent,
    ViewsingleuserComponent,
    TransferComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
