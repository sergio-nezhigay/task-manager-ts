import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup, Button } from "react-bootstrap";

import { statusFilters } from "store/constants";
import { selectStatusFilter } from "store/selectors";
import { setStatusFilter } from "store/filtersSlice";

export const FilterButtons: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (selectedFilter: string) =>
    dispatch(setStatusFilter(selectedFilter));

  return (
    <ButtonGroup>
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
        Active
      </Button>
      <Button
        variant={filter === statusFilters.completed ? "primary" : "light"}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};
