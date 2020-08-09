import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Navigation.css';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (

    <div>


      <header className="header-global">

        <nav className="navbar navbar-expand-sm navbar-light flex-column align-items-strech" style={{ backgroundColor: '#ffffff' }}>
          <div className="w-100 d-flex">
            <a className="navbar-brand mx-sm-auto mr-auto" href="#">INN FASHION</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu">
              <span className="navbar-toggler-icon"></span>
            </button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu2">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse w-100" id="navbarMenu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <button className="nav-link active">ACASA</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allShopsPage">
                  <button className="nav-link">MAGAZINE</button>
                </Link>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">FEMEI</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">BARBATI</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse w-100" id="navbarMenu2">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/newsfeed">
                  <button className="nav-link">NOUTATI
                    <span className="sr-only">(current)</span>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">IMBRCAMINTE</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="#navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ACCESORII VINTAGE & INCALTAMINTE
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">VESELA VINTAGE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">OBIECTE DE MOBILIER</a>
              </li>
            </ul>
          </div>
        </nav>



        {/*<div className="list_services">
      <ul className="settings_menu">
        <li className="settings_menu_bar">
          <a href="#">Serviciu Clienti</a>
        </li>
          <span> </span>
        <li className="settings_menu_bar">
          <a href="#">Newsletter</a>
        </li>
      </ul>
  </div>

<nav className="navbar navbar-expand-sm navbar-light flex-column align-items-stretch " style={{backgroundColor: '#ffffff'}}>    
  <div className="brand_logo_section d-flex">
      <a className="navbar-brand-logo mx-sm-auto mr-auto" href="#">
        <img src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        className="navBrandLogo"></img>
        INN FASHION
        </a>
    </div>

    <div className="topBar_options">
      <ul className="navbar-nav topBar_sections">
        <li className="topBar_sections_options topBar_sections_options-active">
          <a href="#">BOUTIQUES</a>
        </li>
        <li className="topBar_sections_options">
          <a href="#">WOMEN</a>
        </li>
        <li className="topBar_sections_options">
          <a href="#">MEN</a>
        </li>
        <li className="topBar_sections_options">
          <a href="#">FARFURII</a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto"> 
        <li className="topBar_sections_options">
        <form className="form-inline my-2 my-lg-0 w-100">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </li>
     
     </ul> 
  


   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">NOUTATI <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">IMBRCAMINTE</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ACCESORII VINTAGE & INCALTAMINTE
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">VESELA VINTAGE</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">OBIECTE DE MOBILIER</a>
      </li>
    </ul>


    </div>
  </div>
      </nav> */}
        {/* </div> */}
      </header>
    </div>










    //  <div>
    //   <div>
    //     <ul className="leftSided">
    //       <li className="lileftSided">Help</li>
    //       <li className="lileftSided">Language</li>
    //     </ul>
    //   </div>

    // <Navbar className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#ffffff'}}> 
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto">
    //       <Nav.Link href="about">About</Nav.Link>
    //       <NavDropdown title="More" id="basic-nav-dropdown">
    //         <NavDropdown.Item href="about">About</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Navbar.Brand href="/">
    //        <img src="https://images.unsplash.com/photo-1523115191856-c203e76215a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80"  
    //        className="navBrandImg" />
    //       INN FASHION
    //       </Navbar.Brand>
    //     <Form inline>
    //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //       <Button variant="outline-success">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>

    // </div> 
  );
};

export default Navigation;