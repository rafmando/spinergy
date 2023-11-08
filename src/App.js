import "./App.css";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Products } from "./components/products/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
