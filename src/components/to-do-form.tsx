import React from 'react';

import { Button, Col, Row, Form, Stack } from 'react-bootstrap';
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { addToDo, editToDo } from 'store/tasks-slice';
import { useAppDispatch } from 'store/hooks';
import { ToDoFormProps } from 'types';
import { TASK_MAX_LENGTH } from 'data/constants';

export const ToDoForm: React.FC<ToDoFormProps> = ({ task, onHide }) => {
	const dispatch = useAppDispatch();

	const schema = yup.object().shape({
		recordText: yup
			.string()
			.required('Please enter a task.')
			.max(
				TASK_MAX_LENGTH,
				`ToDo description must be at most ${TASK_MAX_LENGTH} characters.`
			),
		completed: yup.bool(),
	});

	const handleFormSubmit = (
		formValues: {
			recordText: string;
			completed: boolean;
		},
		{
			resetForm,
		}: FormikHelpers<{
			recordText: string;
			completed: boolean;
		}>
	): void => {
		const taskData = {
			id: task ? task.id : uuidv4(),
			...formValues,
		};

		if (task) {
			dispatch(editToDo(taskData));
		} else {
			dispatch(addToDo(taskData));
		}
		resetForm();
		onHide();
	};

	const initialValues = {
		recordText: task ? task.recordText : '',
		completed: task ? task.completed : false,
	};

	return (
		<Formik
			validationSchema={schema}
			onSubmit={handleFormSubmit}
			initialValues={initialValues}
		>
			{(formikProps): React.JSX.Element => (
				<Form noValidate onSubmit={formikProps.handleSubmit}>
					<Row className="mb-3">
						<Form.Group as={Col} md="8" controlId="validationFormik04">
							<Form.Label>Enter task details</Form.Label>
							<Form.Control
								type="text"
								name="recordText"
								value={formikProps.values.recordText}
								onChange={formikProps.handleChange}
								isInvalid={Boolean(formikProps.errors.recordText)}
							/>
							<Form.Control.Feedback type="invalid">
								{formikProps.errors.recordText}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Form.Group className="mb-3">
						<Form.Check
							name="completed"
							label="Completed"
							id="checkbox"
							onChange={formikProps.handleChange}
						/>
					</Form.Group>
					<Stack direction="horizontal" gap={3}>
						<Button variant="primary" type="submit" className="ms-auto">
							Save ✔️
						</Button>
						<Button variant="secondary" onClick={onHide} type="button">
							Close ❌
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};
