import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=> {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ml-4">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item ml-4">
              <NavLink className="nav-link" to="/signup">Signup <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item ml-4">
              <NavLink className="nav-link" to="/login">Login <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item ml-4">
              <NavLink className="nav-link" to="/list">List <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item ml-4">
              <NavLink className="nav-link" to="/sharelist">ShareList <span className="sr-only">(current)</span></NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        </>
    )

}
export default Navbar