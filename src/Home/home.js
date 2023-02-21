import React from "react";
import "./home.css";
import ABOUTIMG1 from "../images/img01.jpg";
import ABOUTIMG2 from "../images/department2.jpg";

import DEPARTMENT1 from "../images/department1.jpg";
import DEPARTMENT2 from "../images/department2.jpg";
import DEPARTMENT3 from "../images/department3.jpg";
import DEPARTMENT4 from "../images/department4.jpg";
import DEPARTMENT5 from "../images/department5.jpg";
import DEPARTMENT6 from "../images/department6.jpg";

import DOC1 from "../images/doctor1.jpg";
import DOC2 from "../images/doctor2.jpg";
import DOC3 from "../images/doctor3.jpg";
import DOC4 from "../images/doctor4.jpg";
import DOC5 from "../images/doctor5.jpg";
import DOC6 from "../images/doctor6.jpg";

import ECG from "../images/ecg.png";
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider';
import slides from '../mock.json'

function Home() {
  return (
    // <div>
    //   <Header />
    //   <main>
    //     <div classNameName="container">
    //       <h1 classNameName="heading">Welcome to the Hospital Management System</h1>
    //       <div classNameName="card">
    //         <h2>Patients</h2>
    //         <p>View and manage patient information</p>
    //         <button>View Patients</button>
    //       </div>
    //       <div classNameName="card">
    //         <h2>Appointments</h2>
    //         <p>View and manage appointment schedules</p>
    //         <button>View Appointments</button>
    //       </div>
    //       <div classNameName="card">
    //         <h2>Doctors</h2>
    //         <p>View and manage doctor information</p>
    //         <button>View Doctors</button>
    //       </div>
    //     </div>
    //   </main>
    //   <Footer />
    // </div>

    // My work

    <div className="main home-container">
      <div className="body">
        <Header />
        {/* hero section */}

        <div className="">
          {/* <SliderPage /> */}
          <div className="sliderHolder">
            {/* <img src={SLIDER3} alt="" /> */}
            <Slider slides={slides}/>
            <div className="sub-holder">
              <h2>Health care</h2>
              <h5>for whole family </h5>
              <br></br>
              <div></div>
              {/* <p>
                In healthcare sector, service excellence is the facility of{" "}
              </p>
              <p>
                the hospital as healthcare service provider to consistently.
              </p> */}
              <div className="btn top-btn">
                <a href="/">Check Our Services</a>
              </div>
            </div>
          </div>
        </div>

        {/* secfunction */}
        <div className="ogbg">
          <div className="container">
            <div className="img-holderr">
              <img src={ECG} alt="ecg" />
            </div>
            <h2>Hospitality</h2>
            <p>
              Clinical excellence must be the priority for any health care
              service provider.
            </p>
            <a href="/">Apply for A Bed</a>
          </div>
          <div className="container">
            <div className="img-holderr">
              <img src={ECG} alt="" />
            </div>
            <h2>Emergency Care</h2>
            <p>
              Clinical excellence must be the priority for any health care
              service provider.
            </p>
            <a href="/">+10 238 4473 477</a>
          </div>
          <div className="container">
            <div className="img-holderr">
              <img src={ECG} alt="" />
            </div>
            <h2>Chamber Service</h2>
            <p>
              Clinical excellence must be the priority for any health care
              service provider.
            </p>
            <a href="/">Make An Appointment</a>
          </div>
        </div>

        {/* about us */}
        <div className="about-us">
          <div className="left-container">
            <img src={ABOUTIMG1} alt="" />
            <img src={ABOUTIMG2} alt="" />
            {/* <img src={ABOUTIMG1} alt="" /> */}
          </div>
          <div className="right-container">
            <p className="welcom-about-us">
              Welcome to Hospital Management System
            </p>
            <p>
              Hospital history and mission statement Profiles of key staff
              members, including doctors, nurses, and administrative leaders
              Overview of hospital accreditation and quality ratings Information
              on hospital policies and procedures, including patient privacy and
              safety
            </p>
            <a href="/">Learn More</a>
          </div>
        </div>

        {/* Department */}
        <div className="department">
          <div className="">
            <div className="top-namee">
              <h3>Our Departments</h3>
              {/* <p>
                Esteem spirit temper too say adieus who direct esteem. It
                esteems luckily or picture placing drawing.
              </p> */}
            </div>

            <div className="department-card">
              <div className="department-box-container">
                <div className="img-container-department">
                  <img src={DEPARTMENT1} alt="" />
                </div>
                <div className="">
                <div className="lefttt">
                  <h3>Eye Care</h3>
                  <p>Esteem spirit temper too say adieus who direct esteem.</p>
                  <a href="/">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="department-box-container">
                <div className="img-container-department">
                  <img src={DEPARTMENT2} alt="" />
                </div>
                <div className="lefttt">
                <h3>Skin Care</h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="/">Learn More</a>
                </div>
              </div>

              <div className="department-box-container">
                <div className="img-container-department">
                  <img src={DEPARTMENT5} alt="" />
                </div>
                <div className="lefttt">
                <h3>Pathology</h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="/">Learn More</a>
                </div>
              </div>

              <div className="department-box-container">
                <div className="img-container-department">
                  <img src={DEPARTMENT4} alt="" />
                </div>
                <div className="lefttt">
                <h3>Medicine</h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="/">Learn More</a>
                </div>
              </div>

              <div className="department-box-container">
                <div className="img-container-department">
                  <img src={DEPARTMENT3} alt="" />
                </div>
                <div className="lefttt">
                <h3>Dental</h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="/">Learn More</a>
                </div>
              </div>

              <div className="department-box-container">
                <div className="img-container-department">
                  <img src={DEPARTMENT6} alt="" />
                </div>
                <div className="lefttt">
                <h3>Diagnostic Test</h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="/">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* doctors */}
        <div className="">
          <div className="header-doc-container">
            <h3>Expert Doctors</h3>
          </div>
          <div className="doctor-card-container">
            <div className="doc-card">
              <img src={DOC1} alt="" />
              <div className="name-doc-holder">
                <p>Kiera Patel</p>
                <p>Neurology</p>
              </div>
            </div>
            <div className="doc-card">
              <img src={DOC2} alt="" />
              <div className="name-doc-holder">
                <p>Ezra Marshall</p>
                <p>Dermatology</p>
              </div>
            </div>
            <div className="doc-card">
              <img src={DOC3} alt="" />
              <div className="name-doc-holder">
                <p>Leilani Kim</p>
                <p>Cardiology</p>
              </div>
            </div>
            <div className="doc-card">
              <img src={DOC4} alt="" />
              <div className="name-doc-holder">
                <p>Victor Nguyen</p>
                <p>Pediatrics</p>
              </div>
            </div>
            <div className="doc-card">
              <img src={DOC5} alt="" />
              <div className="name-doc-holder">
                <p>Camilla Rivera</p>
                <p>Gastroenterology</p>
              </div>
            </div>
            <div className="doc-card">
              <img src={DOC6} alt="" />
              <div className="name-doc-holder">
                <p>Caleb Morgan</p>
                <p>Oncology</p>
              </div>
            </div>
          </div>
        </div>
        {/* emergency */}

        <div className="emrgy-main">
          <div className="left-emrgy">
            <div className="emrgy-holder">
              <div className="jg-holder">
                <p>For Any Emergency Contact</p>
                {/* <p>
                  For any emergency contact, it is important to have the
                  necessary phone numbers readily available in case of an urgent
                  situation.
                </p> */}
              </div>
              <div className="gg-btn">
                <a href="/">+10 238 4473 477</a>
              </div>
            </div>
          </div>
          <div className="right-emrgy">
            <div className="emrgy-holder">
              <div className="jg-holder">
                <p>Make an Online Appointment</p>
                {/* <p>
                  To make an online appointment, simply visit our hospital's
                  website and follow the easy steps to schedule a date and time
                  that works best for you.
                </p> */}
              </div>
              <div className="gg-btn">
                <a href="/">Make an Online Appointment</a>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="footer-main">
          <div className="footer-mm">
            <div className="left-footer">
              <div className="">
                <h3>Departments</h3>
              </div>
              <div className="namee-con">
                <p>Eye Care</p>
                <p>Skin Care</p>
                <p>Pathology</p>
                <p>Medicine</p>
                <p>Dental</p>
              </div>
            </div>
            <div className="left-footer">
              <div className="">
                <h3>Useful Links</h3>
              </div>
              <div className="namee-con">
                <p>About</p>
                <p>Blog</p>
                <p>About</p>
                <p>Contact</p>
                <p>Appointment</p>
              </div>
            </div>
            <div className="left-footer">
              <div className="">
                <h3>Address</h3>
              </div>
              <div className="namee-con">
                <p>
                  1200, A-block, Back lane UK +10 238 4473 477 hms@contact.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-last">
          <p>Copyright ©2023 All rights reserved</p>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
