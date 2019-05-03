import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


// NgRx
import { StoreModule } from '@ngrx/store';


// Modules
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: (state: number = 0, action) => {

        let count = state;

        switch (action.type) {
          case "[Counter] Add":
            return  count += action.payload;

          case "[Counter] Subtract":
            return  count -= action.payload;

          default:
            return state
        }
      }
    }),

    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),


    CoreModule,
    AuthModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
