import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function ReactRouter() {
  const navigate = useNavigate()

  const goToContact = () => {
    navigate("/komponenter")
  }

  return (
    <article>
      <h1>React Router</h1>
      <p>React Router er en bibliotek til React, som bruges til at lave navigation i en Single Page Application (SPA). <br /> Det betyder, at du kan have flere “sider” i din app uden at browseren genindlæser hele siden.</p>
      <h2>Hvordan kan man installerer React Router</h2>
      <ul>
        <li>
          <p>Hvis du ikke allerede har et projekt, kan du oprette et med Vite:</p>
          <p className="code">npm create vite@latest</p>
        </li>
        <li>
          <p>I projektmappen skriver du:</p>
          <p className="code">npm install react-router-dom</p>
          <p>eller med yarn:</p>
          <p className="code">yarn add react-router-dom</p>
        </li>
        <li>
          <p>Efter installationen kan du tjekke <span className="fil">package.json</span>. Der skal stå:</p>
          <p className="code">"dependencies": {"{ react-router-dom: ^7.x.x }"}</p>
        </li>
        <li>
          <p>I dit React-projekt kan du nu importere komponenter fra React Router:</p>
          <p className="code">import {"{ BrowserRouter, Routes, Route, Link, useNavigate }"} from "react-router-dom";</p>
        </li>
      </ul>

      <button onClick={goToContact}>Gå til Komponenter</button>
    </article>
  )
}

function Komponenter() {
  return (
    <h1>d</h1>
  )
}

function Contact() {
  return (
    <h1>Kontakt side</h1>
  )
}

function Navbar() {
  return (
    <nav>
      <Link to="/">React Router</Link>
      <Link to="/komponenter">Komponenter</Link>
      <Link to="/contact">Kontakt</Link>
    </nav>
  )
}


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReactRouter />} />
        <Route path="/komponenter" element={<Komponenter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
