import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-inverse">
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/topics'>Topics</NavLink>
        <NavLink to='/create-story'>Create a story</NavLink>
        <NavLink to='/users'>Users</NavLink>
      </nav>
      <div class="container">
        <div class="jumbotron">
          <img src='https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png' width='100%' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;