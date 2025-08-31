import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function Header() {
  // ===== Added userInfo state to track logged-in user =====
  const [userInfo, setUserInfo] = useState(null);

  // ===== useEffect to get userInfo from localStorage when component mounts =====
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo'); // read from localStorage
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser)); // parse and store in state
    }
  }, []);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" dir="rtl">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>باباطاهر</Navbar.Brand>
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

            {/* ===== Conditional rendering for login / user dropdown ===== */}
            {!userInfo ? (
              // ===== Show login link if user not logged in =====
              <LinkContainer to="/login">
                <Nav.Link>ورود</Nav.Link>
              </LinkContainer>
            ) : (
              // ===== Show dropdown with username and logout if logged in =====
              <NavDropdown title={userInfo.username} id="user-dropdown">
                <LinkContainer to="/signup">
                  <NavDropdown.Item>ثبت نام</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    // ===== Logout functionality: remove userInfo from localStorage and reload page =====
                    localStorage.removeItem('userInfo');
                    window.location.reload(); // reload to update header
                  }}
                >
                  خروج
                </NavDropdown.Item>
              </NavDropdown>
            )}
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
