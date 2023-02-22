import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start
      text-muted"
      style={{ backgroundColor: "#f0f7fd" }}
    >
      <section
        className="d-flex justify-content-center 
       justify-content-lg-between p-4 border-bottom"
        style={{ backgroundColor: "#f0f7fd" }}
      >
        <div className="me-5">
          <span style={{ color: "#253858", fontSize: "1.5rem" }}>
            Follow Us:
          </span>
        </div>
        <div>
          <a href="/" className="me-2 text-reset">
            <FacebookIcon
              fontSize="large"
              className="m-0"
              style={{ fontSize: "3rem" }}
            />
          </a>
          <a href="/" className="me-2 text-reset">
            <YouTubeIcon
              fontSize="large"
              className="m-0"
              style={{ fontSize: "3rem" }}
            />
          </a>
          <a href="/" className="me-2 text-reset">
            <InstagramIcon
              fontSize="large"
              className="m-0"
              style={{ fontSize: "3rem" }}
            />
          </a>
          <a href="/" className="me-2 text-reset">
            <LinkedInIcon
              fontSize="large"
              className="m-0"
              style={{ fontSize: "3rem" }}
            />
          </a>
        </div>
      </section>

      <section style={{ backgroundColor: "#f0f7fd" }}>
        <MDBContainer className="text-center text-md-start">
          <MDBRow className="mt-3">
            <MDBCol md="0" lg="4" xl="4" className="mx-auto mb-4">
              <h6
                style={{ color: "#253858" }}
                className="text-uppercase fw-bold mb-4"
              >
                Earn-Web
              </h6>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                style={{ color: "#253858", fontSize: "2rem" }}
                className="text-uppercase fw-bold mb-4"
              >
                Useful links
              </h6>
              <p style={{ color: "#848484", fontSize: "1.5rem" }}>
                <HiOutlineCurrencyRupee className="me-2" />
                <a href="/earnings" className="text-reset">
                  Earnings
                </a>
              </p>
              <p style={{ color: "#848484", fontSize: "1.5rem" }}>
                <RiCustomerService2Line className="me-2" />
                <a href="/" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                style={{ color: "#253858", fontSize: "2rem" }}
                className="text-uppercase fw-bold mb-4"
              >
                Contact
              </h6>
              <p style={{ color: "#848484", fontSize: "1.5rem" }}>
                <CiLocationOn className="me-2" />
                New York, NY 10012, US
              </p>
              <p style={{ color: "#848484", fontSize: "1.5rem" }}>
                <MdEmail className="me-3" />
                info@example.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{
          backgroundColor: "rgb(201 213 224)",
          color: "#253858",
          fontSize: "1.5rem",
        }}
      >
        © 2023 Copyright:earn-web.com
      </div>
    </MDBFooter>
  );
}
