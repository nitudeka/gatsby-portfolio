import React from "react"
import Img from "gatsby-image"
import "./project.scss"

import DemoImg from "../images/project/featured/001.png"

const Project = ({ number, projectData, imgData }) => {
  return (
    <div className="project d-inline-block p-4">
      <div className="project__container">
        <Img
          fluid={imgData}
          alt={projectData.name}
          className="project__img w-100 shadow mb-3"
        />
        <p className="project__number">
          <b>{number}</b>
        </p>
        <p className="project__stack">
          <b>{projectData.stack}</b>
        </p>
        <p className="project__name">{projectData.name}</p>
        <p className="project__info">{projectData.info}</p>
      </div>
    </div>
  )
}

export default Project
