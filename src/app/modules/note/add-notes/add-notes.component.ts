import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, AbstractControlDirective } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {



  addNotesForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl('')
  });
  date: any;


  constructor(private toastr:ToastrService) {

  }


  onSubmit() {

    this.date = new Date().toDateString(),

      this.addNotesForm.patchValue({
        date: this.date,
      })
    let arr = [];
    let data: any = localStorage.getItem("note-details");
    if (data) {
      arr = JSON.parse(data)
    }
    arr.push(this.addNotesForm.value);
    localStorage.setItem('note-details', JSON.stringify(arr));
    this.toastr.success("Note is added Successfully...")
    this.addNotesForm.reset();
    

  }

  reloadCurrentPage() {

    window.location.reload();

  }

  ngOnInit(): void {

  }

}



