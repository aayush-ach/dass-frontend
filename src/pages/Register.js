import * as React from "react";
import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import RedditIcon from '@mui/icons-material/Reddit';
let loggedIn;
let lIn;
function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

function Header() {
  return (
    <header >
      <div className="pageHeader">
        <h4>Well hello there</h4>

        <RedditIcon style={{ fontSize: 60 }}></RedditIcon>
        <h4>Sign Up or Log In!</h4>
      </div>
      <div className="welcome">
        <h1>Welcome to Greddiit!</h1>
      </div>
    </header>
  );
}

let signup;
function LogIn() {
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const [profilelink, setNextLink] = useState("/");
  const [email, setemail] = useState(null);
  const [loggedIn, setLoggedin] = useState(0);
  const handleChangeU = (event) => {
    setusername(event.target.value);
  }
  const handleChangeP = (event) => {
    setpassword(event.target.value);
  }
  const handleChangeE = (event) => {
    setemail(event.target.value);
  }
  function handleSubmitLButton() {
    if (username === 'admin' && password === 'admin') {
      setLoggedin(1);
      localStorage.setItem("lIn", JSON.stringify(loggedIn));
      console.log("hi ", { loggedIn });
      setNextLink("/profile");
    }
    else {
      console.log("incorrect creds");
      setLoggedin(getStorageValue("lIn", 0));
      console.log("hi ", { loggedIn });
    }
  }
  useEffect(() => {
    localStorage.setItem("lIn", JSON.stringify(loggedIn));
  }, [loggedIn]);
  return (
    <div className="forms">

      <form>
        <input
          className="inputBox2"
          type="text"
          value={username}
          onChange={handleChangeU}
          label="Username"
          placeholder="Username"
        />
      </form>
      <form>
        <input
          className="inputBox2"
          type="text"
          value={email}
          onChange={handleChangeE}
          label="Email"
          placeholder="Email"
        />
      </form>
      <form>
        <input
          className="inputBox2"
          type="password"
          value={password}
          onChange={handleChangeP}
          label="password"
          placeholder="Password"
        />
      </form>
      <Link to={profilelink}>
        <button
          className="signUp"
          label="signup"
          disabled={!(username && password)}
          onClick={handleSubmitLButton}
        >Log In!</button>
      </Link>
    </div>
  );
}


function SignUp() {
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const [fname, setfname] = useState(null);
  const [lname, setlname] = useState(null);
  const [email, setemail] = useState(null);
  const [cno, setcno] = useState(null);
  const [age, setage] = useState(null);
  const [loggedIn, setLoggedin] = useState(0);
  const [profilelink, setNextLink] = useState("/");
  const handleChangeU = (event) => {
    setusername(event.target.value);
  }
  const handleChangeP = (event) => {
    setpassword(event.target.value);
  }
  const handleChangeF = (event) => {
    setfname(event.target.value);
  }
  const handleChangeL = (event) => {
    setlname(event.target.value);
  }
  const handleChangeE = (event) => {
    setemail(event.target.value);
  }
  const handleChangeC = (event) => {
    setcno(event.target.value);
  }
  const handleChangeA = (event) => {
    setage(event.target.value);
  }
  //setLoggedin(getStorageValue(lIn,0));
  //console.log("hi  ", {loggedIn});
  function handleSubmitSButton() {
    if (username === 'admin' && password === 'admin') {
      setLoggedin(1);
      localStorage.setItem("lIn", JSON.stringify(loggedIn));
      console.log("hi ", { loggedIn });
      setNextLink("/profile");
    }
    else {
      console.log("incorrect creds");
      setLoggedin(getStorageValue("lIn", 0));
      console.log("hi ", { loggedIn });
    }
  }
  useEffect(() => {
    localStorage.setItem("lIn", JSON.stringify(loggedIn));
  }, [loggedIn]);
  return (
    <div className="forms">

      <form>
        <input
          className="inputBox1"
          type="text"
          value={fname}
          onChange={handleChangeF}
          label="First Name"
          placeholder="First Name"
        />
        <input
          className="inputBox1"
          type="text"
          value={lname}
          onChange={handleChangeL}
          label="Last Name"
          placeholder="Last Name"
        />
      </form>
      <form>
        <input
          className="inputBox2"
          type="text"
          value={username}
          onChange={handleChangeU}
          label="Username"
          placeholder="Username"
        />
      </form>
      <form>
        <input
          className="inputBox2"
          type="text"
          value={email}
          onChange={handleChangeE}
          label="Email"
          placeholder="Email"
        />
      </form>
      <form>
        <input
          className="inputBox2"
          type="password"
          value={password}
          onChange={handleChangeP}
          label="password"
          placeholder="Password"
        />
      </form>
      <form>
        <input
          className="inputBox1"
          type="number"
          value={cno}
          onChange={handleChangeC}
          label="Contact Number"
          placeholder="Contact Number"
        />
        <input
          className="inputBox1"
          type="number"
          value={age}
          onChange={handleChangeA}
          label="Age"
          placeholder="Age"
        />
      </form>
      <Link to={profilelink}>
        <button
          className="signUp"
          label="signup "
          disabled={!(username && password)}
          onClick={handleSubmitSButton}
        >Sign Up!</button>
      </Link>
    </div>
  );
}
function MainPart() {


  const [signup, setSignup] = useState(1);
  function handleLogin() {
    setSignup(0);
    signup = 0;
  }
  function handleSignup() {
    setSignup(1);
    signup = 1;
  }
  if (signup) {
    return (
      <div className="forms">
        <button
          className="checkSignUp2" onClick={handleLogin}>Log In</button>
        <button
          className="checkSignUp1" onClick={handleSignup}>Sign Up</button>

        <SignUp />;
      </div>
    );
  }
  else {
    return (
      <div className="forms">
        <button
          className="checkSignUp1" onClick={handleLogin}>Log In</button>
        <button
          className="checkSignUp2" onClick={handleSignup}>Sign Up</button>

        <LogIn />;
      </div>
    );
  }
}


export default function Register() {
  if(getStorageValue("lIn",0) === 1) {
    return <Navigate replace to="/profile" />;
  }
  else {
  return (<html
    className="html"
  >
    <Header />;
    <MainPart />;
  </html>
  );
  }
}