import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPaperPlane,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all fields.',
      })
      return
    }

    try {
      // Replace with your actual form submission logic
      // Example: await axios.post('/api/contact', formData);

      // Simulate successful submission
      setFormStatus({
        submitted: true,
        error: false,
        message: "Message sent successfully! I'll get back to you soon.",
      })

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again later.',
      })
    }
  }

  return (
    <div className='contact-section-container'>
      <p className='title'>CONTACT</p>

      <div className='contact-content'>
        <div className='contact-info'>
          <h2 className='contact-heading'>
            Let's chat over coffee! <FontAwesomeIcon icon={faCoffee} />
          </h2>

          <p className='contact-description'>
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className='contact-links'>
            <a href='mailto:your.email@example.com' className='contact-link'>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>otsovkweckstrom@gmail.com</span>
            </a>

            <a
              href='https://www.linkedin.com/in/otso-weckstrom/'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>

            <a
              href='https://github.com/otsoweckstrom'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-link'
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className='contact-form-container'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='your.email@example.com'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='What would you like to discuss?'
                rows='5'
              />
            </div>

            <button type='submit' className='submit-button'>
              <span>Send Message</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>

            {formStatus.message && (
              <div
                className={`form-message ${
                  formStatus.error ? 'error' : 'success'
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
