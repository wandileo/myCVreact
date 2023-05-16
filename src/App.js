import { Routes, Route } from "react-router-dom";
import './App.css';
import CvHome from './pages/CvHome';
import Skill from "./pages/Skill";
import Workplace from "./pages/Workplace";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<CvHome />} />
        <Route path="skill" element={<Skill />} />
        <Route path="workplace" element={<Workplace />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
