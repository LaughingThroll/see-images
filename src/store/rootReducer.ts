import { combineReducers } from '@reduxjs/toolkit'

import { images } from './slices/imagesSlice'

export  const rootReducer = combineReducers({
  images: images.reducer
})