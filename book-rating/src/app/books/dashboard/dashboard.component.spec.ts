import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock;

  beforeEach(async () => {
    ratingMock = {
      rateUp: () => book
    };

    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 5,
      price: 4
    };

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service for rateUp()', () => {
    const rs = TestBed.inject(BookRatingService); // alt: TestBed.get()
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.doRateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalled();
  });
});
