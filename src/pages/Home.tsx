import { Link } from "react-router-dom"
import Projects from "../assets/Projects.ts"
import ProjectBox from "../components/ProjectBox.tsx"

export default function Home() {

    type Project = {
        id: number
        name: string
        category: "UX/UI Design" | "Web Development"
        description: string
        tools: [string, ...string[]]
        link: string
        featured: boolean
    }

    function renderFeaturedProjects(projects: Project[]) {
       const featuredProjects: Project[] = []
        projects.forEach((project) => {
            if (project.featured) {
                featuredProjects.push(project)
            }
        })
        
        let id = 1
        const projectsEl = featuredProjects.map((project) => {
            
            while (id > 7) {
                id = id - 7
            }

            let color = ""

            if (id === 1){
                color = "red"
            } else if (id === 2) {
                color = "orange"
            } else if (id === 3) {
                color = "yellow"
            } else if (id === 4) {
                color = "beige"
            } else if (id === 5) {
                color = "light-green"
            } else if (id === 6) {
                color = "turquoise"
            } else if (id === 7) {
                color = "blue"
            }
            return (<ProjectBox
                    key = {id++}
                    category = {project.category}
                    name = {project.name}
                    description = {project.description}   
                    tools = {project.tools}
                    link = {project.link}
                    color = {color}
                />)
        })
        return projectsEl
    }

    return (
        <div className="home-container"> 
            <h1>Taylor Hershberger</h1>
            <h2>Web Developer & UX/UI Designer</h2>
            <p>Thanks for visiting my website, I'm a front-end web developer with a strong background in UX/UI design. I specialize in creating visually appealing, user-friendly websites using HTML, CSS, JavaScript, TypeScript, and React. I also have a lot of experience with SEO and can build seamless digital experiences that are both functional and optimized to load quickly. I offer freelancing services, helping individuals and businesses manage and optimize their websites.</p>
            <p>&nbsp;</p>
            <h2>Featured Projects</h2>
            <div className="featured-projects">
                {renderFeaturedProjects(Projects)}
            </div>
            <Link to="my-work" className="view-more"><p>View more projects...</p></Link>
        </div>
    )
}