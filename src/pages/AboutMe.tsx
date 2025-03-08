import ProfilePic from "../img/ProfilePic.jpeg"

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <img src={ProfilePic} className="alignright" width="300px" />
            <h1>About Me</h1>
            <p>Hello! I'm a passionate web developer with a strong background in front-end development, UX/UI design, and SEO. I specialize in crafting visually appealing, user-friendly websites using modern technologies like HTML, CSS, JavaScript, TypeScript, and React. My goal is to create seamless digital experiences that enhance user engagement and drive results.</p>
            <p>I also offer website freelancing services to help individuals and businesses maintain, update, and improve their websites. Whether you're looking for a website manager, fresh design, performance optimization, or troubleshooting, I'm here to help!</p>
            <p>When I'm not coding, researching new design trends, or learning new development techniques, I'm exploring the great outdoors with my dog. If you're interested in working together or need assistance with your website, feel free to reach out!</p>
        </div>
    )
}