import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';


export default function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" dir="rtl">
      <div className="container-fluid">
        <LinkContainer to="/">
        
        <Nav.Link className="navbar-brand">رستوران انلاین گلشن</Nav.Link>
        </LinkContainer>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <LinkContainer to="/">
              <Nav.Link className="navbar-link active">خانه</Nav.Link>
              </LinkContainer>
            </li>


            <li className="nav-item">
              <LinkContainer to="/cart">
              <Nav.Link className="nav-link active">سبد خرید</Nav.Link>
              </LinkContainer>
            </li>


            <li>
              <LinkContainer to="/login">
              <Nav.Link className="nav-link" href="#">ورود</Nav.Link>
              </LinkContainer>
            </li>
            <li className="nav-item dropdown">
              {/* <LinkContainer to="/signup"> */}
              
              <Nav.Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">حساب کاربری ندارید؟</Nav.Link>

              {/* </LinkContainer> */}


              <div className="dropdown-menu">

                <LinkContainer to="/signup">
                <Nav.Link className="dropdown-item" href="#">Sign up</Nav.Link>
                </LinkContainer>
                
                
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Logout</a>
              </div>
              
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">جست و جو</button>
          </form>
        </div>
      </div>
    </Navbar>
  );
}
