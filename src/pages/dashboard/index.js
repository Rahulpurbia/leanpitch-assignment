import React from 'react'
import { useState } from "react"
import ProjectionScreen from "../../components/ProjectionScreen"

import "./style.css"

const Dashboard = () => {
    const [hoveredListItem, setHoveredListItem] = useState("")
    const setElement = (e) => {
        setHoveredListItem(e.target.getAttribute('data-name'))
    }

    return (
        <div className="container">
            <div className="menu-bar">
                <ul onMouseOver={setElement}>
                    <li data-name="trainings">Trainings</li>
                    <li data-name='meetups'>Meetups </li>
                    <li data-name='webinars'>Webinars</li>
                    <li data-name='conference'>Conference</li>
                    <li data-name='videos'>Videos</li>
                    <li data-name="pss">Pm Speaks Series</li>
                    <li data-name='blogs'>Blogs</li>
                    <li data-name='podcasts'>Podcasts</li>
                    <li data-name="bas">Be A Speaker</li>
                    <li data-name='bav'>Be A Volunteer</li>
                    <li data-name='about'>About Us</li>
                </ul>
                <ProjectionScreen hoveredListItem={hoveredListItem} />
            </div>
        </div>
    )
}

export default Dashboard