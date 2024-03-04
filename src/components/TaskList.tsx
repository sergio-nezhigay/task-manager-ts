import React from "react";
import { useSelector } from "react-redux";

import { TaskItem } from "components/TaskItem";
import { selectVisibleTasks } from "store/selectors";
import { ITask } from "types";

export const TaskList: React.FC = () => {
  const tasks: ITask[] = useSelector(selectVisibleTasks);

  return (
    <>
      {tasks.length ? (
        <>
          <h1>Tasks list</h1>
          {tasks.map((task) => (
            <div key={task.id}>
              <TaskItem task={task} />
            </div>
          ))}
        </>
      ) : (
        <>
          <h1>No tasks found</h1>
          <p>You can add tasks using "Add task" button</p>
        </>
      )}
    </>
  );
};

export default TaskList;
