import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" dir="rtl">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>رستوران آنلاین گلشن</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>خانه</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/cart">
              <Nav.Link>سبد خرید</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link>ورود</Nav.Link>
            </LinkContainer>

            <NavDropdown title="حساب کاربری" id="user-dropdown">
              <LinkContainer to="/signup">
                <NavDropdown.Item>ثبت نام</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <NavDropdown.Item>خروج</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <form className="d-flex me-3">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="جست و جو"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              جست و جو
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
