
import './App.css'
import Navbar from './assets/components/navbar/Nav'
import Hero from './assets/components/hero/Hero'
import Contact from './assets/components/contact/Contact'
import About from './assets/components/about/About'
import Service from './assets/components/service/Service'
import Footer from './assets/components/footer/Footer'
import Features from './assets/components/features/Feature'
import Styles from './assets/components/styles/Styles'
import Color from './assets/components/color/Color'
import Bridal from './assets/components/bridal/Bridal'
import Treatment from './assets/components/treatment/Treatment'
import MensStyles from './assets/components/mens-style/Mens-style'
import WomensStyles from './assets/components/womens-style/WomensStyle'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
    <>
     <Router>
      <Navbar/>
    
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Home" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/features" element={<Features />} />
        <Route path="/styles" element={<Styles />} />
        <Route path="/color" element={<Color />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/mens-styles" element={<MensStyles />} />
        <Route path="/womens-styles" element={<WomensStyles />} />
      </Routes>
      
      <Footer/>
      </Router>
      
       
    </>
  )
}

export default App
