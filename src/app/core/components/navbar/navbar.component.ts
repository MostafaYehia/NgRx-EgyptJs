import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';


const authSelector = createFeatureSelector('auth')
const isLoggedIn = createSelector(authSelector, (state:any) => state.loggedIn)

let id = 0;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {


  loggedIn = false;
  subs = [];


  constructor(private store: Store<any>) { }

  ngOnInit() {

    this.subs.push(

      this.store.select(isLoggedIn).subscribe(loggedin => {
        this.loggedIn = loggedin
      })

    )

  }


  addProduct () {
    this.store.dispatch({type: "[Cart] Add Product", payload: {
      title: `Product No.${++id}`,
      price: Math.floor(Math.random() * 200)
    }})
 }

  countUp () {
      this.store.dispatch({type: "[Counter] Add", payload: 2})
  }

  countDown () {
    this.store.dispatch({type: "[Counter] Subtract", payload: 1})
  }


  login () {
    this.store.dispatch({type: "[Auth] Login", payload: { username: "Ahmed", token: 12345}})
  }

  logout () {
    this.store.dispatch({type: "[Auth] Logout", payload: null})
  }


  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
