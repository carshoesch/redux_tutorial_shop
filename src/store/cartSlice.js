import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
        },
        removeFromCart(state, action) {
            const itemIdToRemove = action.payload;
            return state.filter((item) => item.id !== itemIdToRemove);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
