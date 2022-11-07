import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  song: false,
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    startSong: (state, action) => {
      state.song = false
    },
  },
})

export const { startSong } = songSlice.actions
export default songSlice.reducer
