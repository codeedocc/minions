import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Kurica from '../assets/chicken.webp'

function Chicken() {
  const navigate = useNavigate()

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
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/GuitarPlay')}>
            Ладно, доставай свою гитару. Но если мне не понравится...
          </span>
        </div>
      </div>
    </div>
  )
}

export default Chicken
