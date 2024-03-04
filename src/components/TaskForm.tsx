import { useDispatch } from "react-redux";
import { Button, Col, Row, Form, Modal } from "react-bootstrap";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

import { TASK_MAX_LENGTH } from "store/constants";
import { addTask, editTask } from "store/tasksSlice";
import { TaskFormProps } from "types";

const TaskForm = ({ task, onHide }: TaskFormProps) => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    recordText: yup
      .string()
      .required("Please enter a task.")
      .max(
        TASK_MAX_LENGTH,
        `Task description must be at most ${TASK_MAX_LENGTH} characters.`
      ),
    completed: yup.bool(),
  });
  const handleSubmit = (
    values: {
      recordText: string;
      completed: boolean;
    },
    {
      resetForm,
    }: FormikHelpers<{
      recordText: string;
      completed: boolean;
    }>
  ) => {
    const taskData = {
      id: task ? task.id : uuidv4(),
      ...values,
    };

    if (task) {
      dispatch(editTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }
    resetForm();
    onHide();
  };

  const initialValues = {
    recordText: task ? task.recordText : "",
    completed: task ? task.completed : false,
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationFormik04">
                <Form.Label>Enter task details</Form.Label>
                <Form.Control
                  type="text"
                  name="recordText"
                  value={values.recordText}
                  onChange={handleChange}
                  isInvalid={!!errors.recordText}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.recordText}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                name="completed"
                label="Completed"
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save ✔️
            </Button>
            <Button variant="secondary" onClick={onHide} type="button">
              Close ❌
            </Button>
          </Modal.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
