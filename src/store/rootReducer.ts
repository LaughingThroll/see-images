import { combineReducers } from '@reduxjs/toolkit'

import { images } from './slices/imagesSlice'
import { modalItem } from './slices/modalItemSlice'

export  const rootReducer = combineReducers({
  images: images.reducer,
  modalItem: modalItem.reducer
})