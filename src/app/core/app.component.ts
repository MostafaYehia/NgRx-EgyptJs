import { Component, OnInit } from '@angular/core';
import { Store, createFeatureSelector } from '@ngrx/store';
import { getTotalPrice } from '../cart/selectors';


const getCounter = createFeatureSelector('counter');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-egyptjs';

  totalPrice$;
  counter$;

  constructor(private store: Store<any>) {
    
  }

  ngOnInit() {
    // Select counter state
      this.counter$ = this.store.select(getCounter)

    // Get totalPrice
      this.totalPrice$ = this.store.select(getTotalPrice)
  }
}
