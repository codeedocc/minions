import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Hey from '../assets/hey.webp'
import { useSelector } from 'react-redux'

function WelcomePage() {
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
        <h3>ПриветЫЫЫЫЫЫЫ</h3>
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
          <span onClick={() => navigate('/minions/YesWelcomePage')}>
            Да, конечно!
          </span>
          &nbsp; &nbsp; &nbsp;
          <span onClick={() => navigate('/minions/NoWelcomePage')}>
            Гуляй, сынок
          </span>
          &nbsp; &nbsp; &nbsp;
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
