import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload;
        },
    },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        const apiUrl = process.env.REACT_APP_API_URL;
        const product = await axios.get(apiUrl);
        const result = product.data;
        dispatch(fetchProducts(result));
    };
}
