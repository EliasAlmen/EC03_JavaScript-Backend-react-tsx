import React, { useState } from 'react'
import { validate } from '../scripts/validation'

const FormSection = () => {
  let currentPage = "Contact Us"
  window.top.document.title = `${currentPage} || Fixxo` 

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userComment, setUserComment] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const {id, value} = e.target

    switch(id) {
      case 'userName':
        setUserName(value)
        break
      case 'userEmail':
        setUserEmail(value)
        break
      case 'userComment':
        setUserComment(value)
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(e, {userName, userEmail, userComment}))
  
    if (errors.userName === null && errors.userEmail === null && errors.userComment === null) {
      setSubmitted(true)
      setUserName('')
      setUserEmail('')
      setUserComment('')
      setErrors({})
    } else {
      setSubmitted(false)
    }
  }

  return (
    
      <section className="form-container">
        <div className="container">

          {
            submitted ? (
            <div className="alert alert-success text-center mb-5" role="alert">
              <h3>Thank you for your comments</h3> 
              <p>We will contact you as soon as possible.</p>
              </div>  ) : (<></>)
          }


          <h1>Come in Contact with Us</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label id="userName-label" htmlFor="userName">Name</label>
              <input className={(errors.userName ? 'errorFrame': '')} id="userName" type="text" name="userName" placeholder="Your Name" value={userName} onChange={handleChange} />
              <div className="userError">{errors.userName}</div>
              <div className="userSuccess"></div>
            </div>
            <div>
              <label id="userEmail-label" htmlFor="userEmail">Email</label>
              <input className={(errors.userEmail ? 'errorFrame': '')} id="userEmail" type="email" name="userEmail" placeholder="Your Email" value={userEmail} onChange={handleChange} />
              <div className="userError">{errors.userEmail}</div>
              <div className="userSuccess"></div>
            </div>
            <div className="comment">
              <label id="userComment-label" htmlFor="userComment">Comment</label>
              <textarea className={(errors.userComment ? 'errorFrame': '')} id="userComment" type="text" name="userComment" placeholder="Comments" value={userComment} onChange={handleChange}></textarea>
              <div className="userError">{errors.userComment}</div>
              <div className="userSuccess"></div>
            </div>
            <div className="submitbutton">
              <button type="submit" className="button bg-red">Post Comments</button>
            </div>
          </form>
        </div>
      </section>
    
  )
}

export default FormSection