import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Stack } from "react-bootstrap";

import { deleteTask, toggleTaskStatus } from "store/tasksSlice";
import { TaskModal } from "components/TaskModal";
import { ITask } from "types";

interface TaskItemProps {
  task: ITask;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleStatusClick = () => {
    dispatch(toggleTaskStatus(task.id));
  };
  const checkboxId = `check_${task.id}`;

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Form.Check
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleStatusClick}
          label={task.recordText}
          id={checkboxId}
          className="cursor-pointer"
        />

        <div className="ms-auto">
          <Button
            variant="primary"
            onClick={handleEditClick}
            size="sm"
            className="me-2"
          >
            Edit
          </Button>
          <Button variant="danger" onClick={handleDeleteClick} size="sm">
            Delete
          </Button>
        </div>
      </Stack>
      <hr />
      {isModalOpen && (
        <TaskModal
          show={isModalOpen}
          onHide={() => setIsModalOpen(false)}
          task={task}
        />
      )}
    </>
  );
};
