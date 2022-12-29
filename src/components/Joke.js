import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Wonder from '../assets/wonder.webp'
import SoundOfWonder from '../assets/soundOfWonder.mp3'
import { useSelector } from 'react-redux'
import { usePageScroller } from '../hooks/pageScroller'

function Joke() {
  const navigate = useNavigate()
  const audioRef = useRef()
  const scroll = useSelector((state) => state.scroll.scroll)

  usePageScroller(scroll, audioRef)

  return (
    <div className="container">
      <div className="main">
        <h3>Правда?</h3>
        <hr></hr>
        <img className="picture" src={Wonder} alt="Радость"></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>Тебе правда понравилось???</span>
          <audio src={SoundOfWonder} ref={audioRef}></audio>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/minions/DestroyGuitar')}>
            Нет. Ломай гитару
          </span>
        </div>
      </div>
    </div>
  )
}

export default Joke
