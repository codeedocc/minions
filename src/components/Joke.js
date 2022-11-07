import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Wonder from '../assets/wonder.webp'
import SoundOfWonder from '../assets/soundOfWonder.mp3'

function Joke() {
  const navigate = useNavigate()
  const [isWondered, setIsWondered] = useState(true)
  const audioRef = useRef()

  useEffect(() => {
    if (isWondered) {
      audioRef.current.play()
    }
  }, [isWondered])

  return (
    <div className="container">
      <div className="main">
        <h3>Правда?</h3>
        <hr></hr>
        <img className="picture" src={Wonder}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>Тебе правда понравилось???</span>
          <audio src={SoundOfWonder} ref={audioRef}></audio>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/DestroyGuitar')}>
            Нет. Ломай гитару
          </span>
        </div>
      </div>
    </div>
  )
}

export default Joke
