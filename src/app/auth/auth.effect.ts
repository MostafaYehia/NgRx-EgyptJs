import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({ providedIn: 'root'})
export class AuthEffects {

constructor(private http: HttpClient, private actions$: Actions) { }

@Effect()
login$ = this.actions$.pipe(
    ofType('[Auth] Login'),
    switchMap((action) => {
      // Just for example
      return this.http.get("https://reqres.in/api/login").pipe(
        map((res: any) => {
          return { type: "[Auth] LoggedIn", payload: { username: "Ahmed", token: res.token}}
        },
        catchError(err => {
          return of({ type:"[Auth] Error", payload: err})
        })
      ))
    })
    )


    @Effect()
    logout$ = this.actions$.pipe(
            ofType('[Auth] Logout'),
            map((action) => {
              // Just for example
              return { type: "[Auth] LoggedOut", payload: null }
            })
        )


      
 



}
