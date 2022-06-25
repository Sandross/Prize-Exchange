import { createSlice } from '@reduxjs/toolkit'

const radarFitSlice = createSlice({
    name: 'radarFit',
    initialState: {
        products: [],
        cartItens: [{
            name: 'Pão',
            id: 1,
            price: 'R$5,99'
        }],
    }, reducers: {
        addItens: (prevState, action) => {
            prevState.cartItens.push(action.payload)
        },
    }
})

export const { addItens } = radarFitSlice.actions;
export default radarFitSlice.reducer;