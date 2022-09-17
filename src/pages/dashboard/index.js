import { useState } from "react"

import ProjectionScreen from "../../components/ProjectionScreen"

import "./style.css"

const Dashboard = () => {
    const [hoveredListItemName, setHoveredListItemName] = useState("")

    const setElement = (e) => setHoveredListItemName(e.target.getAttribute('data-name'))

    const removeElement = () => setHoveredListItemName("")

    const getClass = (dataName) => dataName === hoveredListItemName ? 'hover' : ""

    return (
        <div className="container">
            <div className="menu-bar" onMouseLeave={removeElement}>
                <ul onMouseOver={setElement} >
                    <li data-name="trainings" className={getClass('trainings')}>
                        Trainings
                    </li>
                    <li data-name='meetups' className={getClass('meetups')}>
                        Meetups
                    </li>
                    <li data-name='webinars' className={getClass('webinars')}>
                        Webinars
                    </li>
                    <li data-name='conference' className={getClass('conference')}>
                        Conference
                    </li>
                    <li data-name='videos' className={getClass('videos')}>
                        Videos
                    </li>
                    <li data-name="pss" className={getClass('pss')}>
                        Pm Speaks Series
                    </li>
                    <li data-name='blogs' className={getClass('blogs')}>
                        Blogs
                    </li>
                    <li data-name='podcasts' className={getClass('podcasts')}>
                        Podcasts
                    </li>
                    <li data-name="bas" className={getClass('bas')}>
                        Be A Speaker
                    </li>
                    <li data-name='bav' className={getClass('bav')}>
                        Be A Volunteer
                    </li>
                    <li data-name='about' className={getClass('about')}>
                        About Us
                    </li>
                </ul>
                <ProjectionScreen hoveredListItem={hoveredListItemName} />
            </div>
        </div>
    )
}

export default Dashboard