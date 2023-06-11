import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  Form,
  Alert,
} from "reactstrap";

function FormEmployee() {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [unit, setUnit] = useState("");
  const [position, setPosition] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/users",
        {
          name,
          email,
          password,
          // unit,
          // job_position: position,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setSuccessMessage("User created successfully");
      setName("");
      setEmail("");
      setPassword("");
      // setUnit("");
      // setPosition("");
    } catch (error) {
      setErrorMessage("Error creating user");
      console.error("Error creating user:", error);
    }
  };

  const handleDismiss = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <>
      <div className="content">
        <Button color="danger" onClick={toggle}>
          Add Employee
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Form Employee</ModalHeader>
          <ModalBody>
            {successMessage && (
              <Alert color="success" toggle={handleDismiss}>
                {successMessage}
              </Alert>
            )}
            {errorMessage && (
              <Alert color="danger" toggle={handleDismiss}>
                {errorMessage}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  id="exampleName"
                  name="name"
                  placeholder="Name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleUnit">Unit</Label>
                <Input
                  id="exampleUnit"
                  name="unit"
                  placeholder="Unit"
                  type="unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePosition">Position</Label>
                <Input
                  id="examplePosition"
                  name="position"
                  type="select"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option>Software Engineer</option>
                  <option>Doctor</option>
                  <option>Nurse</option>
                  <option>Accountant</option>
                  <option>Manager</option>
                </Input>
              </FormGroup>
              <Button color="success" type="submit">
                Done
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default FormEmployee;
