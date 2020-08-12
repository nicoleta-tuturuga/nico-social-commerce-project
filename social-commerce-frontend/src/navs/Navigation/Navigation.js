import React from "react";

import './Navigation.css';

import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (

    <div className="navigation-container">

      <header className="header-global">

        <ul className="settings-menu d-flex row justify-content-between">
          <div className="list-services d-flex">
            <li className="settings-menu-bar">
              <button>Serviciu Clienti</button>
            </li>
            <li className="settings-menu-bar">
              <button>Newsletter</button>
            </li>
          </div>

          <div className="session-menu d-flex">
            <li>
              <Link to="/logIn">
                <button>Autentificare</button>
              </Link>
            </li>
            <li>
              <button>Favorite</button>
            </li>
            <li>
              <button>Cos de cumparaturi</button>
            </li>
          </div>
        </ul>

        <nav className="navbar navbar-expand-sm flex-column align-items-strech" style={{ backgroundColor: '#ffffff' }}>
          <button className="brand mx-sm-auto">INN FASHION</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse w-100" id="navbar-menu">
            <div>
              <ul className="navbar-nav">
                <NavLink exact={true} activeClassName='is-active' className="white-border" to="/">
                  <li className="nav-item">
                    <button>ACASA</button>
                  </li>
                </NavLink>
                <NavLink activeClassName='is-active' className="white-border" to="/allShopsPage">
                  <li className="nav-item">
                    <button>MAGAZINE</button>
                  </li>
                </NavLink>
                <li className="nav-item">
                  <button>FEMEI</button>
                </li>
                <li className="nav-item">
                  <button>BARBATI</button>
                </li>
                <li className="nav-item ml-auto">
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </li>
              </ul>

              <ul className="navbar-nav">
                <NavLink activeClassName='is-active' className="white-border" to="/newsfeed">
                  <li className="nav-item">
                    <button>NOUTATI</button>
                  </li>
                </NavLink>
                <li className="nav-item">
                  <button>IMBRCAMINTE</button>
                </li>
                <li className="nav-item dropdown">
                  <button className="dropdown-toggle" id="#navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ACCESORII VINTAGE & INCALTAMINTE
                  </button>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <button className="dropdown-item" >Action</button>
                    <button className="dropdown-item" >Another action</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" >Something else here</button>
                  </div>
                </li>
                <li className="nav-item">
                  <button>VESELA VINTAGE</button>
                </li>
                <li className="nav-item">
                  <button>OBIECTE DE MOBILIER</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div >
  );
};

export default Navigation;