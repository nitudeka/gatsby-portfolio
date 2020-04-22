import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../css/bootstrap.min.css"
import "../sass/main.scss"

const Layout = ({ children }) => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex flex-column justify-content-between"
    >
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
