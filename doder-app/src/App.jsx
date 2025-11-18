import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cinema from "./pages/Cinema";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
