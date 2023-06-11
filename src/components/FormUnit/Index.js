import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function FormUnit() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const toggle = () => setModal(!modal);

  const showAlert = (message, color) => {
    setAlertMessage(message);
    setAlertColor(color);
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = localStorage.getItem("auth");
      const response = await axios.post(
        "http://localhost:8000/api/units",
        { name: name },
        {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      );
      console.log("Unit created successfully:", response.data);
      showAlert("Unit created successfully", "success");
      toggle();
    } catch (error) {
      console.error("Error creating unit:", error);
      showAlert("Error creating unit", "danger");
    }
  };

  return (
    <>
      <div className="content">
        <Button color="danger" onClick={toggle}>
          Add Unit
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Form Unit</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleUnit">Name Unit</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <ModalFooter>
                <Button color="success" type="submit">
                  Done
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </div>
      <Alert color={alertColor} isOpen={alertVisible}>
        {alertMessage}
      </Alert>
    </>
  );
}

export default FormUnit;
