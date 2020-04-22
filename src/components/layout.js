import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../css/bootstrap.min.css"
import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
