import React, { useState } from 'react'
import './Contact.css'

function Contact() {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ message, setMessage ] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        // add code here
    }

    return (
        <div className="contact">
            <div className='nes-container with-title is-centered'>
                <p className="title">Contact Me</p>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="nes-balloon from-left">
                            <legend className='contact-message'>
                                Send a message or link on social media
                            </legend>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="nes-input" placeholder="Your Name" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} className="nes-input" placeholder="Your E-mail" required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea rows="5" type="text" id="message" value={message} onChange={e => setMessage(e.target.value)} className="nes-input" placeholder="Please enter your message" required/>
                        </div>
                        
                        <div className="form-group">
                            <button className="nes-btn" disabled={isLoading}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <section className="icon-list">
                <div className="nes-container with-title is-centered">
                    <p className="title">Social Media</p>
                    <div className="contact-icons">
                        <a target="_blank" href="https://twitter.com/rob6x9n">
                            <i className="nes-icon twitter is-large"></i>
                        </a>
                        <a target="_blank" href="https://github.com/robinsandhu">
                            <i className="nes-icon github is-large"></i>
                        </a>
                        <a target="_blank" href="mailto:er.robinsandhu@gmail.com">
                            <i className="nes-icon gmail is-large"></i>
                        </a>
                        <a target="_blank" href="https://medium.com/@robin-sandhu">
                            <i className="nes-icon medium is-large"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/robin-sandhu-b62010181/">
                            <i className="nes-icon linkedin is-large"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
