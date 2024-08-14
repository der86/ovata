// src/components/Navbar.js
import React from 'react';
import ButtonComponent from "./ButtonComponent";
// import LogoComponent from "./LogoComponent";
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Ovata</Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/OurTeamComponent">Our Team</Link></li>
        <li className="navbar-item"><Link to="/service">Services</Link></li>
        <li className="navbar-item"><Link to="/vision">Projects</Link></li>
        <li className="navbar-item"><Link to="/forum">Learn</Link></li>
        <ButtonComponent />
      </ul>
      
    </nav>
  );
};

export default Navbar;




// import React from "react";
// import ButtonComponent from "./ButtonComponent";
// import LogoComponent from "./LogoComponent";
// // import { Link } from 'react-router-dom';

// // import ButtonComponent from "./ButtonComponent";

// function NavbarComponent() {
//     return (

 

//     <nav className="navbar">
//         <LogoComponent />
//         <h1>Ovata Inovations</h1>
//         <div className="links">
//             <a href="#Home">Home</a>
//             {/* <a href="/OurTeamComponent">Our Team</a> */}
//             <a href="#service">Services</a>
//             <a href="#vision">Projects</a>
//             <a href="/create">Blog</a>

//         </div>
//         <ButtonComponent />
//     </nav>

//     );
// }

// export default NavbarComponent;