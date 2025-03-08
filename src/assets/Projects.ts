type Project = {
    id: number
    name: string
    category: "UX/UI Design" | "Web Development"
    description: string
    tools: [string, ...string[]]
    link: string
    featured: boolean
}

const Projects: Project[] = [
    {
        id: 1,
        name: "Monarca Cantina",
        category: "UX/UI Design",
        description: "A mobile app for ordering food from a Mexican restaurant.",
        tools: ["Figma"],
        link: "/monarca-cantina",
        featured: false
    },
    {
        id: 2,
        name: "Cultivated Oasis",
        category: "UX/UI Design",
        description: "A responsive website that helps you pick the perfect plant for your space.",
        tools: ["AdobeXD"],
        link: "/cultivated-oasis",
        featured: false
    },
    {
        id: 3,
        name: "Volunteer Finders",
        category: "UX/UI Design",
        description: "A responsive website and mobile app that helps you find volunteer opportunities in your area.",
        tools: ["Figma"],
        link: "/volunteer-finders",
        featured: true
    },
    {
        id: 4,
        name: "Inventory Tracker",
        category: "Web Development",
        description: "A simple inventory tracker that allows you to export your list into a CSV file. Data is stored locally. To clear it, double click on the clear list button.",
        tools: ["HTML", "CSS", "JavaScript"],
        link: "/inventory-tracker",
        featured: false
    },
    {
        id: 5,
        name: "National Park Travel Journal",
        category: "Web Development",
        description: "A travel journal to highlight the 16 National Parks I visited during the 6-month period I lived in a van and traveled around the United States.",
        tools: ["HTML", "CSS", "JavaScript", "React"],
        link: "/travel-journal",
        featured: false
    },
    {
        id: 6,
        name: "Movie Hangman",
        category: "Web Development",
        description: "A hangman game that grabs a random movie from an API of the top 200 most popular movies on IMBD.",
        tools: ["HTML", "CSS", "JavaScript", "React", "Node"],
        link: "/movie-hangman",
        featured: true
    },
    {
        id: 7,
        name: "Trivia Night Training",
        category: "Web Development",
        description: "A quiz to help train your trivia skills. Choose the difficulty level and category or just hit the start button to make it random. Get all 5 questions correct for a fun surprise.",
        tools: ["HTML", "CSS", "JavaScript", "React"],
        link: "/trivia-training",
        featured: true
    }
]

export default Projects.reverse()