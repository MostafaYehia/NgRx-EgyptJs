import { createSelector, createFeatureSelector } from '@ngrx/store';

const getCart = createFeatureSelector('cart')

export const getTotalPrice = createSelector(getCart, (state: []) => {

    const products= [...state];
    let price = 0;

    products.forEach((product: any) => {
        price += product.price
    });

    return price  || 0
})

