import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Please from '../assets/please.gif'
import { useSelector } from 'react-redux'

function NoWelcomePage() {
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
        <h3>Отказ</h3>
        <hr></hr>
        <img className="picture" src={Please}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span></span>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/minions/theme')}></span>
          &nbsp; &nbsp; &nbsp;
          <span onClick={() => navigate('/minions/theme')}></span>
          &nbsp; &nbsp; &nbsp;
          <span onClick={() => navigate('/minions/theme')}></span>
        </div>
      </div>
    </div>
  )
}

export default NoWelcomePage
