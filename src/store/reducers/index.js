import { createSlice } from '@reduxjs/toolkit'

const radarFitSlice = createSlice({
    name: 'radarFit',
    initialState: {
        products: [],
        cartItens: [],
    }, reducers: {
        addItens: (prevState, action) => {
            prevState.products.push(action.payload)
        },
    }
})

export const { addItens } = radarFitSlice;
export default radarFitSlice;