import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Mda from '../assets/mda.gif'

function RoadToGuitar() {
  const navigate = useNavigate()

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
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/Chicken')}>Удиви, петух</span>
        </div>
      </div>
    </div>
  )
}

export default RoadToGuitar
