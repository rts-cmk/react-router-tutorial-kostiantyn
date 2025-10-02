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
          <pre className="code">{`npm create vite@latest`}</pre>
        </li>
        <li>
          <p>I projektmappen skriver du:</p>
          <pre className="code">{`npm install react-router-dom`}</pre>
          <p>eller med yarn:</p>
          <pre className="code">{`yarn add react-router-dom`}</pre>
        </li>
        <li>
          <p>Efter installationen kan du tjekke <span className="fil">package.json</span>. Der skal stå:</p>
          <pre className="code">
            {`"dependencies": {"react-router-dom": "^7.x.x"}`}
          </pre>
        </li>
        <li>
          <p>I dit React-projekt kan du nu importere komponenter fra React Router:</p>
          <pre className="code">import {`{ BrowserRouter, Routes, Route, Link }`} from "react-router-dom";</pre>
        </li>
      </ul>

      <button onClick={goToContact}>Gå til Komponenter</button>
    </article>
  )
}

function Komponenter() {
  return (
    <ul>
      <li>
        <h2>BrowserRouter</h2>
        <p>BrowserRouter er en “wrapper” for hele dit React-app. Den holder styr på URL’en i browseren og sørger for, at de rigtige komponenter bliver vist, når URL’en ændres.</p>
      </li>
      <li>
        <h2>Routes</h2>
        <p> <pre className="fil">{`<Routes>`}</pre> er en container for alle dine <pre className="fil">{`<Route>`}</pre>-elementer. Den fortæller React Router, “her er alle de mulige ruter, vi kan vise”.</p>
        
      </li>
      <li>
        <h2>Route</h2>
        <p> <pre className="fil">{`<Route>`}</pre> definerer en specifik “vej” i appen og hvilken komponent, der skal vises, når den sti (path) matches.</p>
      </li>
      <li>
        <h2>Link</h2>
        <p> <pre className="fil">{`<Link>`}</pre> er som et normalt HTML <pre className="fil">{`<a>`}</pre>-tag, men den ændrer URL uden at genindlæse siden, hvilket er vigtigt for Single Page Applications.</p>
      </li>
    </ul>
  )
}

function Navigate() {
  return (
    <article>
      <h2>useNavigate</h2>
      <p>Et hook (funktion), som bruges i din kode til at navigere programmatisk (altså med JavaScript).</p>
    </article>
  )
}

function Navbar() {
  return (
    <nav>
      <Link to="/">React Router</Link>
      <Link to="/komponenter">Komponenter</Link>
      <Link to="/navigate">Navigate</Link>
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
        <Route path="/navigate" element={<Navigate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
