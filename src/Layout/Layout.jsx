import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import ThemeToggle from "../Context/ThemeToggle"

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <ThemeToggle/>
        <Footer />
    </>
  )
}

export default Layout