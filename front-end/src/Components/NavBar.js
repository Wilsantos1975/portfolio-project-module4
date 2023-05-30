import React from "react";
// import navLogo from "../assets/Your paragraph text.png";
import { ShoppingCart } from "phosphor-react";
import "../styles/styles.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

//how to bring css file into this component?  import bulma from "bulma/css/bulma.css";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <div className="navbar-right">
          {/* <Link to={`/`}>
            <img scr="front-end/src/assets/Your paragraph text.png" alt="logo" width="30" heigth="30" />
          </Link> */}

          <Link to={`/`} style={{ textDecoration: "none" }}>
            <h1 className="intro">Vynil Libre</h1>
          </Link>
        </div>
      </Container>

      <Container>
        <div className="navbar-left">
          <div className="navbar-item">
            <Link to={`/albums`} style={{ textDecoration: "none" }}>
              {" "}
              Buy
            </Link>
          </div>
          <div className="navbar-item">
            <Link to={`/albums/new`} style={{ textDecoration: "none" }}>
              Sell
            </Link>
          </div>
          <div className="navbar-item">
            <Link to={`/about`} style={{ textDecoration: "none" }}>
              About
            </Link>
          </div>
          <div className="navbar-item">
            <Link to={`/cart`}>
              <ShoppingCart size={32} color="white" />
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
