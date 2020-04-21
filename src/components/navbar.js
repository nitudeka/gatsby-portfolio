import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./navbar.scss"

const NavbarLink = props => {
  return (
    <li className="navbar__li">
      <Link
        activeClassName="navbar__link--active"
        className="navbar__link mx-5"
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

const Navbar = () => {
  return (
    <nav className="navbar py-4 center w-100">
      <ul className="navbar__nav m-0 container d-flex justify-content-center">
        <NavbarLink to="/" name="01 : Home" />
        <NavbarLink to="/works" name="02 : Works" />
        <NavbarLink to="/about" name="03 : About me" />
        <NavbarLink to="/contact" name="04 : Contact" />
      </ul>
    </nav>
  )
}

export default Navbar
