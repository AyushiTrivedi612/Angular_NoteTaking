import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './modules/Authentication/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/Authentication/login/login.component';
import { HeaderComponent } from './modules/Shared/header/header.component';
import { SideMenuComponent } from './modules/Shared/side-menu/side-menu.component';
import { NoteDetailsComponent } from './modules/note/note-details/note-details.component';
import { AddNotesComponent } from './modules/note/add-notes/add-notes.component';
import { DashboardComponent } from './modules/Shared/dashboard/dashboard.component';
import { LocalDateValueAccessorModule} from 'angular-date-value-accessor';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { NoteListComponent } from './modules/note/note-list/note-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    SideMenuComponent,
    NoteDetailsComponent,
    AddNotesComponent,
    DashboardComponent,
    NoteListComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LocalDateValueAccessorModule,
    DateValueAccessorModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
