import * as React from "react";
import { useState,useRef } from "react";
import './Profile.css'
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import RedditIcon from '@mui/icons-material/Reddit';
import EditIcon from '@mui/icons-material/Edit';
import { Link, Navigate } from "react-router-dom";
function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

function ProfileHeader() {
    return (
        <header >
          <div  className="pageHeader">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
           target="_blank" >
          <HomeIcon style={{ fontSize: 60 }}></HomeIcon>
          </a>
          <RedditIcon style={{ fontSize: 60 }}></RedditIcon>
          <ChatIcon style={{ fontSize: 50 }}></ChatIcon>
          </div>
          <div className="logout">
            <LogOut />
          </div>
          <div className="welcome">
            <h1>Profile</h1>
          </div>
          
        </header>
      );
}

function UserProfile() {
    const [fname, setfname] = useState("Admin");
    const [lname, setlname] = useState("Admin");
    const [uname, setuname] = useState("Admin");
    const [email, setemail] = useState("Admin");
    const [cno, setcno] = useState(0);
    const [age, setage] = useState(0);
    const [togf, setTogf] = useState(0);
    const [togl, setTogl] = useState(0);
    const [togu, setTogu] = useState(0);
    const [toge, setToge] = useState(0);
    const [togc, setTogc] = useState(0);
    const [toga, setToga] = useState(0);
    const [togf1, setTogf1] = useState(0);
    const [togf2, setTogf2] = useState(0);
    function handlefButton(){
      setTogf(1-togf);
    };
    function handlelButton(){
      setTogl(1-togl);
    };
    function handleuButton(){
      setTogu(1-togu);
    };
    function handleeButton(){
      setToge(1-toge);
    };
    function handlecButton(){
      setTogc(1-togc);
    };
    function handleaButton(){
      setToga(1-toga);
    };
    function handleF1() {
      setTogf2(0);
      setTogf1(1-togf1);
    }
    function handleF2() {
      setTogf1(0);
      setTogf2(1-togf2);
    }
    return (
      <div className="page">
        <div className="profile">
            <img 
              src="https://i.imgur.com/oWQaSWOb.jpg"
              className="dp"></img>
            <div className="info">
              <h3>First Name: <input type="text" className="data" disabled={!togf} value={fname} onChange={e => setfname(e.target.value)}/><button className="edit" onClick={handlefButton}>{ togf == 0 && <EditIcon style={{ fontSize: 20 }}></EditIcon>}{togf == 1 && <h4>Save</h4>}</button></h3>
              <h3>Last Name:  <input type="text" className="data" disabled={!togl} value={lname} onChange={e => setlname(e.target.value)}/><button className="edit" onClick={handlelButton}>{ togl == 0 && <EditIcon style={{ fontSize: 20 }}></EditIcon>}{togl == 1 && <h4>Save</h4>}</button></h3>
              <h3>Username:   <input type="text" className="data" disabled={!togu} value={uname} onChange={e => setuname(e.target.value)}/><button className="edit" onClick={handleuButton}>{ togu == 0 && <EditIcon style={{ fontSize: 20 }}></EditIcon>}{togu == 1 && <h4>Save</h4>}</button></h3>
              <h3>Email:  <input type="text" className="data" disabled={!toge} value={email} onChange={e => setemail(e.target.value)}/><button className="edit" onClick={handleeButton}>{ toge == 0 && <EditIcon style={{ fontSize: 20 }}></EditIcon>}{toge == 1 && <h4>Save</h4>}</button></h3>
              <h3>Contact Number:  <input type="number" className="data" disabled={!togc} value={cno} onChange={e => setcno(e.target.value)}/><button className="edit" onClick={handlecButton}>{ togc == 0 && <EditIcon style={{ fontSize: 20 }}></EditIcon>}{togc == 1 && <h4>Save</h4>}</button></h3>
              <h3>Age:  <input type="number" className="data" disabled={!toga} value={age} onChange={e => setage(e.target.value)}/><button className="edit" onClick={handleaButton}>{ toga == 0 && <EditIcon style={{ fontSize: 20 }}></EditIcon>}{toga == 1 && <h4>Save</h4>}</button></h3>

            </div>
        </div>
        <div className="foll">
          <button className="follBut" onClick={handleF1}>
            <h2>2</h2><br /> Followers</button>
          <button className="follBut" onClick={handleF2}>
            <h2>2</h2><br /> Following</button>
            <div className="list">
              {togf1 == 1 && <ul><li>yeetusonthefetus</li><li>wowsomanyfollowers</li></ul>}
              {togf2 == 1 && <ul><li>yeetusonthefetus</li><li>wowsomanyfollowing</li></ul>}
            </div>
          </div>
      </div>
    );
}

function LogOut() {
  const loggedIn = 0;
  const [profilelink, setNextLink] = useState("/profile");
  function handleLogOut() {
    localStorage.setItem("lIn",JSON.stringify(loggedIn));
    setNextLink("/");
  }
  return <Link to={profilelink}><button className="lbutton" onClick={handleLogOut}>Log Out</button></Link>;
}

export default function user() {
  if(getStorageValue("lIn",0) === 0) {
    return <Navigate replace to="/" />;
  }
  else {
    return (
       <div className="html">
        <div className="userProfile">
            <ProfileHeader />
            <UserProfile />
            
        </div>
        </div>
    );
  }
}

