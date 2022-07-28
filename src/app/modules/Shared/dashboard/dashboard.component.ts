import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedNote: any;
  addNote: boolean = false;
 

  constructor(private router: Router) {

      
   }

  ngOnInit() {
    

   
  }

  onNoteClick(data: any) {
    console.log('note::', data);
    this.addNote = false;
    this.selectedNote = data;
  }

  onAddNote(data: boolean) {
    this.addNote = true;
  }
}