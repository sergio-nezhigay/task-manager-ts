import React from 'react';
import { Container } from 'react-bootstrap';

import { ToDoNavbar } from 'components/to-do-navbar';
import { ToDo } from 'components/to-do';

export const App: React.FC = () => {
	return (
		<>
			<header>
				<ToDoNavbar />
			</header>
			<main className="mt-5">
				<Container className="text-center">
					<ToDo />
				</Container>
			</main>
		</>
	);
};
