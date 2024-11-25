import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <form action='https://formspree.io/f/xjvkwknq' method='POST'>
        <label>
          Name:
          <input type='text' name='name' />
        </label>
        <label>
          Email:
          <input type='email' name='_replyto' />
        </label>
        <label>
          Message:
          <textarea name='message'></textarea>
        </label>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact
