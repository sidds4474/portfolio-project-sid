import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';


function BsNavLink(props){
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

function BsNavBrand () {
  return <Link href="/">
    <a className="navbar-brand port-navbar-brand">Portfolio App</a>
  </Link>
}


function LoginLink(){
  return <a className="clickable" href="/api/v1/login">Login</a>
}

function LogoutLink(){
  return <a className="clickable" href="/api/v1/logout">Logout</a>
}


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/projects" title="Projects"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blog" title="Blog"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/resume" title="Resume"/>
            </NavItem>
          </Nav>

          <Nav navbar>
          <NavItem className="port-navbar-item">
            <LoginLink />
            </NavItem>
            </Nav>
            <Nav navbar>
          <NavItem className="port-navbar-item">
            <LogoutLink />
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;