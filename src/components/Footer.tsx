import { FaTelegramPlane } from "react-icons/fa"
import { ImLinkedin2 } from "react-icons/im";
import { TbBrandGithubFilled } from "react-icons/tb"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <h3 className="connect">Connect with me:</h3>
                <a href="https://www.linkedin.com/in/taylor-hershberger-815767164/" target="_blank">
                    <ImLinkedin2 />
                </a>
                <a href="https://github.com/TaylorDay11" target="_blank">
                    <TbBrandGithubFilled />
                </a>
                <a href="mailto:taylor.day.hershberger@gmail.com" target="_blank">
                    <FaTelegramPlane />
                </a>
            </div>
        </footer>
    )
}