import HeroImage from "../../img/TriviaNightTraining/trivia-night-training.png"

export default function TriviaNightTraining() {
    return (
        <div className="project-container">

                    <h1>Trivia Night Training</h1>

                    <p>&nbsp;</p>

                    <p>
                        A quiz to help train your trivia skills. <br />
                        Choose the difficulty level and category or just hit the start button to make it random. <br />
                        Get all 5 questions correct for a fun surprise.
                    </p>

                    <a target="_blank" className="button" href="https://trivia-night-training.netlify.app/">Test Project</a>

                    <a target="_blank" className="button" href="https://github.com/TaylorDay11/trivia-night-training">GitHub</a>

                    <img className="aligncenter" src={HeroImage} width="700px" />

        </div>
    )
}