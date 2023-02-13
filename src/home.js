import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
    .then(() => navigate("/login"))
    .catch(err => console.log(err));
  }
  return (
    <div>
      home
      <p onClick={_ => logout()}> Logout </p>
    </div>
  )
}

export default Home