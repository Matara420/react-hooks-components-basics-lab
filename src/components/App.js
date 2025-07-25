import React from "react";

// Given components
function Navbar() {
  return (
    <nav>
      <a href="#home">Home</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Welcome to my portfolio!</h1>
    </div>
  );
}

// ✅ Your new component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// ✅ Main component
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
