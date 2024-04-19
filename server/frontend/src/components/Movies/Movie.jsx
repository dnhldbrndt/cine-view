import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Movies.css";
import "../assets/style.css";
import positive_icon from "../assets/positive.png"
import neutral_icon from "../assets/neutral.png"
import negative_icon from "../assets/negative.png"
import review_icon from "../assets/reviewbutton.png"
import Header from '../Header/Header';

const Movie = () => {


  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [unreviewed, setUnreviewed] = useState(false);
  const [postReview, setPostReview] = useState(<></>)

  let curr_url = window.location.href;
  let root_url = curr_url.substring(0,curr_url.indexOf("movie"));
  let params = useParams();
  let id =params.id;
  let movie_url = root_url+`djangoapp/movie/${id}`;
  let reviews_url = root_url+`djangoapp/reviews/movie/${id}`;
  let post_review = root_url+`postreview/${id}`;
  
  const get_movie = async ()=>{
    const res = await fetch(movie_url, {
      method: "GET"
    });
    const retobj = await res.json();
    
    if(retobj.status === 200) {
      let movieobjs = Array.from(retobj.movie)
	  let oldUrl = movieobjs[0]['poster'];
      let newUrl = oldUrl.replace("http", "https");
      movieobjs[0]['poster'] = newUrl;
	  setMovie(movieobjs[0])
    }
  }

  const get_reviews = async ()=>{
    const res = await fetch(reviews_url, {
      method: "GET"
    });
    const retobj = await res.json();
    
    if(retobj.status === 200) {
      if(retobj.reviews.length > 0){
        setReviews(retobj.reviews)
      } else {
        setUnreviewed(true);
      }
    }
  }

  const senti_icon = (sentiment)=>{
    let icon = sentiment === "positive"?positive_icon:sentiment==="negative"?negative_icon:neutral_icon;
    return icon;
  }

  useEffect(() => {
    get_movie();
    get_reviews();
    if(sessionStorage.getItem("username")) {
      setPostReview(<div style={{marginTop: "30px"}}><a href={post_review} className="review-button">Post Review</a></div>)

      
    }
  },[]);  

  


return(
  <div>
      <Header/>
	  <div style={{margin:"20px"}}>
      <div style={{marginTop:"10px"}}>
      <h1 style={{color:"grey"}}>{movie.title}</h1>
	  <img src={movie['poster']} alt={movie['title']} style={{width:"200px",height:"300px"}}/>
	  <hr style={{backgroundColor: "#404757", width:"250px"}}/>
      <h5  style={{color:"#fbfbfb"}}>Year: {movie['year']} <br/>
		  Genre: {movie['genre']} <br/>
		  Director: {movie['director']}<br/>
		  Country: {movie['country']} </h5>
      </div>
	  {postReview}
      <div class="reviews_panel">
		  {reviews.length === 0 && unreviewed === false ? (
			<text>Loading Reviews....</text>
		  ):  unreviewed === true? <div>No reviews yet! </div> :
		  reviews.map(review => (
			<div className='review_panel'>
				<div class="d-flex mt-2 ms-2">
				  <div className='review-rating me-2'>{review.rating} / 5 </div> 
				  <img src={senti_icon(review.sentiment)} className="emotion_icon" alt='Sentiment'/>
				</div>
				<div class="d-flex mt-2 ms-2">
				  <div className='reviwer me-2'>{review.name} </div>			  
				  <div className='review-date'>[{review.review_date}]</div>
				</div>
				<div className="review m-2">{review.review}
				</div>
			</div>
		  ))}
    </div> 
	</div> 
  </div>
)
}

export default Movie
