import React, { useState } from 'react';
import { Stack, Button } from 'react-bootstrap';

import { ToDoModal } from './to-do-modal';
import TaskList from './task-list';
import { FilterButtons } from './filter-buttons';

import { IToDo } from 'types';

export const ToDo: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedToDo, setSelectedToDo] = useState<IToDo | undefined>();

	const openModal = (task: IToDo | undefined): void => {
		setSelectedToDo(task);
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setSelectedToDo(undefined);
		setIsModalOpen(false);
	};

	return (
		<>
			<Stack direction="horizontal" gap={3} className="mb-5">
				<Button variant="primary" onClick={(): void => openModal(selectedToDo)}>
					Add ToDo
				</Button>

				<FilterButtons />
			</Stack>
			<TaskList />
			{isModalOpen && (
				<ToDoModal show={isModalOpen} onHide={closeModal} task={selectedToDo} />
			)}
		</>
	);
};
