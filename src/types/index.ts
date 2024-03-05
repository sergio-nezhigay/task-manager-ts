export interface FiltersState {
	status: string;
}

export interface IToDo {
	id: string;
	recordText: string;
	completed: boolean;
}

export interface ToDosState {
	tasks: IToDo[];
}

export interface TaskItemProps {
	task: IToDo;
}

export interface ToDoFormProps {
	onHide: () => void;
	task: IToDo | undefined;
}

export interface ToDoModalProps extends ToDoFormProps {
	show: boolean;
}

export type ToDoStatus = 'all' | 'active' | 'completed';
