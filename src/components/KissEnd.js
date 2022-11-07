import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Kiss from '../assets/kiss.webp'
import { useNavigate } from 'react-router-dom'

function KissEnd() {
  const scroll = useSelector((state) => state.scroll.scroll)
  const navigate = useNavigate()

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  return (
    <div className="container">
      <div className="main">
        <h3>Хватит на сегодня</h3>
        <hr></hr>
        <img className="picture" src={Kiss}></img>
        <hr style={{ marginTop: '25px' }}></hr>
        <div className="main-text">
          <span>
            Пошли спать. Я покажу тебе свой фирменный прыжок в кровать
          </span>
        </div>
        <div className="main-buttons">
          <span onClick={() => navigate('/minions/Sleep')}>Пошли</span>
        </div>
      </div>
    </div>
  )
}

export default KissEnd
