import { useState } from "react"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { Squeeze as Hamburger } from 'hamburger-react'

export default function Header() {

    const [isOpen, setOpen] = useState(false)

    return (
        <header>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: .7, ease: "easeInOut" }}>
            <div className="desktop-nav">
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-me">About Me</NavLink>
                    <NavLink to="/tool-box">Tool Box</NavLink>
                    <NavLink to="/my-work">My Work</NavLink>
                </nav>
            </div>

            <nav className="mobile-nav">
                <Hamburger 
                    toggled={isOpen} 
                    toggle={setOpen} 
                    duration={0.35}
                    easing="ease-in"
                    label="Show menu"
                    size={40}
                />

                <motion.div
                    className="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0}}
                    transition={{ duration: 0.5 }}
                >
                    <NavLink to="/" onClick={() => setOpen(!isOpen)}>Home</NavLink>
                    <NavLink to="/about-me" onClick={() => setOpen(!isOpen)}>About Me</NavLink>
                    <NavLink to="/tool-box" onClick={() => setOpen(!isOpen)}>Tool Box</NavLink>
                    <NavLink to="/my-work" onClick={() => setOpen(!isOpen)}>My Work</NavLink>
                </motion.div>
            </nav>
        </motion.div>

            <motion.div initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .2, ease: "linear" }}
                className="red rainbow">
            </motion.div>
             <motion.div initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .2, delay: .1, ease: "linear" }}
                className="orange rainbow">
            </motion.div>
            <motion.div initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .2, delay: .2, ease: "linear" }} 
                className="yellow rainbow">
            </motion.div>
            <motion.div initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .2, delay: .3, ease: "linear" }} 
                className="beige rainbow">
            </motion.div>
            <motion.div initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .2, delay: .4, ease: "linear" }}  
                className="light-green rainbow">
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .2, delay: .5, ease: "linear" }} 
                className="turquoise rainbow">
            </motion.div>
            <motion.div initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: .2, delay: .6, ease: "linear" }} 
                className="blue rainbow"> 
            </motion.div>
        </header>
    )
}