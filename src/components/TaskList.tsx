import React from "react";
import { useSelector } from "react-redux";

import { TaskItem } from "components/TaskItem";
import { selectVisibleTasks } from "store/selectors";
import { ITask } from "interfaces/ITask";

export const TaskList: React.FC = () => {
  const tasks: ITask[] = useSelector(selectVisibleTasks);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskItem task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
