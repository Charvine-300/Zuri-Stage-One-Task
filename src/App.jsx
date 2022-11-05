import Profile from "./components/Profile"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from "./components/Contact"
import ScrollToTop from './components/ScrollToTop'


function App() {


  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
