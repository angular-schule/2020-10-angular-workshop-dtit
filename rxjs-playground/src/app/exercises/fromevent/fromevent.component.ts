import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent implements OnInit {

  currentWidth;

  ngOnInit() {

    /******************************/

    const windowInnerwidth$ = fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      startWith(0),
      map(() => window.innerWidth),
    );

    windowInnerwidth$.subscribe(width => this.currentWidth = width);

    /******************************/
  }

}
