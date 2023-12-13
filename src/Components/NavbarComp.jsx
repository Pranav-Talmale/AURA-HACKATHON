/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '@coreui/coreui/dist/css/coreui.css';
import {
  CCollapse,
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarToggler,
  CNavbarNav,
  CNavItem,
  CNavLink,
} from '@coreui/react';
import '../Css/home.css'
import financelogo from '../assets/newnav.png';
import { FaHome, FaFileAlt, FaMoneyBill } from 'react-icons/fa';
export const NavComponent = () => {

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          {/* Logo */}
          <CNavbarBrand href="#">
            <img
              src={financelogo}
              alt="Finance Logo"
              height="30"
              className="d-inline-block align-top"
            />
          </CNavbarBrand>

          {/* Navbar Toggler */}
          <CNavbarToggler />

          {/* Navbar Content */}
          <CCollapse className="navbar-collapse">
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#">
                <FaHome/>
                  Dashboard
                </CNavLink>
              </CNavItem>
              <CNavItem>
              
                <CNavLink href="#"><FaFileAlt/>Reports</CNavLink>
              </CNavItem>
              <CNavItem>
              
                <CNavLink href="#">
                <FaMoneyBill/>
                  Budget
                </CNavLink>
              </CNavItem>
            </CNavbarNav>

          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};
