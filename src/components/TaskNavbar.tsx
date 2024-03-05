import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import img from "data/images/icons.svg";

export const TaskNavbar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={img} alt="Logo" width="30" height="30" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};
