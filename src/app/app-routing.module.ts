import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/Authentication/login/login.component';
import { SignupComponent } from './modules/Authentication/signup/signup.component';
import {SideMenuComponent} from './modules/Shared/side-menu/side-menu.component';
import { DashboardComponent } from './modules/Shared/dashboard/dashboard.component';
import { AddNotesComponent } from './modules/note/add-notes/add-notes.component';
import { HeaderComponent } from './modules/Shared/header/header.component';
import { NoteDetailsComponent } from './modules/note/note-details/note-details.component';



const routes: Routes = [
  {
    path:'signup',component:SignupComponent
   },{
     path:'',redirectTo:'/',pathMatch:"full"
   },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'addnotes',component:AddNotesComponent
  },
  {
    path:'sidemenu',component:SideMenuComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'notedetails',component:NoteDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
