import { useState } from "react"
import Projects from "../assets/Projects.ts"
import ProjectBox from "../components/ProjectBox.tsx"

export default function MyWork() {

    type Project = {
        id: number
        name: string
        category: "UX/UI Design" | "Web Development"
        description: string
        tools: [string, ...string[]]
        link: string
        featured: boolean
    }

    const [uxFilter, setUxFilter] = useState(false)
    const [webFilter, setWebFilter] = useState(false)

    function renderProjects(projects : Project[]) {
        let id = 1
        const projectsEl = projects.map((project) => {

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

            if (webFilter) {
                if (project.category === "Web Development") {
                    return (<ProjectBox
                        key = {id++}
                        category = {project.category}
                        name = {project.name}
                        description = {project.description}   
                        tools = {project.tools}
                        link = {project.link}
                        color = {color}
                    />)
                }
            } else if (uxFilter) {
                if (project.category === "UX/UI Design") {
                    return (<ProjectBox
                        key = {id++}
                        category = {project.category}
                        name = {project.name}
                        description = {project.description}   
                        tools = {project.tools}
                        link = {project.link}
                        color = {color}
                    />)
                }
            } else {
                return (<ProjectBox
                    key = {id++}
                    category = {project.category}
                    name = {project.name}
                    description = {project.description}   
                    tools = {project.tools}
                    link = {project.link}
                    color = {color}
                />)
            }
                
        })
        return projectsEl
    }
    
    function uxFilterClicked() {
        setUxFilter(true)
        setWebFilter(false)
    }

    function webFilterClicked() {
        setUxFilter(false)
        setWebFilter(true)
    }

    function clearFiltersClicked() {
        setUxFilter(false)
        setWebFilter(false)
    }

    return (
        <div className="my-work-container">
            <h1>My Work</h1>
            <div className="filters">
                <p className="filter-label">Filters:</p>
                <button className={`web-filter ${webFilter ? "clicked" : ""}`} onClick={webFilterClicked}>Web Development</button>
                <button className={`ux-filter ${uxFilter ? "clicked" : ""}`} onClick={uxFilterClicked}>UX/UI Design</button>
                <button className="clear-filter" onClick={clearFiltersClicked}>Clear</button>
            </div>
            <div className="project-list">
                {renderProjects(Projects)}
            </div>
        </div>
    )
}