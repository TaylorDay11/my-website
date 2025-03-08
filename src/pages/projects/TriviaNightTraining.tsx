import HeroImage from "../../img/TriviaNightTraining/trivia-night-training.png"

export default function TriviaNightTraining() {
    return (
        <div className="project-container">

                    <h1>Trivia Night Training</h1>

                    <h2>A quiz to help train your trivia skills. Choose the difficulty level and category or just hit the start button to make it random. Get all 5 questions correct for a fun surprise.</h2>

                    <img className="aligncenter" src={HeroImage} width="700px" />

                    <a target="_blank" className="button" href="https://trivia-night-training.netlify.app/">Test Project</a>

                    <a target="_blank" className="button" href="https://github.com/TaylorDay11/trivia-night-training">GitHub</a>

        </div>
    )
}