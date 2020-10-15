import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private rs: BookRatingService) {}

  ngOnInit(): void {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        rating: 5,
        price: 36.9
      },
      {
        isbn: '456',
        title: 'React',
        description: 'Das andere Framework',
        rating: 3,
        price: 32.9
      }
    ];
  }

  doRateUp(book: Book): void {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b);
  }

}


