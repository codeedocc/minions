import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Riding from '../assets/riding.gif'
import BeforeRide from '../assets/beforeRide.gif'
import FastCar from '../assets/fastCar.mp3'
import Gelendwagen from '../assets/gelendwagen.mp3'
import { useSelector } from 'react-redux'
import { usePageScroller } from '../hooks/pageScroller'

function TalkingAndCar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const navigate = useNavigate()
  const audioRefJonas = useRef()
  const audioRefGelik = useRef()
  const scroll = useSelector((state) => state.scroll.scroll)

  usePageScroller(scroll)

  useEffect(() => {
    if (!isPlaying) {
      audioRefJonas.current.play()
    }
  }, [isPlaying])

  const letsRide = () => {
    setIsStarted((prev) => !prev)
    window.scrollTo(0, 0)
  }

  const changeMusic = () => {
    setIsPlaying((prev) => !prev)

    if (!isPlaying) {
      audioRefJonas.current.pause()
      audioRefGelik.current.play()
    } else {
      audioRefJonas.current.play()
      audioRefGelik.current.pause()
    }
  }

  const nextStep = () => {
    setIsPlaying(false)

    navigate('/minions/EndingSong')
  }

  return (
    <div className="container">
      {!isStarted ? (
        <div className="main">
          <h3>Ночная поездка</h3>
          <hr></hr>
          <img className="picture" src={BeforeRide}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Значит так - я живу тут не далеко, но у меня нет прав и вообще я
              не очень хорошо вижу дорогу, но ты не бойся, прокатимся с ветерком
            </span>
            <audio src={FastCar} ref={audioRefJonas} loop></audio>
            <audio src={Gelendwagen} ref={audioRefGelik} loop></audio>
          </div>
          <div className="main-buttons">
            <span onClick={() => letsRide()}>Ну поехали</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Маленький Шумахер</h3>
          <hr></hr>
          <img className="picture" src={Riding}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Не обращай внимание на тряску, представь, что мы на аттракционе :)
              Если хочешь, можешь переключить трек
            </span>
            <audio src={FastCar} ref={audioRefJonas} loop></audio>
            <audio src={Gelendwagen} ref={audioRefGelik} loop></audio>
          </div>
          <div className="main-buttons">
            {isPlaying ? (
              <span onClick={() => changeMusic()}>Включить чиловую 🎶</span>
            ) : (
              <span onClick={() => changeMusic()}>ВАЛИМ ВАЛИМ ВАЛИМ НА...</span>
            )}
            &nbsp; &nbsp; &nbsp;
            <span onClick={() => nextStep()}>
              Ну и шарманка... Мы скоро приедем?
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default TalkingAndCar
