import { useState } from "react"

import Navbar from "../../components/Navbar";
import ProjectionScreen from "../../components/ProjectionScreen"

import TrainingContent from '../../components/ProjectionScreen/components/TrainingContent'
import AboutUsContent from "../../components/ProjectionScreen/components/AboutUsContent";
import BeASpeakerContent from "../../components/ProjectionScreen/components/BeASpeakerContent";
import BeAVolunteerContent from "../../components/ProjectionScreen/components/BeAVolunteerContent";
import BlogsContent from "../../components/ProjectionScreen/components/BlogsContent";
import ConferenceContent from "../../components/ProjectionScreen/components/ConferenceContent";
import MeetUpsContent from "../../components/ProjectionScreen/components/MeetUpsContent";
import PmSpeaksSeriesContent from "../../components/ProjectionScreen/components/PmSpeaksSeriesContent";
import PodcastContent from "../../components/ProjectionScreen/components/PodcastContent";
import VideoContent from "../../components/ProjectionScreen/components/VideosContent";
import WebinarContent from "../../components/ProjectionScreen/components/WebinarContent";

import "./style.css"

const TRAININGS = 'trainings',
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

    const getContent = () => {
        switch (hoveredListItemName) {
            case TRAININGS: {
                return <TrainingContent />
            }
            case ABOUT: {
                return <AboutUsContent />
            }
            case WEBINARS: {
                return <WebinarContent />
            }
            case MEETUPS: {
                return <MeetUpsContent />
            }
            case CONFERENCE: {
                return <ConferenceContent />
            }
            case VIDEOS: {
                return <VideoContent />
            }
            case PSS: {
                return <PmSpeaksSeriesContent />
            }
            case PODCASTS: {
                return <PodcastContent />
            }
            case BLOGS: {
                return <BlogsContent />
            }
            case BAS: {
                return <BeASpeakerContent />
            }
            case BAV: {
                return <BeAVolunteerContent />
            }
            default: {
                return ""
            }
        }
    }

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
                    <ProjectionScreen content={getContent()} />
                </div>
            </div>
        </>
    )
}

export default Dashboard