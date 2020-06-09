import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss"

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const Form = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const submit = () => {
    const isEmailValid = validateEmail(email)
    if (!isEmailValid || !subject || !message) return
    console.log(email, subject, message)
  }

  return (
    <div className="contact__form">
      <div>
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-100 bg-danger"
        />
        <input
          onChange={e => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
          className="w-100 bg-danger"
        />
        <textarea
          onChange={e => setMessage(e.target.value)}
          rows="4"
          placeholder="Message"
          className="w-100 bg-danger"
        ></textarea>
      </div>
      <button onClick={submit} className="contact__btn px-3 mt-4">
        Send
      </button>
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
          <div className="col-md-7">
            <Form />
          </div>
          <div className="col-md-5 mt-md-0 mt-5">
            <ul className="contact__list">
              <li className="mb-4">
                <b>Phone:</b> +91 6001206578
              </li>
              <li className="mb-4">
                <b>Email:</b> iamnitudeka@gmail.com
              </li>
              <li className="mb-4">
                <b>Github:</b>{" "}
                <a
                  href="https://github.com/nitudeka"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  nitudeka
                </a>
              </li>
              <li>
                <b>LinkedIn:</b>{" "}
                <a
                  href="https://www.linkedin.com/in/nitu-deka-12bb42160/"
                  rel="noopener noreferrer"
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
