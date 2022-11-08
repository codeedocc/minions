import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  song: false,
}

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    startSong: (state, action) => {
      state.song = !state.song
    },
  },
})

export const { startSong } = songSlice.actions
export default songSlice.reducer
