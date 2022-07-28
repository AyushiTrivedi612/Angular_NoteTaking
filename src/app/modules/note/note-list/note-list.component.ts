import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  @Output() selectedNote = new EventEmitter<any>();
  @Output() onAddNote = new EventEmitter<any>();

  forms:any=[];
  shows: any = [];

  constructor(private router: Router) {
    var data: any = localStorage.getItem("note-details");
    if (data)
      this.shows = JSON.parse(data);

      // window.location.reload();
  }
  ngOnInit(): void {

  
  }
  

  onNoteClick(note: any) {
    this.selectedNote.emit(note);
  }

  onAddClick() {
    this.onAddNote.emit(true);
  }

 
}