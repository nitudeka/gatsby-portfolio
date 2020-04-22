import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./works.scss"
import Project from "../components/project"
import HammerSvg from "../images/svg/hammer.svg"

const WorksProject = () => {
  return (
    <Layout>
      <SEO title="Works" />
      <div className="works container">
        <div className="works__header py-4 center flex-column">
          <img src={HammerSvg} alt="hammer" />
          <h2 className="text-light mt-3">My wonderful projects</h2>
        </div>
        <div className="works__container my-5">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </Layout>
  )
}

export default WorksProject
