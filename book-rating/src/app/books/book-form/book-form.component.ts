import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../shared/book';

/**
 * TODO:
 * Validierung
 * Fehlermeldungen
 * Submit-Button
 * Submit-Btton deaktivieren
 * Formular abschicken
 * Buch erstellen
 * HTTP
 * Redirect zur Detailseite
 */


@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  @Output() submitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      isbn: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl('')
    });
  }

  submitForm(): void {
    this.submitBook.emit(); // TODO
  }

}
