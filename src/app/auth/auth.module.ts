import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule, State } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects} from './auth.effect';
import { HttpClientModule } from '@angular/common/http';




const initialState = { loggedIn: false, userData: null}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('auth', (state = initialState, action) => {
      switch (action.type) {
        case "[Auth] LoggedIn": 
          return {
            ...state,
            loggedIn: true,
            userData: action.payload
          }


        case "[Auth] LoggedOut": 
          return {
            ...state,
            loggedIn: false,
            userData: null
          }
      
        default:
          return state;
      }
      
    }),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
