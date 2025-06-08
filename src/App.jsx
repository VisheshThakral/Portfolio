import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Project'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WorkExperience from './sections/Experience'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer /> 
    </main>
  )
}

export default App
