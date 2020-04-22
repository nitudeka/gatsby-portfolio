import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss"

const Form = () => {
  return (
    <div className="contact__form">
      <div>
        <input type="email" placeholder="Email" className="w-100" />
        <input type="text" placeholder="Subject" className="w-100" />
        <textarea rows="4" placeholder="Message" className="w-100"></textarea>
      </div>
      <button className="contact__btn px-3 mt-4">Send</button>
    </div>
  )
}

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact container">
        <div className="contact__heading text-center py-3">C0NTACT ME</div>
        <div className="row mt-5">
          <div className="col-7">
            <Form />
          </div>
          <div className="col-5">
            <ul className="contact__list">
              <li className="mb-4">
                <b>Phone:</b> +91 6001206578
              </li>
              <li className="mb-4">
                <b>Email:</b> iamnitudeka@gmail.com
              </li>
              <li className="mb-4">
                <b>Github:</b>{" "}
                <a href="https://github.com/nitudeka" target="_blank">
                  nitudeka
                </a>
              </li>
              <li>
                <b>LinkedIn:</b>{" "}
                <a
                  href="https://www.linkedin.com/in/nitu-deka-12bb42160/"
                  target="_blank"
                >
                  nitu-deka-12bb42160
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
