import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Message from '../assets/message.webp'
import Heart from '../assets/heart.gif'
import FinalSong from '../assets/finalSong.mp3'
import { useDispatch, useSelector } from 'react-redux'
import { startSong } from '../features/song/songSlice'

function EndingSong() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const navigate = useNavigate()
  const audioRefJonas = useRef()
  const dispatch = useDispatch()
  const song = useSelector((state) => state.song.song)
  const scroll = useSelector((state) => state.scroll.scroll)

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  // useEffect(() => {
  //   if (!isPlaying) {
  //     setTimeout(() => {
  //       audioRefJonas.current.play()
  //     }, 5000)
  //   }
  // }, [isPlaying])

  useEffect(() => {
    if (!song) {
      // dispatch(startSong())
      setTimeout(() => {
        audioRefJonas.current.play()
      }, 5000)
    }
  }, [song])

  const letsRide = () => {
    setIsStarted((prev) => !prev)
  }

  const nextStep = () => {
    setIsPlaying(false)

    navigate('/minions/EndingSong')
  }

  return (
    <div className="container">
      {!isStarted ? (
        <div className="main">
          <h3>Мы на месте</h3>
          <hr></hr>
          <img className="picture" src={Message}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Вот это поездочка... Ладно, слушай. Побудь пока тут, я выйду на
              улицу. Сейчас заиграет музыка, когда услышишь в ней слова,
              посмотри в окно.
            </span>
            <audio src={FinalSong} ref={audioRefJonas} loop></audio>
          </div>
          <div className="main-buttons">
            <span onClick={() => letsRide()}>Посмотреть в окно</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Конец</h3>
          <hr></hr>
          <img className="picture" src={Heart}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Как бы не было холодно вокруг, никогда не теряй тепло внутри себя,
              ты классная :)
            </span>
            <audio src={FinalSong} ref={audioRefJonas} loop></audio>
          </div>
          <div className="main-buttons">
            <span onClick={() => navigate('/minions/KissEnd')}>Okay</span>
            &nbsp; &nbsp; &nbsp;
            <span onClick={() => navigate('/minions/FinalFight')}>
              Ты шо дебил, ради этого мы сюда ехали? Сейчас я тебе устрою...
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default EndingSong
