import Profile from "./components/Profile"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from "./components/Contact"


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
