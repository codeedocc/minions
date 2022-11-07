import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../features/theme/themeSlice'
import Scharf from '../assets/scharf.gif'
import Happy from '../assets/hello.gif'

function YesWelcomePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const color = useSelector((state) => state.theme.theme)
  const [onPage, setOnPage] = useState(true)

  useEffect(() => {
    if (onPage) {
      window.scrollTo(0, 0)
    }
  }, [onPage])

  function themeHandler() {
    dispatch(changeTheme())
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (color) {
      document.body.style = 'background: #111111; color: #f1f1f1'
    }
  }, [color])

  return (
    <div className="container">
      {!color ? (
        <div className="main">
          <h3>Класс!</h3>
          <hr></hr>
          <img className="picture" src={Happy}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              Чтобы согреться в эти хмурые дни, нам нужно создать подобающую
              обстановку. Ложись поудобнее и выключай свет 💡
            </span>
          </div>
          <div className="main-buttons">
            <span onClick={() => themeHandler()}>Выключить свет</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <h3>Укутаемся потеплее</h3>
          <hr></hr>
          <img className="picture" src={Scharf}></img>
          <hr style={{ marginTop: '25px' }}></hr>
          <div className="main-text">
            <span>
              На мой взгляд так стало немного уютнее... Но всё еще чего-то не
              хватает. Может быть включим что-то на фоне?
            </span>
          </div>
          <div className="main-buttons">
            <span onClick={() => navigate('/minions/TurnOffTheLights')}>
              Давай выберем что-нибудь
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default YesWelcomePage
