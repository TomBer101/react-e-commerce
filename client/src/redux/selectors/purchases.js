import {createSelector} from 'reselect'

const getAllPurchasesState = state => state.purchases.purchases;
export const getPurchasesByUser = createSelector(
    [getAllPurchasesState, (state, userId) => userId],
    (allPurchases, userId) => {
        console.log('All purchases: ', allPurchases);
        if (!userId) return [];
        return allPurchases.filter(purchase => purchase.userId === userId);
    }
)

export const getAllPurchasesByProduct = createSelector(
    [getAllPurchasesState, (state, productId) => productId],
    (allPurchases, productId) => {
        if(!productId) return [];
        return allPurchases.filter(purchase => purchase.productId === productId);
    }
)