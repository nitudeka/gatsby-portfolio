import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import "../css/bootstrap.min.css"
import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
