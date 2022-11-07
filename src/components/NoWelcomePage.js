import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Please from '../assets/please.gif'
import SadViolin from '../assets/sadViolin.mp3'
import { useSelector } from 'react-redux'

function NoWelcomePage() {
  const navigate = useNavigate()
  const scroll = useSelector((state) => state.scroll.scroll)
  const audioRef = useRef()
  const [decision, setDecision] = useState(true)

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
      audioRef.current.play()
    }
  }, [scroll])

  const sayNo = () => {
    setDecision(false)
  }

  return (
    <div className="container">
      {decision ? (
        <div className="main">
          <h3>Отказ</h3>
          <hr></hr>
          <img className="picture" src={Please}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>Может всё-таки да?</span>
            <audio src={SadViolin} ref={audioRef} loop></audio>
          </div>
          <div className="main-buttons">
            <span onClick={() => navigate('/minions/YesWelcomePage')}>
              Ну пошли
            </span>
            &nbsp; &nbsp; &nbsp;
            <span onClick={() => sayNo()}>Катись отсюда, очкарик</span>
          </div>
        </div>
      ) : (
        <div className="theEnd">
          <h1>THE END</h1>
        </div>
      )}
    </div>
  )
}

export default NoWelcomePage
