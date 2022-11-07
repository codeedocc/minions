import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Mda from '../assets/mda.gif'
import { useSelector } from 'react-redux'
import Sigh from '../assets/maleSigh.mp3'

function RoadToGuitar() {
  const navigate = useNavigate()
  const scroll = useSelector((state) => state.scroll.scroll)
  const audioRef = useRef()

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
      audioRef.current.play()
    }
  }, [scroll])

  return (
    <div className="container">
      <div className="main">
        <h3>Чтож...</h3>
        <hr></hr>
        <img className="picture" src={Mda}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>
            Не знаю, что тебе не понравилось - музыка или мой костюм, ну да
            ладно. У меня есть гитара. Раньше я играл с пацанами в подъездах...
          </span>
          <audio src={Sigh} ref={audioRef}></audio>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/minions/Chicken')}>Удиви, петух</span>
        </div>
      </div>
    </div>
  )
}

export default RoadToGuitar
