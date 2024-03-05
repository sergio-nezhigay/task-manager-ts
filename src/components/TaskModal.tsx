import React from "react";

import { Modal } from "react-bootstrap";

import { TaskModalProps } from "types";
import TaskForm from "./TaskForm";

export const TaskModal: React.FC<TaskModalProps> = ({ show, onHide, task }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Edit Task" : "Add Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TaskForm task={task} onHide={onHide} />
      </Modal.Body>
    </Modal>
  );
};
