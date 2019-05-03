import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products$;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.products$ = this.store.select(  (state) => state.cart  )
  }

}
