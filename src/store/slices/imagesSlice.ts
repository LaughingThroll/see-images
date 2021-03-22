import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IImageItem } from './../../types/imageItem'

import { makeRequest } from './../../utils/makeRequest'
import { URL } from '../../constant'

interface IInitialState {
  imagesData: IImageItem[]
  isLoading: boolean
  error: string
}

const initialState: IInitialState = {
  imagesData: [],
  isLoading: false,
  error: ''
}


export const getImages = createAsyncThunk(
  'images/getImages',
  async (page: number) => {
    return await makeRequest<IImageItem[]>(`${URL}photos?_page=${page}&_limit=20`)
  }
)


export const images = createSlice({
  name: 'images',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getImages.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(getImages.fulfilled, (state, action) => {
        state.imagesData = [...state.imagesData, ...action.payload]
        state.error = ''
        state.isLoading = false
      }),
      builder.addCase(getImages.rejected, (state, action) => {
        state.imagesData = []
        state.error = action.error.toString()
        state.isLoading = false
      })
  }
})

