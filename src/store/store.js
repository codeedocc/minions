import { configureStore } from '@reduxjs/toolkit'
import scrollSlice from '../features/scroll/scrollSlice'
import songSlice from '../features/song/songSlice'
import themeSlice from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    song: songSlice,
    scroll: scrollSlice,
  },
})
