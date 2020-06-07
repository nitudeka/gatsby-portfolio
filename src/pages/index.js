import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import "./homepage.scss"
import RedirectSvg from "../images/svg/share.svg"

const ProjectCard = ({ imgData, projectData }) => {
  return (
    <div className="home-project position-relative">
      <Img
        fluid={imgData}
        className="home-project__img w-100 h-100 position-absolute"
        alt="project"
      />
      <div className="home-project__content p-4 w-100">
        <b className="home-project__number d-block">{projectData.number}</b>
        <b className="home-project__stack d-block">{projectData.stack}</b>
        <b className="home-project__name d-block">{projectData.name}</b>
        <p>{projectData.info}</p>
      </div>
      <div className="home-project__redirect position-absolute center shadow">
        <a href={projectData.link} rel="noopener noreferrer" target="_blank">
          <img src={RedirectSvg} alt="redirect" />
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { dir: { regex: "/project/" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1920) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const projects = [
    {
      number: "001/003",
      stack: "VUE : NODE : MONGO : AWS : SASS",
      name: "TecMeadows",
      imgName: "tecmeadows.png",
      info:
        "An IT company website having a frontend created with Vue.js and a backend created with Node.js and MongoDB, with an admin panel to write blogs and handle certain tasks",
      link: "https://tecmeadows.com/",
    },
    {
      number: "002/003",
      stack: "NODE : REACT : MONGO : AWS : FIREBASE : TWILIO",
      name: "TOVP API",
      imgName: "api.png",
      info:
        "It is the API for the TOVP app. It has a backend created with Node.js, a MongoDB database, an admin panel created with React.js to monitor user activity and handle some administrative lavel tasks such as sending push notifications, etc.",
      link: "https://play.google.com/store/apps/details?id=com.tovp",
    },
    {
      number: "003/003",
      stack: "REACT : GATSBY.JS : SASS : BOOTSTRAP",
      name: "SRC Feeds",
      imgName: "src-feeds.png",
      info:
        "It is a Cattle, Poultry, Fish, Pig feed manufacturer company website created with Gatsby.js on top of React.js",
      link: "http://srcfeeds.com/",
    },
  ]

  return (
    <div className="home-projects py-5">
      <div className="container">
        <h2 className="home-projects__heading display-4 d-inline-block p-4">
          Featured Projects:
        </h2>
        <div className="home-projects__container">
          {projects.map((project, i) => {
            const images = data.allFile.edges
            let imageData
            for (let i = 0; i < images.length; i++) {
              if (
                images[i].node.childImageSharp.fluid.originalName ===
                project.imgName
              ) {
                imageData = { ...images[i].node.childImageSharp.fluid }
              }
            }
            return (
              <ProjectCard key={i} projectData={project} imgData={imageData} />
            )
          })}
        </div>
        <Link to="/works">
          <button className="home-projects__btn px-3 py-2 mt-5">
            View All &#8594;
          </button>
        </Link>
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
          Well, for that you can just click
          <Link to="/about">
            <b> here</b>
          </Link>
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
