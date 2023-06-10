import React from "react";
import FormEmployee from "components/FormEmployee/Index";
import FormPosition from "components/FormPosition/Index";
import FormUnit from "components/FormUnit/Index";
import InformationEmployees from "components/InformationEmployees/Index";

import TopEmployeesTable from "components/TopEmployeeTable";
import PositionTable from "components/PositionTable/Index";
import UnitTable from "components/UnitTable/Index";
import EmployeesTable from "components/EmployeesTable";

import { Card, Row, Col } from "reactstrap";

function Dashboard() {
  return (
    <>
      <div className="content">
        <InformationEmployees></InformationEmployees>
        <Row>
          <Col md="12">
            <Card>
              <TopEmployeesTable></TopEmployeesTable>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormEmployee></FormEmployee>
            <Card>
              <EmployeesTable responsive></EmployeesTable>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormUnit></FormUnit>
            <Card>
              <UnitTable></UnitTable>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormPosition></FormPosition>
            <Card>
              <PositionTable></PositionTable>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
