import React, { useState } from "react";
import useUnit from "hooks/Unit";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Table,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";

function UnitPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { units, isLoading, error } = useUnit(currentPage);

  const handleChangePage = (e) => {
    setCurrentPage(parseInt(e.target.value));
  };

  return (
    <div>
      <Row>
        <Col md="12">
          <Card>
            <FormGroup className="mx-5">
              <Label for="page-dropdown">Page:</Label>
              <Input
                type="select"
                id="page-dropdown"
                value={currentPage}
                onChange={handleChangePage}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                {/* Add more options as needed */}
              </Input>
            </FormGroup>
            <CardHeader>
              <CardTitle tag="h4">Unit in Puri Bunda</CardTitle>
            </CardHeader>
            <CardBody>
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Updated</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {units.map((unit) => (
                      <tr key={unit.id}>
                        <td>{unit.id}</td>
                        <td>{unit.name}</td>
                        <td>{unit.updated_at}</td>
                        <td>{unit.created_at}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default UnitPage;
