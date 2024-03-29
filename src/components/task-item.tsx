import React, { useState } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';

import { deleteToDo, toggleToDoStatus } from 'store/tasks-slice';
import { ToDoModal } from 'components/to-do-modal';
import { TaskItemProps } from 'types';
import { useAppDispatch } from 'store/hooks';

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useAppDispatch();

	const handleEditClick = (): void => {
		setIsModalOpen(true);
	};

	const handleDeleteClick = (): void => {
		dispatch(deleteToDo(task.id));
	};

	const handleToggleStatusClick = (): void => {
		dispatch(toggleToDoStatus(task.id));
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
					className={`${task.completed && 'line-through'}`}
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
				<ToDoModal
					show={isModalOpen}
					onHide={(): void => setIsModalOpen(false)}
					task={task}
				/>
			)}
		</>
	);
};
