import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './containers/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './cart.effects';




@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', (state = [], action) => {

      switch (action.type) {
        case "[Cart] Product has been added": {
          console.log('Action payload', action.payload)
          return [
            ...state,
            action.payload
          ]
        }
          
      
        default:
          return state;
      }
    }),
    EffectsModule.forFeature([CartEffects])
  ],
  declarations: [CartComponent, ProductComponent],
  exports: [CartComponent, ProductComponent]
})
export class CartModule { }
