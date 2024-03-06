import React, { useState } from 'react';
import { Stack, Button } from 'react-bootstrap';

import { ToDoModal } from './to-do-modal';
import TaskList from './task-list';
import { FilterButtons } from './filter-buttons';

export const ToDo: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const openModal = (): void => {
		setIsModalOpen(true);
	};

	const closeModal = (): void => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Stack direction="horizontal" gap={3} className="mb-5">
				<Button variant="primary" onClick={openModal}>
					Add ToDo
				</Button>

				<FilterButtons />
			</Stack>
			<TaskList />
			{isModalOpen && <ToDoModal show={isModalOpen} onHide={closeModal} />}
		</>
	);
};
