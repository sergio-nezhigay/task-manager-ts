import React, { useState } from "react";
import { Row, Col, Button, Stack } from "react-bootstrap";

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
  console.log("first");
  return (
    <>
      <header>
        <TaskNavbar openModal={openModal} />
      </header>
      <main className="mt-5">
        <div className="text-center container">
          <Stack direction="horizontal" gap={3}>
            <Button
              variant="primary"
              className="my-2 my-lg-0"
              onClick={() => openModal(null)}
            >
              Add Task
            </Button>

            <FilterButtons />
          </Stack>

          <TaskList />

          {isModalOpen && (
            <TaskModal
              show={isModalOpen}
              onHide={closeModal}
              task={selectedTask}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
