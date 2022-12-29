import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Kurica from '../assets/chicken.webp'
import { useSelector } from 'react-redux'
import ChickenSound from '../assets/chickenSound.mp3'
import { usePageScroller } from '../hooks/pageScroller'

function Chicken() {
  const navigate = useNavigate()
  const scroll = useSelector((state) => state.scroll.scroll)
  const audioRef = useRef()

  usePageScroller(scroll, audioRef)

  return (
    <div className="container">
      <div className="main">
        <h3>За что?</h3>
        <hr></hr>
        <img className="picture" src={Kurica}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>
            Кукареку. Мы находимся в волшебном мире, твои слова имеют силу, так
            что, пожалуйста, будь аккуратнее. Может всё-таки я сыграю?
          </span>
          <audio src={ChickenSound} ref={audioRef}></audio>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/minions/GuitarPlay')}>
            Ладно, доставай свою гитару. Но если мне не понравится...
          </span>
        </div>
      </div>
    </div>
  )
}

export default Chicken
