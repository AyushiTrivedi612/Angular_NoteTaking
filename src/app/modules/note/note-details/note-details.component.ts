import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  @Input() note:any;
  // @Input() form:any;
    
  constructor(private router:Router) { 
    
  }
  ngOnInit(): void {
    // console.log('note::',this.note);
    
   }
  

}

