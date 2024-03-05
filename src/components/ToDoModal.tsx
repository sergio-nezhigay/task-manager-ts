import React from 'react';

import { Modal } from 'react-bootstrap';

import { ToDoModalProps } from 'types';
import { ToDoForm } from './ToDoForm';

export const ToDoModal: React.FC<ToDoModalProps> = ({ show, onHide, task }) => {
	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>{task ? 'Edit ToDo' : 'Add ToDo'}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ToDoForm task={task} onHide={onHide} />
			</Modal.Body>
		</Modal>
	);
};
