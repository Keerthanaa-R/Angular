import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { AdminupdatepasswordComponent } from './adminupdatepassword/adminupdatepassword.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { UserloginpageComponent } from './userloginpage/userloginpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { ViewsingleuserComponent } from './viewsingleuser/viewsingleuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'viewaccount', component: ViewaccountComponent },
{ path: 'Addaccount', component: AddaccountComponent },
{ path: 'viewUser', component: ViewuserComponent },
{ path: 'updateAccount/:accountid/:username/:mailid/:mobileno/:accounttype/:accountbalance/:password', component: UpdateaccountComponent },
{ path: 'deleteAccount/:accountid', component: DeleteaccountComponent },
{ path: 'deleteUser/:uid', component: DeleteuserComponent },
{ path: 'adminLogin', component: AdminloginpageComponent },
{ path: 'userLogin', component: UserloginpageComponent },
{ path: 'adminupdatePassword', component: AdminupdatepasswordComponent },
{ path: 'userPage', component: UserpageComponent },
{ path: 'viewSingleUser', component: ViewsingleuserComponent },
{ path: 'transfer', component: TransferComponent },
{ path: 'aboutUs', component: AboutusComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
