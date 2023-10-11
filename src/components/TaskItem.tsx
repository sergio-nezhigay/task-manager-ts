import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button, Card } from "react-bootstrap";

import { deleteTask, toggleTaskStatus } from "../store/tasksSlice";
import { TaskModal } from "./TaskModal";
import { ITask } from "store/commonTypes";

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
    <Card className="task-item mb-3">
      <Card.Body>
        <Card.Title>{task.name}</Card.Title>
        <Card.Text>{task.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-between align-items-center">
          <Form.Check
            type="checkbox"
            label={task.completed ? "Completed" : "Active"}
            checked={task.completed}
            onChange={handleToggleStatusClick}
          />
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
      </Card.Footer>
      {isModalOpen && (
        <TaskModal
          show={isModalOpen}
          onHide={() => setIsModalOpen(false)}
          task={task}
        />
      )}
    </Card>
  );
};
