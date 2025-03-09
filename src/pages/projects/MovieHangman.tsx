import HeroImage from "../../img/MovieHangman/Movie-Hangman.png"

export default function MovieHangman() {
    return (
        <div className="project-container">

                    <h1>Movie Hangman</h1>

                    <p>&nbsp;</p>

                    <p>A hangman game that grabs a random movie from an API of the top 200 most popular movies on IMBD.</p>

                    <a target="_blank" className="button" href="https://movie-hangman.onrender.com/">Test Project</a>

                    <a target="_blank" className="button" href="https://github.com/TaylorDay11/movie-hangman">GitHub</a>

                    <img className="aligncenter" src={HeroImage} width="700px" />

        </div>
    )}