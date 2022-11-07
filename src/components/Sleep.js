import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GoToBed from '../assets/sleep.gif'
import { useSelector } from 'react-redux'

function Sleep() {
  const scroll = useSelector((state) => state.scroll.scroll)

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  return (
    <div className="container">
      <div className="main">
        <h3>Спокойной ночи</h3>
        <hr></hr>
        <img className="picture" src={GoToBed}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>Можешь закинуть на меня ногу 😂</span>
        </div>
      </div>
    </div>
  )
}

export default Sleep
