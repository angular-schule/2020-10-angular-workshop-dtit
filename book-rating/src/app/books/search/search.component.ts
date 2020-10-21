import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl;

  constructor(private bs: BookStoreService) { }

  ngOnInit(): void {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(1000),
      switchMap(term => this.bs.search(term))
    ).subscribe(value => console.log(value));

    // Suchbegriff mindestens 3 Zeichen
    // nur weiter, wenn Nutzer für 1 s die Finger still hält
    // Suchbegriff zum Server schicken this.bs.search()
    // AsyncPipe nutzen
    // Extra: Ladeindikator
  }

}
