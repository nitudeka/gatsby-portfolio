import React from "react"
import "./project.scss"

import DemoImg from "../images/project/featured/001.png"

const Project = props => {
  return (
    <div className="project d-inline-block p-4">
      <div className="project__container">
        <img src={DemoImg} className="project__img w-100 shadow mb-3" />
        <p className="project__number">
          <b>001/009</b>
        </p>
        <p className="project__stack">
          <b>HTML, SASS</b>
        </p>
        <p className="project__name">Natours</p>
        <p className="project__info">This is a demo project</p>
      </div>
    </div>
  )
}

export default Project
