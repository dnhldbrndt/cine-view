import React, { useState, useEffect } from 'react';
 import tapes from "../assets/tapes.jpg"
import "../assets/styles.css";
import Header from '../Header/Header';
 

const Home = () => {
   

return(
  <div>
      <Header/>
		<div className="page-content" style={{display: "flex",flexDirection: "column"}}>
				<div class="tape-bg" style={{marginTop: "50px", alignSelf: "center"}}> 
				<div class="tape-wrapper">
					<div class="tape-button">				
						<a href="/movies">View Movies</a>
					</div>
					<div class="tape-box">
						<h5>Welcome to Cineview!</h5>
					</div>
				</div>
			</div>
		 </div>
  </div>
)
}

export default Home