import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css"

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
          <p>Efter installationen kan du tjekke <code className="fil">package.json</code>. Der skal stå:</p>
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
        <pre className="code">{`import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* resten af appen */}
    </BrowserRouter>
  );
}`}</pre>
      </li>
      <li>
        <h2>Routes</h2>
        <p> <code className="fil">{`<Routes>`}</code> er en container for alle dine <code className="fil">{`<Route>`}</code>-elementer. Den fortæller React Router, “her er alle de mulige ruter, vi kan vise”.</p>
        <pre className="code">{`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`}</pre>
      </li>
      <li>
        <h2>Route</h2>
        <p> <code className="fil">{`<Route>`}</code> definerer en specifik “vej” i appen og hvilken komponent, der skal vises, når den sti (path) matches.</p>
        <pre className="code">{`<Route path="/contact" element={<Contact />} />`}</pre>
      </li>
      <li>
        <h2>Link</h2>
        <p> <code className="fil">{`<Link>`}</code> er som et normalt HTML <code className="fil">{`<a>`}</code>-tag, men den ændrer URL uden at genindlæse siden, hvilket er vigtigt for Single Page Applications.</p>
        <pre className="code">{`<Link to="/about">Om os</Link>`}</pre>
      </li>
    </ul>
  )
}

function Navigate() {
  return (
    <article>
      <h2>useNavigate</h2>
      <p>Et hook (funktion), som bruges i din kode til at navigere programmatisk (altså med JavaScript).</p>
      <pre className="code">{`
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // fx efter login
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Log ind</button>;
}`}</pre>
    </article>
  )
}

function Navbar() {
  return (
    <header className="header">
      <nav>
        <Link className="link" to="/">React Router</Link>
        <Link className="link" to="/komponenter">Komponenter</Link>
        <Link className="link" to="/navigate">Navigate</Link>
      </nav>
      <hr />
    </header>
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
