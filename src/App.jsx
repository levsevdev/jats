import "./App.css";
import ContactForm from "./components/ContactForm";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router";

function App() {
  return (
    <div className="min-h-screen w-full ">
      <Router>
        <NavBar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
