// import "./FatFooter.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faGlobe,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/img/logo.png";
import google from "@/assets/img/google.png";
import apple from "@/assets/img/apple.png";
import { FaEnvelope } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { AiFillMobile } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Form } from "react-bootstrap";
import Image from 'next/image'

const FatFooter = () => {
  return (
    <>
      <footer className="sticky-footer">
        <section className="section-padding footer-list">
          <Container>
            <Row>
              <Col lg={3} md={3}>
                <div className="footer-logo">
                  <a className="logo" href="index.html">
                    {/* 88/29 */}
                    <Image
                      src={logo.src}
                      alt={logo.src}
                      width={88}
                      height={29}
                    />
                    {/* <img alt="" src={logo.src} className="img-fluid" /> */}
                  </a>
                </div>
                <p>
                  86 Petersham town, New South wales Waedll Steet, Australia
                </p>
                <p className="mb-0">
                  <a href="#" className="text-dark">
                    {/* <FontAwesomeIcon
											icon={faMobile}
											fixedWidth
										/>{" "} */}
                    <AiFillMobile className="me-2" />
                    +61 525 240 310
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#" className="text-dark">
                    {/* <FontAwesomeIcon
											icon={faEnvelope}
											fixedWidth
										/>{" "} */}
                    <FaEnvelope className="me-2" />
                    iamosahan@gmail.com
                  </a>
                </p>
                <p className="mb-0">
                  <a href="#" className="text-dark">
                    {/* <FontAwesomeIcon
											icon={faGlobe}
											fixedWidth
										/>{" "} */}
                    <BsGlobe2 className="me-2" />
                    www.askbootstrap.com
                  </a>
                </p>
              </Col>

              <Col lg={2} md={2}>
                <h6 className="mb-4">Company</h6>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </Col>

              <Col lg={2} md={2}>
                <h6 className="mb-4">Features</h6>
                <ul>
                  <li>
                    <a href="#">Retention</a>
                  </li>
                  <li>
                    <a href="#">People</a>
                  </li>
                  <li>
                    <a href="#">Messages</a>
                  </li>
                  <li>
                    <a href="#">Infrastructure</a>
                  </li>
                  <li>
                    <a href="#">Platform</a>
                  </li>
                  <li>
                    <a href="#">Funnels</a>
                  </li>
                  <li>
                    <a href="#">Live</a>
                  </li>
                </ul>
              </Col>
              <Col lg={2} md={2}>
                <h6 className="mb-4">Solutions</h6>
                <ul>
                  <li>
                    <a href="#">Enterprise</a>
                  </li>
                  <li>
                    <a href="#">Financial Services</a>
                  </li>
                  <li>
                    <a href="#">Consumer Tech</a>
                  </li>
                  <li>
                    <a href="#">Entertainment</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <a href="#">Analytics</a>
                  </li>
                </ul>
              </Col>

              <Col lg={3} md={3}>
                <h6 className="mb-4">NEWSLETTER</h6>

                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Email Address..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button className="py-0" id="button-addon2">
                    {/* <FontAwesomeIcon icon={faArrowRight} /> */}
                    <HiArrowNarrowRight />
                  </Button>
                </InputGroup>
                <small>
                  It is a long established fact that a reader will be distracted
                  by..
                </small>
                <h6 className="mb-2 mt-4">DOWNLOAD APP</h6>
                <div className="app d-flex gap-2">
                  <a href="#" className="mr-1">
                  <Image
                      src={google.src}
                      alt={google.src}
                      width={65}
                      height={22}
                    />
                    {/* <img alt="" src={google.src} /> */}
                  </a>
                  <a href="#">
                  <Image
                      src={google.src}
                      alt={google.src}
                      width={65}
                      height={22}
                    />
                    {/* <img alt="" src={apple.src} /> */}
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </footer>
    </>
  );
};

export default FatFooter;
