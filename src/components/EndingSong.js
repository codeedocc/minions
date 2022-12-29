import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Message from '../assets/message.webp'
import Heart from '../assets/heart.gif'
import FinalSong from '../assets/finalSong.mp3'
import { useDispatch, useSelector } from 'react-redux'
import { startSong } from '../features/song/songSlice'
import { usePageScroller } from '../hooks/pageScroller'

function EndingSong() {
  const [isStarted, setIsStarted] = useState(false)
  const navigate = useNavigate()
  const audioRef = useRef()
  const dispatch = useDispatch()
  const scroll = useSelector((state) => state.scroll.scroll)
  const song = useSelector((state) => state.song.song)

  usePageScroller(scroll)

  const nextPage = () => {
    if (!song) {
      alert('Сначала включи музыку :)')
    } else {
      setIsStarted((prev) => !prev)
      window.scrollTo(0, 0)
    }
  }

  const turnOnMusic = () => {
    dispatch(startSong())
  }

  return (
    <div className="container">
      {!isStarted ? (
        <div className="main">
          <h3>Мы на месте</h3>
          <hr></hr>
          <img className="picture" src={Message} alt="Ухожу на улицу"></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Вот это поездочка... Ладно, слушай. Побудь пока тут, я выйду на
              улицу. Когда дочитаешь это сообщение - включи музыку, а потом,
              когда услышишь слова, посмотри в окно.
            </span>
            <audio src={FinalSong} ref={audioRef} loop></audio>
          </div>
          <div className="main-buttons">
            {song ? (
              <span onClick={() => turnOnMusic()}>Выключить музыку</span>
            ) : (
              <span onClick={() => turnOnMusic()}>Включить музыку</span>
            )}
            &nbsp; &nbsp; &nbsp;
            <span onClick={() => nextPage()}>Посмотреть в окно</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Время цитат</h3>
          <hr></hr>
          <img className="picture" src={Heart} alt="Цитата"></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Как бы не было холодно вокруг, никогда не теряй тепло внутри себя,
              ты классная :)
            </span>
            <audio src={FinalSong} ref={audioRef} loop></audio>
          </div>
          <div className="main-buttons">
            <span onClick={() => navigate('/minions/KissEnd')}>АУФ...</span>
            &nbsp; &nbsp; &nbsp;
            <span onClick={() => navigate('/minions/FinalFight')}>
              Ты шо, дебил, пабликов перечитал? Сейчас я тебе устрою...
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default EndingSong
