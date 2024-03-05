import React from 'react';
import { useSelector } from 'react-redux';

import { TaskItem } from './TaskItem';

import { selectVisibleToDos } from 'store/selectors';
import { IToDo } from 'types';

export const TaskList: React.FC = () => {
	const tasks: IToDo[] = useSelector(selectVisibleToDos);

	return (
		<>
			{tasks.length ? (
				<>
					<h1>ToDos list</h1>
					{tasks.map((task) => (
						<div key={task.id}>
							<TaskItem task={task} />
						</div>
					))}
				</>
			) : (
				<>
					<h1>No tasks found</h1>
					<p>You can add tasks using `Add task` button</p>
				</>
			)}
		</>
	);
};

export default TaskList;
