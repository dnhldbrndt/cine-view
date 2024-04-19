import React, { useState, useEffect } from 'react';
 
import "../assets/styles.css";
import Header from '../Header/Header';
 

const About = () => {
   

return(
  <div>
      <Header/>
		<div className="page-content">
			<div class="banner" name="about-header">
 
			  <h1>About</h1>
			  Welcome to Cineview.
			 At Cine-View, we’re more than just a film review website; we’re your passionate companions on a cinematic journey. Our mission? To celebrate the magic of storytelling through thoughtful, insightful reviews that ignite your love for the silver screen.
			 
			 Your voice matters. Comment, debate, and share your favorite movie quotes. Let’s build a community where film nerds, casual viewers, and popcorn enthusiasts unite.
			 <hr style={{height:"2px",borderWidth:"0",color:"gray",backgroundColor:"gray"}} />
			 <h4 style={{textAlign:"left"}}>What Defines Us? </h4>
			 <ul>
				<li>
				Diverse Perspectives: Our team of cinephiles spans continents, genres, and eras. From classic Hollywood to avant-garde Korean cinema, we’ve got you covered. Expect reviews that reflect our shared love for film and our unique viewpoints.
				</li>
				<li>
				The Art of Analysis: We don’t just watch movies; we dissect them. Cinematography, sound design, character arcs—we explore every nook and cranny. Our reviews are a canvas where we paint our impressions, layer by layer.
				</li>
				<li>
				Dive into our extensive collection of film reviews. Whether it’s a blockbuster, an indie gem, or a timeless classic, we’ve got you covered.
				</li>
				<li>
				Unfiltered Honesty: No sugar-coating here. If a film soars, we’ll cheer. If it stumbles, we’ll kindly point out the tripwire. Our loyalty lies with the art form, not the industry.
				</li>
			</ul>
			</div>
			<div style={{display: "flex",flexDirection: "row", margin:"auto"}}>
			  

      

     
	 
				
			</div>
 
 
 
 
		</div>
  </div>
)
}

export default About