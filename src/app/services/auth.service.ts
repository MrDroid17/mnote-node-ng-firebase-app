import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  /**
  * URL List
  */
  ADD_NOTE: string = environment.serverUrl + '/api/note/add';
  DELETE_NOTE: string = environment.serverUrl + '/api/note/';
  EDIT_NOTE: string = environment.serverUrl + '/api/note/';
  GET_ALL_NOTE: string = environment.serverUrl + '/api/note/all';

  constructor(private http: Http,
    private firebaseAuth: AngularFireAuth,
    private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  /***
   * gmail login
   */
  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      this.router.navigate(['/dashboard']);
      return true;
    }
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }


  /**
 * all note
 */
  getAllNotes() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.GET_ALL_NOTE, { headers: headers }).pipe(map(res => res.json()));
  }

  // add note
  addNote(note) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.ADD_NOTE, note, { headers: headers }).pipe(map(res => res.json()));
  }

  // update note
  updateNote(note, note_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.EDIT_NOTE + note_id, note, { headers: headers }).pipe(map(res => res.json()));
  }

  // delete note
  deleteNote(note_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.DELETE_NOTE + note_id, { headers: headers }).pipe(map(res => res.json()));
  }
}
