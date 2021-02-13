import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <div className="container">
      <Navbar.Brand className="container d-flex flex-row justify-content-evenly align-content-center">
        <h4 className="flex-even logo-left">Markdown</h4>
        <div className="flex-even">
          <Logo className="logo-center" />
        </div>
        <h4 className="flex-even logo-right">Mathematics</h4>
      </Navbar.Brand>
    </div>
  </Navbar>
);

export default Header;
