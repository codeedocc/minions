import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../features/theme/themeSlice'

const Theme = () => {
  const dispatch = useDispatch()
  const color = useSelector((state) => state.theme.theme)

  const styles = {
    divStyles: {
      margin: '0 auto',
      textAlign: 'center',
      paddingTop: '25rem',
    },
    btnStyles: {
      fontSize: '22px',
      background: 'azure',
    },
  }

  function themeHandler() {
    dispatch(changeTheme())
  }

  useEffect(() => {
    if (color) {
      document.body.style = 'background: #f1f1f1; color: #111111'
    } else {
      document.body.style = 'background: #111111; color: #f1f1f1'
    }
  }, [color])

  return (
    <div style={styles.divStyles}>
      {color ? (
        <button onClick={() => themeHandler()} style={styles.btnStyles}>
          Погасить огни...
        </button>
      ) : (
        <button onClick={() => themeHandler()} style={styles.btnStyles}>
          Зажечь лампочки
        </button>
      )}
    </div>
  )
}

export default Theme
