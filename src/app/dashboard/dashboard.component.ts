import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Note } from '../interface/notes';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
import { ValidateService } from '../services/validate.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notes: Note[];
  button_title = 'Add';
  dataSource;
  note: string;
  author: string;
  note_array_label: string[] = ['note', 'author', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  message = 'Are you sure to delete this note ?';

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // getting all notes
    this.getAllNotes();
  }

  // delete species function
  onClickDeleteNote(note_id) {
    if (confirm(this.message)) {
      this.authService.deleteNote(note_id).subscribe(data => {
        if (data) {
          this.getAllNotes();
          swal('Note deleted successfully.');
        } else {
          swal(data.message);
        }
      }, err => {
        return false;
      });
    }
  }

  // add note function
  addNewNote() {
    // tslint:disable-next-line:no-shadowed-variable
    const Note = {
      note: this.note,
      author: this.author
    };

    // check validation
    if (!this.validateService.validateNote(Note)) {
      swal('please enter note and author name.');
      return false;
    }

    this.authService.addNote(Note).subscribe(data => {
      if (data.success) {
        this.note = ''; // black the field after input
        this.author = '';
        this.getAllNotes();  // get all species list
        swal('New Note added.');
        this.button_title = 'Add';
      } else {
        swal(data.message);
      }
    }, err => {
      return false;
    });
  }

  private getAllNotes() {
    this.authService.getAllNotes().subscribe(data => {
      if (data.length !== 0) {
        this.notes = data;
        this.dataSource = new MatTableDataSource<Note>(this.notes);
        this.dataSource.paginator = this.paginator;
      } else {
        // handle else condition
      }
    }, err => {
      return false;
    });
  }

}
