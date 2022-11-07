import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Talk from '../assets/talk.webp'
import SoundOfWonder from '../assets/soundOfWonder.mp3'

function TalkingBeforeRide() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="main">
        <h3>Скрытые таланты</h3>
        <hr></hr>
        <img className="picture" src={Talk}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>
            Знаешь, есть у меня еще кое-что, но ты себя так ведешь, что я уже
            ничего не хочу. Если ты пообещаешь, что больше так не будешь - мы
            поедем на студию, и я покажу, что умею!
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
