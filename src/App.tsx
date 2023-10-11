import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { TaskList } from "components/TaskList";
import { TaskModal } from "components/TaskModal";
import { TaskNavbar } from "components/TaskNavbar";

import { ITask } from "store/commonTypes";

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
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
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
