import { Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"
import ScrollToTop from "../components/ScrollToTop.tsx"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <ScrollToTop />
            <Header />
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </motion.div>
        </div>
    )
}