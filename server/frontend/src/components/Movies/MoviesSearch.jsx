import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Movies.css";
import "../assets/style.css";
import Header from '../Header/Header';
import review_icon from "../assets/reviewicon.png"

const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);

  let [genre, setGenre] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  let params = useParams();
  let searchterm = params.search;

  let movie_url ="/djangoapp/search/" + searchterm;
  let movie_url_by_genre = "/djangoapp/get_movies/";
 
  const filterMovies = async (genre) => {
    movie_url_by_genre = movie_url_by_genre+genre;
    const res = await fetch(movie_url_by_genre, {
      method: "GET"
    });
    const retobj = await res.json();
    if(retobj.status === 200) {
      let genre_movies = Array.from(retobj.movies)
      setMoviesList(genre_movies)
    }
  }

  const get_movies = async () => {
    const res = await fetch(movie_url, {
      method: "GET"
    });
    const retobj = await res.json();
    if(retobj.status === 200) {
      let all_movies = Array.from(retobj.movies)
      let genre = [];
      all_movies.forEach((movie)=>{
        genre.push(movie.genre)
      });
	  all_movies.forEach((movie)=> {
		  
		let oldUrl = movie.poster;
		let newUrl = oldUrl.replace("http", "https");
		movie.poster = newUrl; 
	  });

      setGenre(Array.from(new Set(genre)))
      setMoviesList(all_movies)

    }
  }
  useEffect(() => {
    get_movies();
  },[]);  


let isLoggedIn = sessionStorage.getItem("username") != null ? true : false;
return(
  <div>
      <Header/>
		<div className="page-content">
			 <table>
			  <tr>
		 
			  <th>Title</th>
			  <th>Year</th>
			  <th>Director</th>
			  <th>Genre</th>
			  <th>      
				Poster
			  </th>
			  { isLoggedIn ? (
				  <th>Review Movie</th>
				 ):<></>
			  }
			  </tr>
			 {moviesList.map(movie => (
				<tr>
		 
				  <td><a href={'/movie/'+movie['id']}>{movie['title']}</a></td>
				  <td>{movie['year']}</td>
				  <td>{movie['director']}</td>
				  <td>{movie['genre']}</td>
				  <td><img src={movie['poster']} alt={movie['title']} style={{width:"15%",height:"15%"}}/></td>
				  {isLoggedIn ? (
					<td><a href={`/postreview/${movie['id']}`}><img src={review_icon} className="review_icon" alt="Post Review"/></a></td>
				   ):<></>
				  }
				</tr>
			  ))}
			 </table>
		 </div>
  </div>
)
}

export default Movies
