import React, { useState } from "react";
import "./Register.css";
import close_icon from "../assets/close.png"
import Header from '../Header/Header';
const Register = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");


  const gohome = ()=> {
    window.location.href = window.location.origin;
  }

  const register = async (e) => {
    e.preventDefault();

    let register_url = window.location.origin+"/djangoapp/register";
    
    const res = await fetch(register_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userName": userName,
            "password": password,
            "firstName":firstName,
            "lastName":lastName,
            "email":email
        }),
    });

    const json = await res.json();
    if (json.status) {
        sessionStorage.setItem('username', json.userName);
        window.location.href = window.location.origin;
    }
    else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    }
};

  return(
    <div>
      <Header/>
    <div className="register_container" style={{width: "50%", backgroundColor:"#1f2733", borderRadius: "20px"}}>
      <div className="header" style={{display: "flex",flexDirection: "row"}}>
          <div className="text" style={{flexGrow:"1", fontSize: "24px", textAlign: "center", alignSelf:"flex-end"}}>
			Sign Up
			<div style={{fontSize: "11px", color:"#797979", marginTop: "10px"}}>Register to review movies.</div>
	      </div> 
		  <div className="close-box">
			  <div style={{alignSelf:"flex-start" }}>
				  <a href="/" onClick={() => {gohome()}} style={{}}>
					<img style={{width:"0.5cm",height:"0.5cm"}} src={close_icon} alt="X"/>
				  </a>
			  </div>
		  </div>

       </div>
         <hr style={{width:"75%",textAlign:"center", marginLeft:"auto", marginRight:"auto"}} />
        <form onSubmit={register}>
        <div className="inputs">
          <div className="input">
             
            <input type="text"  name="username" placeholder="Username" className="input_field" onChange={(e) => setUserName(e.target.value)}/>

          </div>
		  			<div style={{fontSize: "11px", color:"#797979"}}>This is the name that will be shown with your messages. You may use any name you wish.</div>
          <div>
             
            <input type="text"  name="first_name" placeholder="First Name" className="input_field" onChange={(e) => setFirstName(e.target.value)}/>
          </div>

          <div>
             
            <input type="text"  name="last_name" placeholder="Last Name" className="input_field" onChange={(e) => setlastName(e.target.value)}/>
          </div>

          <div>
             
            <input type="email"  name="email" placeholder="email" className="input_field" onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="input">
             
            <input name="psw" type="password"  placeholder="Password" className="input_field" onChange={(e) => setPassword(e.target.value)}/>
          </div>

        </div>
        <div className="submit_panel">
          <input className="submit" type="submit" value="Register"/>
        </div>
      </form>
    </div>
	</div>
  )
}

export default Register;