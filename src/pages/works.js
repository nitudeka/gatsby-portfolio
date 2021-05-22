import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./works.scss"
import Project from "../components/project"
import HammerSvg from "../images/svg/hammer.svg"

const WorksProject = () => {
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
      stack: "REACT",
      name: "Chat360",
      imgName: "chat360.png",
      info:
        "It is a webapp that can create chatbots with a drag and drop canvas, consists of live-chat to chat with the users, authorization, role based authorization, a chatbot interface, to name a few.",
      link: "https://app.chat360.io/",
    },
    {
      stack: "REACT : GATSBY",
      name: "ReddWings",
      imgName: "reddwings.png",
      info:
        "A landing page for an air-hostess institute. Gatsby is used here for a better SEO",
      link: "https://app.chat360.io/",
    },
    {
      stack: "NODE : POSTGRESQL : REACT : HEROKU",
      name: "Smart Brain",
      imgName: "smart-brain.png",
      info:
        "This is a webapp that can detect faces in a given photo if a face is present there.",
      link: "https://nitudeka.github.io/smart_brain/",
    },
    {
      stack: "NODE : REACT : MONGO : AWS : FIREBASE : TWILIO",
      name: "TOVP API",
      imgName: "api.png",
      info:
        "It is the API for the TOVP app. It has a backend created with Node.js, a MongoDB database, an admin panel created with React.js to monitor user activity and handle some administrative lavel tasks such as sending push notifications, etc.",
      link: "https://play.google.com/store/apps/details?id=com.tovp",
    },
    {
      stack: "HTML : SASS",
      name: "Natours",
      imgName: "natours.png",
      info: "A landing page for a frictional travel company",
      link: "https://nitudeka.github.io/natour/",
    },
    {
      stack: "VUE : NODE : MONGO : AWS : SASS",
      name: "TecMeadows",
      imgName: "tecmeadows.png",
      info:
        "An IT company website having a frontend created with Vue.js and a backend created with Node.js and MongoDB, with an admin panel to write blogs and handle certain tasks",
      link: "https://tecmeadows.com/",
    },
    {
      stack: "REACT : SASS",
      name: "MechFab",
      imgName: "mechfab.png",
      info: "A construction company website.",
      link: "http://mechfab.org/",
    },
    {
      stack: "REACT : GATSBY.JS : SASS : BOOTSTRAP",
      name: "SRC Feeds",
      imgName: "src-feeds.png",
      info:
        "It is a Cattle, Poultry, Fish, Pig feed manufacturer company website created with Gatsby.js on top of React.js",
      link: "http://srcfeeds.com/",
    },
  ]

  const portfolios = [
    {
      stack: "REACT : SASS",
      imgName: "portfolio-1.png",
      link: "https://nitudeka.github.io/my_portfolio/",
    },
    {
      stack: "VUE : SASS",
      imgName: "portfolio-2.png",
      link: "https://nitudeka.netlify.app/",
    },
    {
      stack: "REACT : SASS",
      imgName: "portfolio-3.png",
      link: "https://nitudeka-v2.netlify.app/",
    },
  ]

  return (
    <Layout>
      <SEO title="Works" />
      <div className="works container">
        <div className="works__header py-4 center flex-column">
          <img src={HammerSvg} alt="hammer" />
          <h2 className="text-light mt-3">My wonderful projects</h2>
        </div>
        <div className="works__container my-5">
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
              <Project
                key={i}
                number={`00${i + 1}/00${projects.length}`}
                projectData={project}
                imgData={imageData}
              />
            )
          })}
        </div>
        <h2 className="home-projects__heading display-4 d-inline-block p-4">
          My other portfolio sites:
        </h2>
        <div className="works__container my-5">
          {portfolios.map((project, i) => {
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
              <Project
                key={i}
                number={`00${i + 1}/00${portfolios.length}`}
                projectData={project}
                imgData={imageData}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default WorksProject
