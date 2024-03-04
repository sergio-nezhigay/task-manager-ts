import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { TaskList } from "components/TaskList";
import { TaskModal } from "components/TaskModal";
import { TaskNavbar } from "components/TaskNavbar";

import { ITask } from "types";
import { FilterButtons } from "components/FilterButtons";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const openModal = (task: ITask | null) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <TaskNavbar openModal={openModal} />
      </header>
      <main className="mt-5">
        <Container className="text-center">
          <div className="d-flex align-items-center justify-content-between">
            <Button
              variant="primary"
              className="my-2 my-lg-0"
              onClick={() => openModal(null)}
            >
              Add Task
            </Button>
            <div className="mb-2 mb-lg-0">
              <FilterButtons />
            </div>
          </div>

          <Row>
            <Col className="mx-auto">
              <TaskList />
            </Col>
          </Row>
          {isModalOpen && (
            <TaskModal
              show={isModalOpen}
              onHide={closeModal}
              task={selectedTask}
            />
          )}
        </Container>
      </main>
    </>
  );
};

export default App;
