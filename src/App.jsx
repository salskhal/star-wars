import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-hero-image bg-cover bg-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
