import React from 'react';
import { ButtonGroup, Button, Badge } from 'react-bootstrap';

import { statusFilters } from 'data/constants';
import {
	selectCompletedToDosQty,
	selectStatusFilter,
	selectUncompletedToDosQty,
} from 'store/selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setStatusFilter } from 'store/filters-slice';

export const FilterButtons: React.FC = () => {
	const dispatch = useAppDispatch();
	const completedToDosQty = useAppSelector(selectCompletedToDosQty);
	const unCompletedToDosQty = useAppSelector(selectUncompletedToDosQty);
	const filter = useAppSelector(selectStatusFilter);

	const handleFilterChange = (selectedFilter: string): void => {
		dispatch(setStatusFilter(selectedFilter));
	};

	return (
		<ButtonGroup className="ms-auto">
			<Button
				variant={filter === statusFilters.all ? 'primary' : 'light'}
				onClick={(): void => handleFilterChange(statusFilters.all)}
			>
				All
			</Button>
			<Button
				variant={filter === statusFilters.active ? 'primary' : 'light'}
				onClick={(): void => handleFilterChange(statusFilters.active)}
			>
				Active{' '}
				<Badge pill bg="secondary">
					{unCompletedToDosQty}
				</Badge>
			</Button>
			<Button
				variant={filter === statusFilters.completed ? 'primary' : 'light'}
				onClick={(): void => handleFilterChange(statusFilters.completed)}
			>
				Completed{' '}
				<Badge pill bg="secondary">
					{completedToDosQty}
				</Badge>
			</Button>
		</ButtonGroup>
	);
};
