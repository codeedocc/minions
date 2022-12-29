import React from 'react'
import GoToBed from '../assets/sleep.gif'
import { useDispatch, useSelector } from 'react-redux'
import { startSong } from '../features/song/songSlice'
import { usePageScroller } from '../hooks/pageScroller'

function Sleep() {
  const scroll = useSelector((state) => state.scroll.scroll)
  const song = useSelector((state) => state.song.song)
  const dispatch = useDispatch()

  usePageScroller(scroll)

  const theEnd = () => {
    dispatch(startSong())
  }

  return (
    <div className="container">
      <div className="main">
        <h3>Спокойной ночи</h3>
        <hr></hr>
        <img className="picture" src={GoToBed}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>Можешь закинуть на меня ногу 😂</span>
        </div>
        <div className="main-buttons">
          {song ? (
            <span onClick={() => theEnd()}>
              Спокойной ночи (выключить музыку)
            </span>
          ) : (
            <span onClick={() => theEnd()}>
              Спокойной ночи (включить музыку)
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sleep
