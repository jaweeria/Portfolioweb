import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Aboutme from "./Components/Aboutme";
import Contact from "./Components/Contact";
import Footer from "./Navbar/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Aboutme />
        <Project />
        <Contact />
        <Footer />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Project />} />
          <Route path="/" element={<Aboutme />} />
          <Route path="/" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
