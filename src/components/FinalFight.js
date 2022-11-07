import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Argue from '../assets/argue.gif'
import Kiss from '../assets/kiss.webp'
import SoundOfWonder from '../assets/soundOfWonder.mp3'
import { useSelector } from 'react-redux'

function FinalFight() {
  const navigate = useNavigate()
  const [isDone, setIsDone] = useState(true)
  const scroll = useSelector((state) => state.scroll.scroll)

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  const final = () => {
    setIsDone((prev) => !prev)
  }

  return (
    <div className="container">
      {isDone ? (
        <div className="main">
          <h3>Ну бывает</h3>
          <hr></hr>
          <img className="picture" src={Argue}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>Чтож...</span>
          </div>
          <div className="main-buttons">
            <span onClick={() => final()}>Пока :)</span>
          </div>
        </div>
      ) : (
        <div className="main" style={{ paddingTop: '15%' }}>
          <img className="picture" src={Kiss}></img>
        </div>
      )}
    </div>
  )
}

export default FinalFight
