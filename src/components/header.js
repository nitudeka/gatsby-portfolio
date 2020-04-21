import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "./header.scss"
import HeaderBg from "../images/headerbg.jpg"

const Header = ({ data }) => {
  return (
    <header className="header position-relative center">
      <img
        src={HeaderBg}
        alt="header"
        className="position-absolute h-100 w-100"
      />
      <div className="container">
        <h1 className="header__heading">
          <span className="header__heading--main display-1 d-block">
            Nitu Deka
          </span>
          <span className="header__heading--sub display-4 d-block">
            Full Stack Developer
          </span>
        </h1>
      </div>
      {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
    </header>
  )
}

export default Header
