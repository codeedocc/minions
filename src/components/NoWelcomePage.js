import React from 'react'
import { useNavigate } from 'react-router-dom'
import Please from '../assets/please.gif'

function NoWelcomePage() {
  const navigate = useNavigate()

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
          <span onClick={() => navigate('/theme')}></span>
          &nbsp; &nbsp; &nbsp;
          <span onClick={() => navigate('/theme')}></span>
          &nbsp; &nbsp; &nbsp;
          <span onClick={() => navigate('/theme')}></span>
        </div>
      </div>
    </div>
  )
}

export default NoWelcomePage
