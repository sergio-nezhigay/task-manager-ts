import React from "react";
import { Navbar, Container } from "react-bootstrap";

import { ITask } from "types";
import img from "data/images/icons.svg";

interface TaskNavbarProps {
  openModal: (task: ITask | null) => void;
}

export const TaskNavbar: React.FC<TaskNavbarProps> = ({ openModal }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="d-flex align-items-center justify-content-center gap-3">
          <img src={img} alt="Logo" width="30" height="30" />
          <span>Task manager</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};