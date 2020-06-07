import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <div className="container">
        <div className="about__container p-5 center flex-column">
          <p className="display-1 text-center question-mark">?</p>
          <p className="text-center">
            Trust me, I really don't know what happened to the image
          </p>
        </div>
      </div>
      <div className="container about__content">
        <h2 className="text-center my-4">Hi, I am...</h2>
        <p>
          well, you might already know my name (I am assuming it because it is
          right inside the header of my homepage with a bold and overwhelmingly
          large font size, even a blind person could see this. No offence).
        </p>
        <p>
          OK, sorry for that (Actually, I am terrible at writing. So filling out
          the "about" page with absolute sh!t).
        </p>
        <h2>Lets start!</h2>
        <p>I am a self taught full stack developer.</p>
        <p>
          Started my journey of coding in around the mid of 2017 and enjoying
          the ride so far.
        </p>
        <p>
          <b>Favourite language:</b> Python || Javascript (not sure, which one)
        </p>
        <p>
          <b>Favourite stack:</b> MERN (Node, React and Mongo fanboy)
        </p>
        <p>
          <b>Hobbies:</b> 404 Not Found (don't enjoy doing anything except
          coding)
        </p>
        <p>OK, that is it. Don't know anything else to write</p>
        <p>
          Want to say hi, just don't ping me on social media (not a social media
          person), insteed contact me by filling out the form
          <Link to="/contact">
            <b> here.</b>
          </Link>
        </p>
        <p>
          Oh, wait, wait, wait!!! In case you want to checkout my
          <a
            href="https://github.com/nitudeka"
            rel="noopener noreferrer"
            target="_blank"
          >
            <b> Github </b>
          </a>
          and
          <a
            href="https://www.linkedin.com/in/nitu-deka-12bb42160/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <b> LinkedIn </b>
          </a>
          profile.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
