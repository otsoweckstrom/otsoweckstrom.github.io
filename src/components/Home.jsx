import React from 'react'

import '../styles/home.css'
import '../constants/index.js'

const HomePage = () => {
  const { hello } = require('../constants/index.js')

  return (
    <div className='home'>
      <div className='typewriter-container'>
        {hello.map((item, index) => (
          <div
            key={index}
            className='typing'
            style={{
              '--width': `${item.text.length}ch`,
              '--typing': `${item.text.length * 0.1}s`,
              '--steps': `${item.text.length}`,
              '--blink': `${
                Math.ceil((item.text.length * 0.5 + 0.5) / 2) * 2 - 1
              }`,
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
