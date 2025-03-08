import { Link } from "react-router-dom"
import { IoArrowUp, IoArrowForward } from "react-icons/io5"

export default function ScrollOrNext() {

    function ScrollToTopButton() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div>
            <p>&nbsp;</p>
            <p><a className="arrow-link" onClick={ScrollToTopButton}><IoArrowUp /> Scroll up</a> <Link className="arrow-link" to="/my-work">View more projects <IoArrowForward /></Link></p>
        </div>
    )
}