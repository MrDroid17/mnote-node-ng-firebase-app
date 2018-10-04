import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateNote(note) {
    if (note.note === undefined || note.author === undefined) {
      return false;
    } else {
      return true;
    }
  }
}
