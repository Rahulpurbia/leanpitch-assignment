import React from 'react'

import CardLogo from '../../.././../../assets/card-logo.svg'

import './style.css'

const TrainingCard = () => {
    return (
        <div className="training-card">
            <div>
                <img src={CardLogo} alt="" />
                <div className="headline">Design Thinking</div>
            </div>
            <div className="darker-stripe">
                <div>Upcoming Talkings</div>
                <div>8th Oct, 2021</div>
            </div>
            <div className="register-button">
                <button>Register</button>
            </div>
        </div>
    )
}

export default TrainingCard