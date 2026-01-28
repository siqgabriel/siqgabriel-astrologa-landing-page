'use client';
import React, { useEffect } from 'react';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo" href="#" style={{width:'200px', padding:'10px 0'}}>
          <img src="/assets/imgs/astrologa-png-logo.webp" alt="logo" />
        </a>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
          style={{ height: "80px" }}
        >

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
