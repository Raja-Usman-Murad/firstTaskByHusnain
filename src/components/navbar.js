import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=> {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="/">Navbar</NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ml-4">
              <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item ml-4">
              <NavLink class="nav-link" to="/signup">Signup <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item ml-4">
              <NavLink class="nav-link" to="/login">Login <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item ml-4">
              <NavLink class="nav-link" to="/list">List <span class="sr-only">(current)</span></NavLink>
            </li>
            <li class="nav-item ml-4">
              <NavLink class="nav-link" to="/sharelist">ShareList <span class="sr-only">(current)</span></NavLink>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        </>
    )

}
export default Navbar