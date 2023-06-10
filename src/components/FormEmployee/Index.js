import React, {useState} from "react";

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
} from "reactstrap";

function FormEmployee() {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
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
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleUnit">Unit</Label>
                <Input
                  id="exampleUnit"
                  name="unit"
                  placeholder="Unit"
                  type="unit"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePosition">Position</Label>
                <Input id="examplePosition" name="position" type="select">
                  <option>Software Engineer</option>
                  <option>Doctor</option>
                  <option>Nurse</option>
                  <option>Accountan</option>
                  <option>Manager</option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={toggleNested}>
              Done
            </Button>
            <Modal
              isOpen={nestedModal}
              toggle={toggleNested}
              onClosed={closeAll ? toggle : undefined}
            >
              <ModalHeader>Check again</ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggleNested}>
                  Done
                </Button>{" "}
                <Button color="secondary" onClick={toggleAll}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default FormEmployee;
