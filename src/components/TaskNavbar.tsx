import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";

import { FilterButtons } from "components/FilterButtons";
import { ITask } from "interfaces/ITask";
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
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Button
              variant="primary"
              className="my-2 my-lg-0"
              onClick={() => openModal(null)}
            >
              Add Task
            </Button>
          </Nav>
          <Nav className="mb-2 mb-lg-0">
            <FilterButtons />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
