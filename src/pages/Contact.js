import React, { useState } from 'react'
import './Contact.css'

function Contact({ displayMode }) {
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
            <div className={`nes-container with-title contact-container ${ displayMode ? "is-dark" : "" }`}>
                <p className="title">Contact Me</p>
                <div className="contact-container-group">
                    <div className='contact-div contact-social'>
                        <div className={`nes-container with-title is-centered ${ displayMode ? "is-dark" : "" }`}>
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
                    </div>
                    <div className='contact-div contact-message'>
                        <div className={`nes-container with-title is-centered contact-div ${ displayMode ? "is-dark" : "" }`}>
                            <p className='title'>Message Me</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className={`nes-input ${ displayMode ? "is-dark" : "" }`} placeholder="Your Name" required/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} className={`nes-input ${ displayMode ? "is-dark" : "" }`} placeholder="Your E-mail" required/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea rows="8" type="text" id="message" value={message} onChange={e => setMessage(e.target.value)} className={`nes-input ${ displayMode ? "is-dark" : "" }`} placeholder="Please enter your message" required/>
                                </div>
                                
                                <div className="form-group">
                                    <button className="nes-btn" disabled={isLoading}>Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
