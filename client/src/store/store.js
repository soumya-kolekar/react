import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import adminProductsSlice from './admin/products-slice';
import shopProductSlice from "./shop/products-slice"
import shopCartSlice from "./shop/cart-slice";
import adminOrderSlice from "./admin/order-slice";
import shopReviewSlice from "./shop/review-slice";
import shopSearchSlice from "./shop/search-slice";
import shopOrderSlice from "./shop/order-slice";
import shopAddressSlice from "./shop/address-slice";

import commonFeatureSlice from "./common-slice";

const store = configureStore({
    reducer:{
        auth : authReducer,
        adminProducts:adminProductsSlice,
        adminOrder: adminOrderSlice,
        shopProducts:shopProductSlice,
        shopOrder: shopOrderSlice,
        shopCart:shopCartSlice,
        shopSearch: shopSearchSlice,
        shopAddress: shopAddressSlice,
        shopReview: shopReviewSlice,
        commonFeature: commonFeatureSlice,
    },
});

export default store;