import { createSlice } from '@reduxjs/toolkit'
import  { products } from  '../../mock'

const radarFitSlice = createSlice({
    name: 'radarFit',
    initialState: {
        isCartOpen: false,
        wallet: 1200,
        products: products,
        cartItens: [{
        }],
    }, reducers: {
        addItens: (prevState, action) => {
            prevState.cartItens.push(action.payload)
        },
        openCart: (state, action) => {
          return {...state, isCartOpen: action.payload}
        }
    }
})

export const { openCart } = radarFitSlice.actions;
export const { addItens } = radarFitSlice.actions;
export default radarFitSlice.reducer;