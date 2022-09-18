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
                            Trainings
                        </li>
                        <li data-name={MEETUPS} className={getClass(MEETUPS)}>
                            Meetups
                        </li>
                        <li data-name={WEBINARS} className={getClass(WEBINARS)}>
                            Webinars
                        </li>
                        <li data-name={CONFERENCE} className={getClass(CONFERENCE)}>
                            Conference
                        </li>
                        <li data-name={VIDEOS} className={getClass(VIDEOS)}>
                            Videos
                        </li>
                        <li data-name={PSS} className={getClass(PSS)}>
                            Pm Speaks Series
                        </li>
                        <li data-name={BLOGS} className={getClass(BLOGS)}>
                            Blogs
                        </li>
                        <li data-name={PODCASTS} className={getClass(PODCASTS)}>
                            Podcasts
                        </li>
                        <li data-name={BAS} className={getClass(BAS)}>
                            Be A Speaker
                        </li>
                        <li data-name={BAV} className={getClass(BAV)}>
                            Be A Volunteer
                        </li>
                        <li data-name={ABOUT} className={getClass(ABOUT)}>
                            About Us
                        </li>
                    </ul>
                    <ProjectionScreen hoveredListItem={hoveredListItemName} />
                </div>
            </div>
        </>
    )
}

export default Dashboard