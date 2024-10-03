import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Sidebar from "./Sidebar";

function App(){
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Home />
          <About />
          <Experience />
          <Works />
          <Contact />
        </div>
        <Footer />
      </div>
        
    </div>
  );
}

export default App;