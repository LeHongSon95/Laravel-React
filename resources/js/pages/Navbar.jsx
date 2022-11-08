import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  


  return (
    <div className="pb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Admin</Link>

          <div className="box">
            <div className="container-1">
              <span className="icon"><i className="fa fa-search"></i></span>
              <input type="search" id="search" placeholder="Search..." />
            </div>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/addProduct">Add Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catelogy">Catelogy</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}