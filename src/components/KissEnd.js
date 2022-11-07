import React from 'react'
import { useSelector } from 'react-redux'
import Kiss from '../assets/kiss.webp'

function KissEnd() {
  const scroll = useSelector((state) => state.scroll.scroll)

  useEffect(() => {
    if (scroll) {
      window.scrollTo(0, 0)
    }
  }, [scroll])

  return (
    <div className="container">
      <div className="main" style={{ paddingTop: '15%' }}>
        <img className="picture" src={Kiss}></img>
      </div>
    </div>
  )
}

export default KissEnd
