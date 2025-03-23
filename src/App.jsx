import Footer from "../public/components/headerFooter/footer/footer";
import Header from "../public/components/headerFooter/header/Header";
import Hero from "../public/components/Hero/hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      
    </Router>
  );
}

export default App;
