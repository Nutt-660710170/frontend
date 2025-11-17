import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cinema from "./pages/Cinema";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cinema" element={<Cinema />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
