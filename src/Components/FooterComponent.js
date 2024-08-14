import React from "react";
import ButtonComponent from "./ButtonComponent"


function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="foot1">
          <p>Ovata innovations</p>
          {/* <p>Copyright © 2024</p> */}
          <div>
            <p>Located at lower Kabete West Side Towers</p>
          </div>
          <div className="button3">
            <ButtonComponent />
          </div>
        </div>


        <div className="foot2">
          <nav>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Service</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Ovata Innovation. All rights reserved.
          </div>
        </div>


      </div>

    </footer>
  );
}

export default Footer;


