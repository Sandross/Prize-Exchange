import { createSlice } from '@reduxjs/toolkit'
import  { products } from  '../../mock'

const radarFitSlice = createSlice({
    name: 'radarFit',
    initialState: {
        wallet: 1200,
        products: products,
        cartItens: [{
        }],
    }, reducers: {
        addItens: (prevState, action) => {
            prevState.cartItens.push(action.payload)
        },
    }
})

export const { addItens } = radarFitSlice.actions;
export default radarFitSlice.reducer;