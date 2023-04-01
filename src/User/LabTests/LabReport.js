import React, { useRef } from "react";
import Pdf from "react-to-pdf";
import { Table } from "react-bootstrap";
import logo from "../../images/logo.png";
import { useLocation } from "react-router-dom";
import "./index.scss";

function LabReport() {
  const ref = useRef();
  const { state } = useLocation();
  const details = state;

  return (
    <div className="col-12 lab-report-pdf">
      <Pdf targetRef={ref} filename="report.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn btn-primary">
            Download PDF
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="col-12 logo-div">
          <img src={logo} alt="logo-design" />
        </div>
        <h2 className="text-center py-4">Laboratory Test Report</h2>
        <div className="content">
          <div className="name-and-date">
            <p>
              <strong>Patient Name:</strong>
              {details?.firstname} {details?.lastname}
            </p>
          </div>
          <p className="my-4">
            <strong>Comments: Need to take test. </strong>
          </p>
          <div className="d-flex flex-wrap">
            <p className="col-6">
              <strong>Patient ID Number:</strong> 5625242
            </p>
            <p className="col-6">
              <strong>Date of Birth: </strong> {details?.dob}
            </p>
            <p className="col-6">
              <strong>Medications:</strong> none
            </p>
          </div>
          <div>
            <Table responsive stripedble="true">
              <thead>
                <tr>
                  <th>Lab Test</th>
                  <th>Results</th>
                  <th>Reference</th>
                  <th>Units</th>
                </tr>
                <tr>
                  <td>Na</td>
                  <td>H123</td>
                  <td>13.7 - 3.3</td>
                  <td>mg/dL</td>
                </tr>
                <tr>
                  <td>K</td>
                  <td>H5.9</td>
                  <td>3.6 - 5.2</td>
                  <td>mg/dL</td>
                </tr>
                <tr>
                  <td>CO2</td>
                  <td>28</td>
                  <td>88 - 32</td>
                  <td>mg/dL</td>
                </tr>
                <tr>
                  <td>Glucose</td>
                  <td>H110</td>
                  <td>78 - 104</td>
                  <td>mg/dL</td>
                </tr>
              </thead>
            </Table>
            <p>(Note: L=Abnormal Low, H=Abnormal High)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabReport;
