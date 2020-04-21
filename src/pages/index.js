import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import "./homepage.scss"

import ProjectImg1 from "../images/natour.png"

const ProjectCard = () => {
  return (
    <div className="home-project__card">
      <div className="home-project__card-container position-relative d-flex flex-column justify-content-end">
        <img
          className="home-project__card-img position-absolute"
          src={ProjectImg1}
          alt="project"
        />
        <div className="home-project__card-info d-flex">
          <div className="side pr-5">
            <span className="number ml-5">001/006</span>
            <p className="name m-0 ml-5">Natours</p>
          </div>
          <div className="info m-2 bg-light p-2 w-100">
            <span className="stack">HTML, SASS</span>
            <p className="content">Landing page for a travel company</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="home-projects py-5">
      <div className="container">
        <h2 className="home-projects__heading display-4 d-inline-block p-4">
          Featured Projects:
        </h2>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
  </Layout>
)

export default IndexPage
