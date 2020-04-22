import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "headerbg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className="header position-relative center">
      <Img
        fluid={data.file.childImageSharp.fluid}
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
