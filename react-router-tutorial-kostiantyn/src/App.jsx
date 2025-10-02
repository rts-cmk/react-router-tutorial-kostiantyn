import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate("/contact")
  }

  return (
    <div>
      <h1>Hjem Side</h1>
      <button onClick={goToContact}>Gå til kontakt</button>
    </div>
  )
}

function About() {
  return(
    <h1>Om os side</h1>
  )
}

function Contact() {
  return(
    <h1>Kontakt side</h1>
  )
}

function Navbar() {
  return(
    <nav>
      <Link to="/">Hjem</Link>
      <Link to="/about">Om os</Link>
      <Link to="/contact">Kontakt</Link>
    </nav>
  )
}


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
