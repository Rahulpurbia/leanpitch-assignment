import { useState } from "react"

import Navbar from "../../components/Navbar";
import ProjectionScreen from "../../components/ProjectionScreen"

import "./style.css"

export const TRAININGS = 'trainings',
    MEETUPS = 'meetups',
    WEBINARS = 'webinars',
    CONFERENCE = 'conference',
    VIDEOS = 'videos',
    PSS = 'pss',
    BLOGS = 'blogs',
    PODCASTS = 'podcasts',
    BAS = 'bas',
    BAV = 'bav',
    ABOUT = 'about';

const Dashboard = () => {
    const [hoveredListItemName, setHoveredListItemName] = useState("")

    const setElement = (e) => setHoveredListItemName(e.target.getAttribute('data-name'))

    const removeElement = () => setHoveredListItemName("")

    const getClass = (dataName) => dataName === hoveredListItemName ? 'hover' : ""

    return (
        <>
            <Navbar />
            <div className="menu-container">
                <div className="menu-bar" onMouseLeave={removeElement}>
                    <ul onMouseOver={setElement} >
                        <li data-name={TRAININGS} className={getClass(TRAININGS)}>
                            <span>Trainings</span>
                        </li>
                        <li data-name={MEETUPS} className={getClass(MEETUPS)}>
                            <span>Meetups</span>
                        </li>
                        <li data-name={WEBINARS} className={getClass(WEBINARS)}>
                            <span>Webinars</span>
                        </li>
                        <li data-name={CONFERENCE} className={getClass(CONFERENCE)}>
                            <span>Conference</span>
                        </li>
                        <li data-name={VIDEOS} className={getClass(VIDEOS)}>
                            <span>Videos</span>
                        </li>
                        <li data-name={PSS} className={getClass(PSS)}>
                            <span>Pm Speaks Series</span>
                        </li>
                        <li data-name={BLOGS} className={getClass(BLOGS)}>
                            <span>Blogs</span>
                        </li>
                        <li data-name={PODCASTS} className={getClass(PODCASTS)}>
                            <span>Podcasts</span>
                        </li>
                        <li data-name={BAS} className={getClass(BAS)}>
                            <span>Be A Speaker</span>
                        </li>
                        <li data-name={BAV} className={getClass(BAV)}>
                            <span>Be A Volunteer</span>
                        </li>
                        <li data-name={ABOUT} className={getClass(ABOUT)}>
                            <span>About Us</span>
                        </li>
                    </ul>
                    <ProjectionScreen hoveredListItem={hoveredListItemName} />
                </div>
            </div>
        </>
    )
}

export default Dashboard