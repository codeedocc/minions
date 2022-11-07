import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Talk from '../assets/talk.webp'
import { useSelector } from 'react-redux'

function TalkingBeforeRide() {
  const navigate = useNavigate()
  const scroll = useSelector((state) => state.scroll.scroll)

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  return (
    <div className="container">
      <div className="main">
        <h3>Желток обиделся</h3>
        <hr></hr>
        <img className="picture" src={Talk}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>
            Ты видела время? Мне уже пора спать! Если хочешь, можешь
            переночевать у меня. Только пообещай, что больше не будешь надо мной
            издеваться 😡
          </span>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/minions/TalkingAndCar')}>
            Хорошо, обещаю
          </span>
        </div>
      </div>
    </div>
  )
}

export default TalkingBeforeRide
