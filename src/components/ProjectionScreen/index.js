import React from 'react'
import TrainingContent from "./components/TrainingContent"

import { TRAININGS, WEBINARS, MEETUPS, CONFERENCE, VIDEOS, PSS, PODCASTS, BLOGS, BAS, BAV, ABOUT } from "../../pages/dashboard"

import './style.css'

const ProjectionScreen = ({ hoveredListItem }) => {

    const getContent = () => {
        switch (hoveredListItem) {
            case TRAININGS: {
                return 'trainings'
            }
            case ABOUT: {
                return 'about'
            }
            case WEBINARS: {
                return 'webinars'
            }
            case MEETUPS: {
                return 'meetups'
            }
            case CONFERENCE: {
                return 'conference'
            }
            case VIDEOS: {
                return 'videos'
            }
            case PSS: {
                return 'pss'
            }
            case PODCASTS: {
                return 'podcasts'
            }
            case BLOGS: {
                return 'blogs'
            }
            case BAS: {
                return 'bas'
            }
            case BAV: {
                return 'bav'
            }
            default: {
                return ""
            }
        }
    }

    return (
        <div className="projection-wrapper">
            <div className="projection-screen" style={{ color: "white" }}>
                {getContent()}
            </div>
        </div>

    )
}

export default ProjectionScreen