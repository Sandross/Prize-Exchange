import { configureStore } from '@reduxjs/toolkit'
import radarFitSlice from './reducers'

export default configureStore({ reducer: {
    radarFitSlice
}})