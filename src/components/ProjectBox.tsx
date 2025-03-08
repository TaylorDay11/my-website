import { Link } from "react-router-dom"

type Project = {
    name: string
    category: "UX/UI Design" | "Web Development"
    description: string
    tools: [string, ...string[]]
    link: string
    color: string
}

export default function ProjectBox({category, name, description, tools, link, color} : Project) {

   function renderTools(toolList: string[]) {
        let numberOfTools = toolList.length
        let toolsEl = ""
        tools.map((tool: string) => {
            if (numberOfTools > 1) {
                toolsEl += `${tool} | `
                numberOfTools--
            } else {
                toolsEl += `${tool}`
            }
        })
        return toolsEl
   }

    return (
        <Link className="project-link" to={link}>
            <div className={`project-box border-${color}`}>
                <div className="project-info">
                    <h4 className="category">{category}</h4>
                    <h3 className="name">{name}</h3>
                    <p className="description">{description}</p>
                    <p className="tools">{renderTools(tools)}</p>
                </div>
                <div className={`color-block ${color}`}></div>
            </div>
        </Link>
    )
}