export interface ITask {
  id: string;
  recordText: string;
  completed: boolean;
}

export interface TaskFormProps {
  onHide: () => void;
  task: ITask | null;
}

export interface TaskModalProps extends TaskFormProps {
  show: boolean;
}
