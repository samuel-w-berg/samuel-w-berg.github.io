import React from 'react';
import { Link } from 'react-router-dom';
// import your styles and any other dependencies

export default function LandingPage() {
  return (
    <div className="landing">
      <h1>Hello, I'm Sam</h1>
      <p>I'm a software engineer specialized in...</p>

      <nav>
        <ul>
          <Link path="/about"><li>About Me</li></Link>
          <li><Link path="/skills">Skills</Link></li>
          <li><Link path="/portfolio">Portfolio</Link></li>
          <li><Link path="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

