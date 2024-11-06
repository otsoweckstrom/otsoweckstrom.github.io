import React from 'react'

import '../styles/home.css'
import '../constants/index.js'

const HomePage = () => {
  const { hello } = require('../constants/index.js')

  return (
    <div className='home'>
      <div className='typewriter-container'>
        <div className='wrapper'>
          {hello.map((item, index) => (
            <div
              key={index}
              className='typing-demo'
              style={{
                '--delay': `${index * 3}s`,
                '--steps': `${item.text.length + 1}ch`,
              }}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
