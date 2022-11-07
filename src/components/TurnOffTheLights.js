import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Dj from '../assets/music.webp'
import Stas from '../assets/stasMikhailov.gif'
import Music from '../assets/dadju.mp3'

function TurnOffTheLights() {
  const [isPlaying, setIsPlaying] = useState(false)
  const navigate = useNavigate()
  const audioRef = useRef()
  const [onPage, setOnPage] = useState(true)

  useEffect(() => {
    if (onPage) {
      window.scrollTo(0, 0)
    }
  }, [onPage])

  const playOrPause = () => {
    setIsPlaying((prev) => !prev)
    window.scrollTo(0, 0)

    if (!isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  return (
    <div className="container">
      {!isPlaying ? (
        <div className="main">
          <h3>DJ Желток</h3>
          <hr></hr>
          <img src={Dj} className="picture"></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              К сожалению, выбрать трек сама ты не можешь, тебе придется слушать
              то, что слушают миньоны... 😂
            </span>
          </div>
          <div className="main-buttons">
            <audio src={Music} ref={audioRef}></audio>
            <span onClick={() => playOrPause()}>Включить трек</span>
            &nbsp; &nbsp; &nbsp;
            <span onClick={() => navigate('/minions/RoadToGuitar')}>Мда</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Пляшем пляшем!</h3>
          <hr></hr>
          <img src={Stas} style={{ height: '400px' }}></img>
          <hr></hr>
          <div className="main-text">
            <span>Как тебе мой костюм Стаса Михайлова? 💃</span>
          </div>
          <div className="main-buttons">
            <audio src={Music} ref={audioRef}></audio>
            <span onClick={() => playOrPause()}>Выключить трек</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default TurnOffTheLights
