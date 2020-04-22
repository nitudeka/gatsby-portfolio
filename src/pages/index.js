import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import "./homepage.scss"

const ProjectCard = ({ imgData }) => {
  return (
    <div className="home-project__card">
      <div className="home-project__card-container position-relative d-flex flex-column justify-content-end">
        <Img
          fluid={imgData}
          className="home-project__card-img position-absolute"
          alt="project"
        />
        <div className="home-project__card-info d-flex">
          <div className="side pr-5">
            <span className="number ml-5">001/006</span>
            <p className="name m-0 ml-5">Natours</p>
          </div>
          <div className="info m-2 bg-light p-2 w-100 d-flex justify-content-center flex-column">
            <span className="stack">HTML, SASS</span>
            <p className="content">Landing page for a travel company</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { dir: { regex: "/project/featured/" } }
        sort: { fields: [name] }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="home-projects py-5">
      <div className="container">
        <h2 className="home-projects__heading display-4 d-inline-block p-4">
          Featured Projects:
        </h2>
        <div className="home-projects__container">
          {data.allFile.edges.map(({ node }, i) => {
            return <ProjectCard key={i} imgData={node.childImageSharp.fluid} />
          })}
        </div>
        <button className="home-projects__btn px-3 py-2 mt-5">
          View All &#8594;
        </button>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div className="container">
      <div className="home-about p-5 p-md-0 center flex-column">
        <h2 className="text-center heading display-1">About Me?</h2>
        <p className="text-center">
          Well, for that you can just click <b>here</b>
        </p>
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
    <About />
  </Layout>
)

export default IndexPage
