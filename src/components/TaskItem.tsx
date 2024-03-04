import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

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

  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-100">
        <div
          role="button"
          onClick={handleToggleStatusClick}
          className="d-flex align-items-center "
        >
          <Form.Check
            type="checkbox"
            checked={task.completed}
            className="m-2"
          />
          <span>{task.recordText}</span>
        </div>
        <div className="text-end">
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
      </div>
      <hr className="w-100" />
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
