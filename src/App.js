import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about-us/About";
import Project from "./pages/project/Project";
import Contact from "./pages/contact-us/Contact";
import Details from "./pages/details/Details";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/estate/oyo-estate" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
