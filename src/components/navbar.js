import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./navbar.scss"

const NavbarLink = props => {
  return (
    <li className="navbar__li">
      <Link
        activeClassName="navbar__link--active"
        className="d-inline-block mx-5 navbar__link w-100"
        to={props.to}
      >
        {props.name}
      </Link>
    </li>
  )
}

NavbarLink.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
}

NavbarLink.defaultProps = {
  to: "/",
}

const HamburgerIcon = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hamburger ml-auto center flex-column d-md-none mb-4"
    >
      <span className="hamburger__icon hamburger__icon--1 mb-2"></span>
      <span className="hamburger__icon hamburger__icon--2 mb-2"></span>
      <span className="hamburger__icon hamburger__icon--3"></span>
    </div>
  )
}

const HamburgerMenu = () => {
  return (
    <ul className="hamburger__nav d-md-none w-100">
      <NavbarLink to="/" name="01 : Home" />
      <NavbarLink to="/works" name="02 : Works" />
      <NavbarLink to="/about" name="03 : About me" />
      <NavbarLink to="/contact" name="04 : Contact" />
    </ul>
  )
}

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false)
  console.log(hamburgerActive)

  return (
    <nav
      className={[
        "navbar py-4 center d-block d-md-flex w-100",
        hamburgerActive ? "navbar--active" : "",
      ].join(" ")}
    >
      <div className="container flex-column">
        <ul className="navbar__nav d-none d-md-flex m-0 container justify-content-center">
          <NavbarLink to="/" name="01 : Home" />
          <NavbarLink to="/works" name="02 : Works" />
          <NavbarLink to="/about" name="03 : About me" />
          <NavbarLink to="/contact" name="04 : Contact" />
        </ul>
        <HamburgerIcon onClick={() => setHamburgerActive(!hamburgerActive)} />
        <HamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar
