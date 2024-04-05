
import "./App.css";
import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
