import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import TwitterIcon from '../imgs/twitter.png';

const Header = () => (
  <div className="sidenav">
    <Nav className="flex-column">
      <img className="logo" src={TwitterIcon} alt=""/>
      <NavLink className="nav-link" exact to='/' activeClassName="active"><i className='fas fa-home'></i>Home<span></span></NavLink>
      <NavLink className="nav-link" to="/explore"><i className="fas fa-compass"></i>Explore</NavLink>
      <NavLink className="nav-link" to="/notification"><i className='fas fa-bell'></i>Notification</NavLink>
      <NavLink className="nav-link" to="/messages"><i className='fas fa-mail-bulk'></i>Messages</NavLink>
    </Nav>
  </div>
)

export default Header;
