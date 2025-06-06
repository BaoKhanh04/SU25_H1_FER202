import Header from "./Header"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

const SimpleWebsite = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default SimpleWebsite;