import React, { useState, useEffect } from 'react'

import '../styles/home.css'
import '../constants/index.js'

const HomePage = () => {
  const { hello } = require('../constants/index.js')
  const [showImage, setShowImage] = useState(false)
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowImage(true)
    }, 3000)

    const hideTimer = setTimeout(() => {
      setShowImage(false)
    }, 60000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])
  return (
    <div className='home'>
      <div className='typewriter-container'>
        {hello.map((item, index) => (
          <div
            key={index}
            className='typing'
            style={{
              '--delay': `${index * 3}s`,
              '--width': `${item.text.length}ch`,
              '--typing': `${item.text.length * 0.1}s`,
              '--steps': `${item.text.length}`,
              '--delay': `${index * 4}s`,
              '--blink': `${
                Math.ceil((item.text.length * 0.5 + 0.5) / 2) * 2 - 1
              }`,
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      {showImage && (
        <div className='home-img'>
          <img src='turtel.png' alt='turtel' />
        </div>
      )}
    </div>
  )
}

export default HomePage
