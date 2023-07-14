import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FiSearch, FiCast } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import './Navbar.scss';

const NavBar = () => {
  return (
    <Navbar bg="dark" className="Navbar-c" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#home">
          <FiSearch />
        </Nav.Link>
      </Nav>
      <Navbar.Brand className="Navbar-title">Mobile TV</Navbar.Brand>
      <Nav>
        <Nav.Link href="#cast">
          <FiCast />
        </Nav.Link>
        <Nav.Link href="#profile" className="mr-5px">
          <CgProfile />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;