// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Listing from './components/Listing/Listing';
import Aminities from './components/Aminities/Aminities';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Listing />
      <Aminities />
      <Footer />
    </>
  );
}

export default App;
