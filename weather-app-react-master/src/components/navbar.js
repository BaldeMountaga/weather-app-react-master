import React, { useState } from 'react';
import './LoginPage'
import './RegistrationPage'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" >
        <NavbarBrand href="/">Forcast</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem> onC
              <NavLink to = "/LoginPage">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/RegistrationPage" >Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
//The navbar ask how to add effect on hover the links