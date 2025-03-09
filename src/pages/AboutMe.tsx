import ProfilePic from "../img/AboutMe/ProfilePic.jpeg"
import UXDesignCert from "../img/AboutMe/UXDesignCertificate.pdf"
import EmergingLeadersCert from "../img/AboutMe/EmergingLeaders.pdf"

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <img src={ProfilePic} className="alignright" width="310px" />
            <h1>About Me</h1>
            <p>Hello! I'm a passionate web developer with a strong background in front-end development, UX/UI design, and SEO. I specialize in crafting visually appealing, user-friendly websites using modern technologies like HTML, CSS, JavaScript, TypeScript, and React. My goal is to create seamless digital experiences that enhance user engagement and drive results.</p>
            <p>I also offer website freelancing services to help individuals and businesses maintain, update, and improve their websites. Whether you're looking for a website manager, fresh design, performance optimization, or troubleshooting, I'm here to help!</p>
            <p>When I'm not coding, researching new design trends, or learning new development techniques, I'm exploring the great outdoors with my dog. If you're interested in working together or need assistance with your website, feel free to reach out!</p>
            <div className="about-me-details">
                <div className="education-section">
                    <h2>Education</h2>
                    <p>
                        University of Colorado at Boulder <br />
                        College of Engineering & Applied Sciences <br />
                        Creative Technology & Design <br />
                        Graduated 2018
                    </p>
                </div>
                <div className="certificates-section">
                    <h2>Certificates</h2>
                    <div className="certificates">
                        <a href="https://v2.scrimba.com/certificate-cert24zAwJ78oJjd3AgC7ZtjyWJrq4DvGr4bcEDJa" target="_blank">Scrimba Learn TypeScript Certificate</a>
                        <a href="https://v2.scrimba.com/certificate-cert24zAwJ78oJjd3AgC7ZtjyVEcoy8SRAo3f9PsT" target="_blank">Scrimba Advanced React Certificate</a>
                        <a href="https://v2.scrimba.com/certificate-cert2uNjfKA1yafygMD2wD9h5y82gnWmrDPTatQ" target="_blank">Scrimba Learn React Certificate</a>
                        <a href="https://v2.scrimba.com/certificate-cert2uNjfKA1yafygMD2wD9hABdDfJphLzmcUv8" target="_blank">Scrimba Learn JavaScript Certificate</a>
                        <a href={UXDesignCert} target="_blank">Google UX Design Certificate</a>
                        <a href={EmergingLeadersCert} target="_blank">Corpu Leadership Certificate</a>
                    </div>
                </div>
            </div>
        </div>
    )
}