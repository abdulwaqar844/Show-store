import React from "react";
import './../../src/App.css';
import {Link} from "react-router-dom"
function NavMenu() {
  return (
<div className="NavMenu">
  <Link to ="/">Home</Link><br/>
  <Link to ="/about">About</Link><br/>
  <Link to ="/product">Product</Link>


</div>
  );
}

export default NavMenu;
