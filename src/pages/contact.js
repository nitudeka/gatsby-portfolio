import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.scss"

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const Form = ({ setMailSent }) => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState([])

  const submit = () => {
    const errors = []
    const isEmailValid = validateEmail(email)
    if (!isEmailValid && email) errors.push("Invalid email address")
    if (!email) errors.push("Email is required")
    if (!subject) errors.push("Subject is required")
    if (!message) errors.push("Message is required")
    setErrors(errors)
    if (errors.length) return
    setMailSent(true)
  }

  return (
    <div className="contact__form">
      <div>
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-100"
        />
        <input
          onChange={e => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
          className="w-100"
        />
        <textarea
          onChange={e => setMessage(e.target.value)}
          rows="4"
          placeholder="Message"
          className="w-100"
        ></textarea>
      </div>
      <ul className="contact__errors">
        {errors.map((err, i) => {
          return (
            <li key={i} className="text-danger">
              {i + 1}. {err}
            </li>
          )
        })}
      </ul>
      <button onClick={submit} className="contact__btn px-3 mt-4">
        Send
      </button>
    </div>
  )
}

const ContactPage = () => {
  const [mailSent, setMailSent] = useState(false)

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contact container">
        <div className="contact__heading text-center py-3">C0NTACT ME</div>
        <div className="row mt-5">
          <div className="col-md-7">
            {!mailSent ? (
              <Form setMailSent={setMailSent} />
            ) : (
              <div className="h-100 d-flex justify-content-center align-items-center flex-column">
                <h2 style={{ fontWeight: "bold", fontSize: "6rem" }}>
                  Thanks!
                </h2>
                <p>I will revert back to you shortly</p>
              </div>
            )}
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
