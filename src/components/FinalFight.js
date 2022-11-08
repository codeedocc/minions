import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Argue from '../assets/argue.gif'
import Kiss from '../assets/kiss.webp'
import { useSelector } from 'react-redux'

function FinalFight() {
  const [isDone, setIsDone] = useState(true)
  const navigate = useNavigate()
  const scroll = useSelector((state) => state.scroll.scroll)

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  const final = () => {
    setIsDone((prev) => !prev)
    window.scrollTo(0, 0)
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
            <span>А ты вспыльчивая 😂</span>
          </div>
          <div className="main-buttons">
            <span onClick={() => final()}>Будешь знать, засранец</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Хватит на сегодня</h3>
          <hr></hr>
          <img className="picture" src={Kiss}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>Было весело, не сердись. Пошли спать</span>
          </div>
          <div className="main-buttons">
            <span onClick={() => navigate('/minions/Sleep')}>Пошли</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default FinalFight
