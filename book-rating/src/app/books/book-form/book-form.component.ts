import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

/**
 * TODO:
 * Validierung ✅
 * Fehlermeldungen ✅
 * Submit-Button ✅
 * Submit-Btton deaktivieren ✅
 * Formular abschicken ✅
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
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('', [
        Validators.required,
        Validators.min(2)
      ])
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.invalid && control.touched;
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    return control.hasError(errorCode) && control.touched;
  }



  submitForm(): void {
    const newBook: Book = {
      ...this.bookForm.value,
      rating: 1
    };

    this.submitBook.emit(newBook);
  }

}
