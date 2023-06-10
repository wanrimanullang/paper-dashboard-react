import React from "react";
import listEmployees from "hooks/Employees/list";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const TopEmployees = ({ token }) => {
  const employees = listEmployees(token);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <FormGroup>
                <Row>
                  <Col className="mx-5">
                    <Label for="exampleDate">Start Date</Label>
                    <Input
                      id="exampleDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                    />
                  </Col>
                  <Col className="mx-5">
                    <Label for="exampleDate">End Date</Label>
                    <Input
                      id="exampleDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <CardHeader>
                <CardTitle tag="h4">Top Employee</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                      <th>Total Login</th>
                      <th>Job Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => (
                      <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.total_login}</td>
                        <td>
                          {employee.jobPosition.map((position) => (
                            <div key={position.id}>
                              <p>Position Name: {position.name}</p>
                            </div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default TopEmployees;
