import React from "react";
import { Card, Row, Col } from "reactstrap";
import FormEmployee from "components/FormEmployee/Index";
import FormPosition from "components/FormPosition/Index";
import FormUnit from "components/FormUnit/Index";
import InformationEmployees from "components/InformationEmployees/Index";
import TopEmployeesTable from "components/TopEmployeeTable";
import PositionTable from "components/PositionTable/Index";
import UnitTable from "components/UnitTable/Index";
import EmployeesTable from "components/EmployeesTable";

function Dashboard() {
  const isLoggedIn = !!localStorage.getItem("auth");

  if (!isLoggedIn) {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <h4 className="text-center p-3">Please login to access the dashboard.</h4>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <>
      <div className="content">
        <InformationEmployees />
        <Row>
          <Col md="12">
            <Card>
              <TopEmployeesTable />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormEmployee />
            <Card>
              <EmployeesTable responsive />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormUnit />
            <Card>
              <UnitTable />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormPosition />
            <Card>
              <PositionTable />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
