import { configureStore } from '@reduxjs/toolkit'
import songSlice from '../features/song/songSlice'
import themeSlice from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    song: songSlice,
  },
})
