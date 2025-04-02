// BackgroundSelector.jsx
import React, { useState } from "react";

const patterns = [
  "https://www.transparenttextures.com/patterns/hexellence.png",
  "https://www.transparenttextures.com/patterns/asfalt-light.png",
  "https://www.transparenttextures.com/patterns/cartographer.png",
  "https://www.transparenttextures.com/patterns/cubes.png"
];

function BackgroundSelector({ setBackground }) {
    
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Change Background
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {patterns.map((pattern, index) => (
          <li key={index}>
            <button className="dropdown-item" onClick={() => setBackground(pattern)}>
              Pattern {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default BackgroundSelector;