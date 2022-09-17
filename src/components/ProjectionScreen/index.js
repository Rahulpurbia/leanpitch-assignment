import React from 'react'
import { useEffect } from "react"
import TrainingContent from "../TrainingContent"

import './style.css'

const ProjectionScreen = ({ hoveredListItem }) => {

    useEffect(() => {
        console.log(hoveredListItem)
    }, [hoveredListItem])

    return (
        <div className="projection-wrapper">
            <div className="projection-screen">
                <TrainingContent />
            </div>
        </div>

    )
}

export default ProjectionScreen