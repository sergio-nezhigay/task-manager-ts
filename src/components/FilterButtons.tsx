import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup, Button, Badge } from "react-bootstrap";

import { statusFilters } from "store/constants";
import {
  selectCompletedTasksQty,
  selectUncompletedTasksQty,
  selectStatusFilter,
} from "store/selectors";
import { setStatusFilter } from "store/filtersSlice";

export const FilterButtons: React.FC = () => {
  const dispatch = useDispatch();
  const completedTasksQty = useSelector(selectCompletedTasksQty);
  const unCompletedTasksQty = useSelector(selectUncompletedTasksQty);
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (selectedFilter: string) =>
    dispatch(setStatusFilter(selectedFilter));

  return (
    <ButtonGroup className="ms-auto">
      <Button
        variant={filter === statusFilters.all ? "primary" : "light"}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        variant={filter === statusFilters.active ? "primary" : "light"}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active{" "}
        <Badge pill bg="secondary">
          {unCompletedTasksQty}
        </Badge>
      </Button>
      <Button
        variant={filter === statusFilters.completed ? "primary" : "light"}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed{" "}
        <Badge pill bg="secondary">
          {completedTasksQty}
        </Badge>
      </Button>
    </ButtonGroup>
  );
};
