import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({ providedIn: 'root'})
export class CartEffects {

constructor(private http: HttpClient, private actions$: Actions) { }

@Effect()
addProduct$ = this.actions$.pipe(
    ofType('[Cart] Add Product'),
    map((action: any) => {
      // Just for example
      return { type: "[Cart] Product has been added", payload: action.payload}
    })
    )



}
