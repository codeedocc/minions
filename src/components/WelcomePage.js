import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hey from '../assets/hey.webp'

function WelcomePage() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="main">
        <h3>Привет</h3>
        <hr></hr>
        <img className="picture" src={Hey}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>
            Меня зовут Желток :) Я так рад, что встретил тебя! Как же я не люблю
            эти холодные одинокие вечера. Хочешь повесилиться?
          </span>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/YesWelcomePage')}>Да, конечно!</span>
          &nbsp; &nbsp; &nbsp;
          <span onClick={() => navigate('/NoWelcomePage')}>Гуляй, сынок</span>
          &nbsp; &nbsp; &nbsp;
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
