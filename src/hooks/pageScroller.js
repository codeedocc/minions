import { useEffect } from 'react'

export const usePageScroller = (scroller, audio = null) => {
  useEffect(() => {
    if (scroller) {
      window.scrollTo(0, 0)
      if (audio) {
        audio.current.play()
      }
    }
  }, [scroller, audio])
}
