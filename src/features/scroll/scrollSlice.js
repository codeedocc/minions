import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scroll: true,
}

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    scrollControl: (state, action) => {
      state.scroll = false
    },
  },
})

export const { scrollControl } = scrollSlice.actions
export default scrollSlice.reducer
