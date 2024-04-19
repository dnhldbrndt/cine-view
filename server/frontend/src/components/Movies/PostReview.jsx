import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Movies.css";
import "../assets/style.css";
import Header from '../Header/Header';


const PostReview = () => {
  const [movie, setMovie] = useState({});
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");

  let curr_url = window.location.href;
  let root_url = curr_url.substring(0,curr_url.indexOf("postreview"));
  let params = useParams();
  let id =params.id;
  let movie_url = root_url+`djangoapp/movie/${id}`;
  let review_url = root_url+`djangoapp/add_review`;

  const postreview = async ()=>{
    let name = sessionStorage.getItem("firstname")+" "+sessionStorage.getItem("lastname");
    //If the first and second name are stored as null, use the username
    if(name.includes("null")) {
      name = sessionStorage.getItem("username");
    }
    if(review === "" || date === "" || rating === "") {
      alert("All details are mandatory")
      return;
    }


    let jsoninput = JSON.stringify({
      "name": name,
      "movie": id,
      "review": review,
      "review_date": date,
      "rating": rating,
    });

    console.log(jsoninput);
    const res = await fetch(review_url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: jsoninput,
  });

  const json = await res.json();
  if (json.status === 200) {
      window.location.href = window.location.origin+"/movie/"+id;
  }

  }
  const get_movie= async ()=>{
    const res = await fetch(movie_url, {
      method: "GET"
    });
    const retobj = await res.json();
    
    if(retobj.status === 200) {
      let movieobjs = Array.from(retobj.movie)
      if(movieobjs.length > 0)
        setMovie(movieobjs[0])
    }
  }

  useEffect(() => {
    get_movie();

  },[]);


  return (
    <div>
      <Header/>
      <div  style={{margin:"5%"}}>
      <h1 style={{color:"#ebebeb"}}>{movie.title}</h1>
      <textarea id='review' cols='50' rows='7' onChange={(e) => setReview(e.target.value)} style={{borderRadius:"5px"}}></textarea>
      <div className='input_field'>
      Review Date <input type="date" onChange={(e) => setDate(e.target.value)}/>
      </div>


      <div className='input_field'>
      Rating <input type="int" onChange={(e) => setRating(e.target.value)} max={5} min={0}/>
      </div>

      <div>
      <button className='postreview' onClick={postreview}>Post Review</button>
      </div>
    </div>
    </div>
  )
}
export default PostReview
