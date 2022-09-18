import React from 'react'

import './style.css'

const ProjectionScreen = ({ content }) => {

    return (
        <div className="projection-wrapper">
            <div className="projection-screen" style={{ color: "white" }}>
                {content}
            </div>
        </div>

    )
}

export default ProjectionScreen