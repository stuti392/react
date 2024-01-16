import React from 'react';
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import {FaSearch} from "react-icons/fa"


function Header() {
  return (

    <nav className="header">

      <img src={logo} alt='logo'/>

      <div>

        <Link to="/tvshows">TV Shows</Link>
        <Link to="/tvshows">Movies</Link>
        <Link to="/tvshows">Recently Added</Link>
        <Link to="/tvshows">My List</Link>

      </div>

      <FaSearch/>



    </nav>


  )
}

export default Header