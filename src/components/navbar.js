import React from "React"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavbarLink = props => {
  return (
    <li>
      <Link
        activeClassName="navbar__link--active"
        className="navbar__link"
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
    <nav>
      <ul className="navbar__nav">
        <NavbarLink name="01 : Home" />
      </ul>
    </nav>
  )
}

export default Navbar
