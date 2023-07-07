import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./about.scss"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <div className="about">
      <div className="container">
        <div className="about__container p-5 center flex-column">
          <p className="display-1 text-center question-mark">?</p>
          <p className="text-center">
            Trust me, I really don't know what happened to the image
          </p>
          <p className="text-center">
            Maybe a <b>"BUG"</b> 😱
          </p>
        </div>
      </div>
      <div className="container about__content">
        <h2 className="text-center my-4">Hi, I am...</h2>
        <p>
          well, you might already know my name (I am assuming it because it is
          right inside the header of my homepage with bold and overwhelmingly
          large font size, even a blind person could see this).
        </p>
        <p>
          OK, sorry for that (Actually, I am terrible at writing. So filling out
          the <b>"About"</b> page with absolute sh!t).
        </p>
        <h2>Lets start!</h2>
        <p>I am a self taught full stack developer.</p>
        <p>
          Started my journey of coding around the mid of 2017 and enjoying the
          ride so far.
        </p>
        <p>
          <b>Favourite language:</b> Python || Javascript (not sure, which one)
        </p>
        <p>
          <b>Favourite stack:</b> MERN (Node, React and Mongo fanboy)
        </p>
        <p>
          <b>Hobbies:</b> 404 Not Found (no, seriously!! I really don't have any
          hobbies)
        </p>
        <p>
          OK, that is it. Don't ask me how I wrote that much <s>content</s>
          (sh!t) on my <b>"About"</b> page. But still, if you do, the obvious
          answer would be:- <b>I HAVE NOOOOOOOOO IDEA!!</b>
        </p>
        <p>
          Want to say hi, don't you even think about finding me on social media.
        </p>
        <p>
          Oh, wait, wait, wait!!! In case you want to check out my
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
          profiles.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
