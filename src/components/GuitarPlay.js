import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StartGuitar from '../assets/startGuitar.webp'
import PlayingGuitar from '../assets/playingGuitar.webp'
import PiratesSong from '../assets/pirates.mp3'
import { useSelector } from 'react-redux'
import BeforeGuitar from '../assets/soundBeforeGuitar.mp3'

function GuitarPlay() {
  const [isPlaying, setIsPlaying] = useState(false)
  const navigate = useNavigate()
  const audioRef = useRef()
  const audioRefBefore = useRef()
  const scroll = useSelector((state) => state.scroll.scroll)

  useEffect(() => {}, [scroll])

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  const playOrPause = () => {
    setIsPlaying((prev) => !prev)
    window.scrollTo(0, 0)

    if (!isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  const nextStep = () => {
    setIsPlaying(false)

    navigate('/minions/Joke')
  }

  return (
    <div className="container">
      {!isPlaying ? (
        <div className="main">
          <h3>Вот она, моя любимая...</h3>
          <hr></hr>
          <img className="picture" src={StartGuitar}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Во дворе меня звали Желток быстрые пальчики 😏 Сейчас я сбацаю
              что-нибудь. Готова?
            </span>
            <audio src={PiratesSong} ref={audioRef} loop></audio>
          </div>
          <div className="main-buttons">
            <span onClick={() => playOrPause()}>Жги, колобок</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Как же он чувствует</h3>
          <hr></hr>
          <img className="picture" src={PlayingGuitar}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>🎶🎶🎶 Ну шо скажешь, тебе нравится??</span>
            <audio src={PiratesSong} ref={audioRef}></audio>
          </div>
          <div className="main-buttons">
            <span onClick={() => nextStep()}>Да, супер</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default GuitarPlay
