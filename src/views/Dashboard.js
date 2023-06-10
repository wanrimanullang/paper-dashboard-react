import React from "react";
import Table from "./Tables";
import Position from "components/Position/Index";
import Unit from "components/Unit/Index";
import FormEmployee from "components/FormEmployee/Index";
import FormPosition from "components/FormPosition/Index";
import FormUnit from "components/FormUnit/Index";
import InformationEmployees from "components/InformationEmployees/Index";

import { Card, Row, Col } from "reactstrap";

function Dashboard() {
  return (
    <>
      <div className="content">
        <InformationEmployees></InformationEmployees>
        <Row>
          <Col md="12">
            <FormEmployee></FormEmployee>
            <Card>
              <Table responsive></Table>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormUnit></FormUnit>
            <Card>
              <Unit></Unit>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormPosition></FormPosition>
            <Card>
              <Position></Position>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
