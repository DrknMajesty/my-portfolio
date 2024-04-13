import Navbar from "./webcomponents/navbar/navbar";
import Intro from "./webcomponents/intro/intro";
import Service from "./webcomponents/service_section/service";
import TechStack from "./webcomponents/techstack/techstack";
import Contact from "./webcomponents/Contact/contact";
import About from "./webcomponents/Aboutme/Aboutme"
import Footer from "./webcomponents/footer/footer";
import "./webstyle.css";

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <About/>
          <Service/>
          <TechStack/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;

// import Project from "./components/finishproject/project";