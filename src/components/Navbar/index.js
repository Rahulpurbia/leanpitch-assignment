import React from 'react'

import './style.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/assets/logo.jpg" alt="logo" />
            </div>
            <div className="nav-buttons">
                <button onClick={() => alert("Successfully subscribed")} className="subscribe-btn btn">Subscribe</button>
                <button onClick={() => alert("Opens contact us form")} className="contact-btn btn">Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar