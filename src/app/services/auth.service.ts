import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   /**
   * URL List
   */
  // ADD_NOTE: string = environment.serverUrl + '/api/note/add';
  // DELETE_NOTE: string = environment.serverUrl + '/api/note/';
  // EDIT_NOTE: string = environment.serverUrl + '/api/note'/;

  constructor(private http: Http) { }

    /**
   * all note
   */
  getAllNotes() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/api/note').pipe(map(res => res.json()));
  }

  // add note
  addNote(note) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/api/note/add', note, { headers: headers }).pipe(map(res => res.json()));
  }

  // update note
  updateNote(note, note_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:4000/api/note/' + note_id, note, { headers: headers }).pipe(map(res => res.json()));
  }

  // delete note
  deleteNote(note_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://localhost:4000/api/note/' + note_id, { headers: headers }).pipe(map(res => res.json()));
  }
}
