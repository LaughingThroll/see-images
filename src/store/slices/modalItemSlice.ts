import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModalItem } from '../../types/modalItem'

const initialState: IModalItem = {
  title: '',
  url: ''
}

export const modalItem = createSlice({
  name: 'modalItem',
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<IModalItem>) => {
      state.title = action.payload.title
      state.url = action.payload.url
    }
  }
})

export const { setParams } = modalItem.actions