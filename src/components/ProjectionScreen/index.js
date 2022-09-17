import React from 'react'
import { useEffect } from "react"

import './style.css'

const ProjectionScreen = ({ hoveredListItem }) => {

    useEffect(() => {
        console.log(hoveredListItem)
    }, [hoveredListItem])

    return (
        <div className="projection-wrapper">
            <div className="projection-screen">

            </div>
        </div>

    )
}

export default ProjectionScreen