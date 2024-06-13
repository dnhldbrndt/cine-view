import React, { useState, useEffect }  from 'react';
import "../assets/bootstrap.min.css";
import "../assets/style.css";

const Header = () => {
	
	const [searchTerm, setSearchTerm] = useState(""); 
	
    const logout = async (e) => {
    e.preventDefault();
    let logout_url = window.location.origin+"/djangoapp/logout";
    const res = await fetch(logout_url, {
      method: "GET",
    });
  
    const json = await res.json();
    if (json) {
      let username = sessionStorage.getItem('username');
      sessionStorage.removeItem('username');
      window.location.href = window.location.origin;
      window.location.reload();
      alert("Logging out "+username+"...")
    }
    else {
      alert("The user could not be logged out.")
    }
  };
    
//The default home page items are the login details panel
let home_page_items =  <div></div>

//Gets the username in the current session
let curr_user = sessionStorage.getItem('username')

//If the user is logged in, show the username and logout option on home page
if ( curr_user !== null &&  curr_user !== "") {
    home_page_items = <div style={{display:"flex",  flexDirection: "row", flexGrow:"1"}}>
		<div style={{padding:"8px", fontSize:"16px",flexAlign:"center", marginLeft:"10px"}}>{sessionStorage.getItem("username")}</div>
		<ul class="navbar-nav"><li className="nav-item"><a className="nav-link" href="/djangoapp/logout" onClick={logout}>Logout</a></li></ul>
  </div>
} else {
	home_page_items =  	<div style={{display:"flex",  flexDirection: "row", flexGrow:"1"}}>			  
						  <ul class="navbar-nav"> 
		<li class="nav-item">
			<a className="nav-link" href="/login" style={{color: "#ededed"}}>Login </a>
		</li>				
		<li class="nav-item">
			<a className="nav-link"  href="/register" style={{color: "#ededed"}}>Register </a>
		</li>				 </ul> 
		</div>
}
    return (
        <div>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
			  <a class="navbar-brand" href="/" style={{fontSize:"22px"}}>Cineview</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mr-auto">
				  <li class="nav-item active">
					<a class="nav-link" href="/">Home </a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="/contact">Contact</a>
				  </li>
				  <li class="nav-item">

				  </li>
				</ul>
				  <form class="form-inline">
					<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchTerm(e.target.value)}/>
					<a class="btn btn-outline-success my-2 my-sm-0" type="submit"  href={'/search/'+searchTerm}>Search</a>
				  </form><span class="navbar-text">


						  {home_page_items}


					</span>
			  </div>
			</nav>   
        </div>
    )
}

export default Header
