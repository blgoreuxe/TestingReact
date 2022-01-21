import React from 'react';
import './App.css';

function App() {
  return (
    <div className="header">
      <header>
        <h1 className="title" onClick={Home}>Hapseek</h1>
      </header>
      <nav>
        <ul class="headitems">
          <li className="active" onClick={Home}><strong>Home</strong></li>
          <li onClick={Projects}><strong>Projects</strong></li>
          <li onClick={About}><strong>About</strong></li>
        </ul>
      </nav>
    </div>
  );
}

function Home() {
  window.open("https://Testing-Testing.brandongore502.repl.co" , "_self")
}

function Projects() {
  window.open("https://hapseek.brandongore502.repl.co/projects" , "_self")
}

function About() {
  window.open("https://hapseek.brandongore502.repl.co/about" , "_self")
}

export default App;