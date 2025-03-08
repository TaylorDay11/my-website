import HeroImage from "../../img/NationalParkTravelJournal/nationalparktraveljournal.png"

export default function NationalParkTravelJournal() {
    return (
        <div className="project-container">

                    <h1>National Park Travel Journal</h1>

                    <h2>A travel journal to highlight the 16 National Parks I visited during the 6-month period I lived in a van and traveled around the United States.</h2>

                    <img className="aligncenter" src={HeroImage} width="700px" />

                    <a target="_blank" className="button" href="https://national-park-travel-journal.netlify.app/">Test Project</a>

                    <a target="_blank" className="button" href="https://github.com/TaylorDay11/national-park-travel-journal">GitHub</a>

        </div>
    )}