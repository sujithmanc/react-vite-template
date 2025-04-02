import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ChildApp } from './ChildApp'
import Calculator from './Calculator'
import BackgroundSelector from './BackgroundSelector'
import { Home } from './Home'

function App() {

  const [background, setBackground] = useState("https://www.transparenttextures.com/patterns/hexellence.png");

  return (
    <div style={{ background: `url(${background})`, minHeight: "100vh" }}>
      <nav className="navbar navbar-dark navbar-expand-lg shadow-lg" style={{ background: "linear-gradient(90deg, #182848, #4b6cb7)" }}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>  
              <BackgroundSelector setBackground={setBackground} />
            </ul>
            {/* <form className="d-flex me-3">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <h1>Welcome to Vite + Bootstrap</h1>
        {/* <Calculator /> */}
        <Home />
      </div>
    </div>
  );
}

export default App
