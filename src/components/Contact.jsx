import React from 'react'
import '../styles/contact.css'

const Contact = () => {
	return (
		<div className="contact-container">
			<h2 className="contact-title">Get in Touch</h2>
			<p className="contact-subtitle">
				I'd love to hear from you! Feel free to reach out using the form
				below.
			</p>
			<form
				action="https://formspree.io/f/xjvkwknq"
				method="POST"
				className="contact-form"
			>
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Your Name"
					className="form-input"
					required
				/>

				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input
					type="email"
					name="_replyto"
					id="email"
					placeholder="Your Email"
					className="form-input"
					required
				/>

				<label htmlFor="message" className="form-label">
					Message
				</label>
				<textarea
					name="message"
					id="message"
					placeholder="Your Message"
					className="form-textarea"
					required
				></textarea>

				<button type="submit" className="form-button">
					Send Message
				</button>
			</form>
		</div>
	)
}

export default Contact
