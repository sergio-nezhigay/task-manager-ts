import React, { useState } from 'react';
import { Stack, Button } from 'react-bootstrap';

import { ToDoModal } from './ToDoModal';
import TaskList from './TaskList';
import { FilterButtons } from './FilterButtons';

import { IToDo } from 'types';

export const ToDo: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedToDo, setSelectedToDo] = useState<IToDo | null>(null);

	const openModal = (task: IToDo | null): void => {
		setSelectedToDo(task);
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setSelectedToDo(null);
		setIsModalOpen(false);
	};

	return (
		<>
			<Stack direction="horizontal" gap={3} className="mb-5">
				<Button variant="primary" onClick={(): void => openModal(null)}>
					Add ToDo
				</Button>

				<FilterButtons />
			</Stack>
			<TaskList />
			{isModalOpen && (
				<ToDoModal show={isModalOpen} onHide={closeModal} task={selectedToDo} />
			)}
			;
		</>
	);
};
