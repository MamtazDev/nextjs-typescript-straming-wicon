import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import InputGroup from "react-bootstrap/InputGroup";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import LogoutModal from "./LogoutModal";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAddCircle } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BsHeadphones } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
// import {
// 	faBars,
// 	faPlusCircle,
// 	faHeadphonesAlt,
// 	faStar,
// 	faEdit,
// 	faSignOutAlt,
// 	faUserCircle,
// 	faVideo,
// 	faCog,
// 	faSearch,
// 	faBell,
// 	faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  Navbar,
  Button,
  Form,
  InputGroup,
  FormControl,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import logo from "@/assets/img/logo.png";
import user from "@/assets/img/user.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faBell, faCog, faEdit, faEnvelope, faHeadphonesAlt, faPlusCircle, faSignOutAlt, faStar, faUserCircle, faVideo } from "@fortawesome/free-solid-svg-icons";

interface NavigationProps {
  props: {
    setShowMenu: (showMenu: boolean) => void;
    showMenu: boolean;
  };
}

const Navigation: React.FC<NavigationProps> = ({ props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
  };

  const handleMenuToggle = () => {
    props.setShowMenu(!props.showMenu);
  };

  return (
    <>
      <Navbar bg="white" sticky="top" className="osahan-nav">
        &nbsp;&nbsp;
        <Button
          variant="link"
          size="sm"
          className="order-1 order-sm-0 text-secondary"
          id="sidebarToggle"
          onClick={handleMenuToggle}
        >
          <GiHamburgerMenu />
          {/* <FontAwesomeIcon icon={faBars} /> */}
          <i className="fas fa-star"></i>
        </Button>
        &nbsp;&nbsp;
        <Navbar.Brand className="mr-1">
          <Link href="/">
            <img className="img-fluid" src={logo.src} alt="" />
          </Link>
        </Navbar.Brand>
        {/* Navbar Search*/}
        <Form
          // inline
          className="d-none d-md-inline ms-auto  my-2 my-md-0 osahan-navbar-search"
        >
          <InputGroup>
            <Form.Control
              placeholder="Search for..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="light" id="button-addon2">
              <AiOutlineSearch />
            </Button>
          </InputGroup>
        </Form>
        {/*Navbar*/}
        <ul className="navbar-nav ms-auto ms-md-0 osahan-right-navbar">
          <li className="nav-item mx-1">
            <Link href="/upload" className="nav-link">
              {/* <FontAwesomeIcon icon={faPlusCircle} fixedWidth />{" "} */}
              <MdAddCircle className="me-2 text-secondary fs-6" />
              <span className="d-none d-md-inline">Upload Video</span>
            </Link>
          </li>

          <NavDropdown
            title={
              <>
                <FaBell className="text-secondary m-1" />
                {/* <FontAwesomeIcon icon={faBell} fixedWidth /> */}
                <Badge bg="danger">9+</Badge>
              </>
            }
            className="mx-1 no-arrow"
          >
            <NavDropdown.Item href="#">
              {/* <FontAwesomeIcon icon={faEdit} fixedWidth /> */}
              <FiEdit className="me-2" />
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              {/* <FontAwesomeIcon
								icon={faHeadphonesAlt}
								fixedWidth
							/>{" "} */}
              <BsHeadphones className="me-2" />
              Another Action
            </NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item href="#">
              {/* <FontAwesomeIcon icon={faStar} fixedWidth />{" "} */}
              <AiFillStar className="me-2" />
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                <FaEnvelope className="text-secondary m-1 " />
                {/* <FontAwesomeIcon icon={faEnvelope} fixedWidth /> */}
                <Badge bg="success">7</Badge>
              </>
            }

            className="mx-1 no-arrow"
          >
            <NavDropdown.Item href="#">
              {/* <FontAwesomeIcon icon={faEdit} fixedWidth />  */}
              <FiEdit className="me-2" />
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              {/* <FontAwesomeIcon
								icon={faHeadphonesAlt}
								fixedWidth
							/>{" "} */}
              <BsHeadphones className="me-2" />
              Another Action
            </NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item href="#">
              {/* <FontAwesomeIcon icon={faStar} fixedWidth />{" "} */}
              <AiFillStar className="me-2" />
              Something else here
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={
              <>
                <img src={user.src} alt="Avatar" />
                <span className="d-none d-md-inline"> Osahan</span>
              </>
            }
            className="no-arrow osahan-right-navbar-user user-dropdown-link"
          >
            <Link
              href="/account"
              className="dropdown-item"
              // rolw="button"
            >
              {/* <FontAwesomeIcon icon={faUserCircle} fixedWidth />{" "} */}
              My Account
            </Link>
            <Link
              href="/subscriptions"
              className="dropdown-item"
              // rolw="button"
            >
              {/* <FontAwesomeIcon icon={faVideo} fixedWidth />{" "} */}
              Subscriptions
            </Link>
            <Link href="/settings" className="dropdown-item">
              {/* <FontAwesomeIcon icon={faCog} fixedWidth />  */}
              Settings
            </Link>
            <Dropdown.Divider />
            <Link href="#" onClick={handleShow} className="dropdown-item">
              {/* <FontAwesomeIcon icon={faSignOutAlt} fixedWidth />{" "} */}
              Log out
            </Link>
          </NavDropdown>
        </ul>
      </Navbar>

      <LogoutModal
        show={show}
        handleClose={handleClose}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default Navigation;
