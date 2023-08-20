import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from "./Components/Home";
import Testimonial from './Components/Testimonials';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">

      <Home/>
      <About/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;