import { useDispatch } from "react-redux";
import { Button, Col, Row, Form, Modal } from "react-bootstrap";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { addTask, editTask } from "../store/tasksSlice";

import { ITask } from "store/commonTypes";

interface TaskModalProps {
  show: boolean;
  onHide: () => void;
  task: ITask | null;
}

export const TaskModal: React.FC<TaskModalProps> = ({ show, onHide, task }) => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string(),
    completed: yup.bool(),
  });

  const handleSubmit = (
    values: {
      name: string;
      description: string;
      completed: boolean;
    },
    {
      resetForm,
    }: FormikHelpers<{
      name: string;
      description: string;
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
    name: task ? task.name : "",
    description: task ? task.description : "",
    completed: task ? task.completed : false,
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Edit Task" : "Add Task"}</Modal.Title>
      </Modal.Header>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Body>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    className="mb-3"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationFormik04">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
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
    </Modal>
  );
};
