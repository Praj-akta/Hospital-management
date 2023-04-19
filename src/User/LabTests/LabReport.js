import React, { useRef } from "react";
import Pdf from "react-to-pdf";
import { Table } from "react-bootstrap";
import logo from "../../images/logo.png";
import { useLocation } from "react-router-dom";
import "./index.scss";

function LabReport() {
  const ref = useRef();
  const { state } = useLocation();
  const { details, medicalReport, date } = state;

  return (
    <div>
      <Pdf targetRef={ref} filename="report.pdf">
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn btn-primary download-pdf">
            Download PDF
          </button>
        )}
      </Pdf>
      <div ref={ref} className="col-7 lab-report-pdf">
        <div className="col-12 logo-div">
          <div className="col-6">
            <img src={logo} alt="logo-design" />
          </div>
          <div className="col-6 address">
            200 Fletcher Crescent, Alliston, ON L9R 1W7
          </div>
        </div>
        <h2 className="text-center py-4">Laboratory Test Report</h2>
        <div className="content">
          <div className="name-and-date">
            <div className="col-6">
              <strong>Invoice Number: </strong>  5625242
            </div>
            <div className="col-6">
              <strong>Invoice Date:</strong>
              {date}
            </div>
          </div>
          <br />

          <div className="d-flex flex-wrap pb-3">
            <p className="col-6">
              <strong>Patient Name: </strong>
              {details?.firstname} {details?.lastname}
            </p>
            <p className="col-6">
              <strong>Date of Birth: </strong> {details?.dob}
            </p>
            <p className="col-6">
              <strong>Medications:</strong> none
            </p>
            <br />
            <br />
          </div>

          <div className="text-left">
            <strong>Comments: </strong> {medicalReport.prescription}
          </div>
          <br />
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Blood Pressure</th>
                  <th>Blood Sugar</th>
                  <th>Body temperature</th>
                  <th>Lab Test name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{medicalReport.bloodPressure}</td>
                  <td>{medicalReport.bloodSugar}</td>
                  <td>{medicalReport.bodyTemperature}</td>
                  <td>{medicalReport.labTestName}</td>
                </tr>
              </tbody>
            </Table>
            <h3 className="result-text"> Results </h3>
            <hr className="result-underline" />
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
