import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Consultation from "./pages/Consultation/Consultation";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consultation />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;