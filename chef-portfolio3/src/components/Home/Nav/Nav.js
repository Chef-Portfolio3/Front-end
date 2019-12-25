import React, {useState} from "react";
import styled from "styled-components";
import { Route, Link, NavLink } from "react-router-dom";
import { Motion, spring } from 'react-motion';

const Nav = () => {

  return (
    <nav className="navTop">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="chefs">Our Chef's</NavLink>
        <NavLink className="btn" to="signin">Sign In</NavLink>
        <NavLink className="btn nav__link--btn--highlight active" to="/Register">Register</NavLink>
    </nav>
  );
};


const NavWhite = () => {

  return (
    <Motion defaultStyle={{ left: -100 }} style={{ left: spring(10) }}>
    {val => <nav className="navWhite" style={{ position: 'fixed', ...val }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="chefs">Our Chef's</NavLink>
        <NavLink className="btn" to="signin">Sign In</NavLink>
        <NavLink className="btn nav__link--btn--highlight active" to="/Register">Register</NavLink>
    </nav>}
    </Motion>
  );
};



function Scroll(){
  const [move, setMove] = useState(0)
 document.addEventListener('scroll', () => {
    setMove(window.scrollY)
 })

 if (move > 70){
  return <NavWhite />
 }
 return <Nav/>
}

export default Scroll
