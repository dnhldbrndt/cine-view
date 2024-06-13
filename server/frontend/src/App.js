import LoginPanel from "./components/Login/Login"
import RegisterPanel from "./components/Register/Register"
import Movies from './components/Movies/Movies';
import Movie from "./components/Movies/Movie"
import PostReview from "./components/Movies/PostReview"
import SearchMovie from "./components/Movies/MoviesSearch"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Filmtip from "./components/Filmtip/Filmtip"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegisterPanel />} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movie/:id" element={<Movie/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
	  <Route path="/search/:search" element={<SearchMovie/>} />
	  <Route path="/search" element={<Movies/>} />
	  <Route path="/" element={<Home/>} />
	  <Route path="/about" element={<About/>} />
	  <Route path="/contact" element={<Contact/>} />
	  <Route path="/filmtip" element={<Filmtip/>} />
    </Routes>
  );
}
export default App;
