import React, { useState } from 'react'
import { submitData, validate  } from '../scripts/validation_submit'

const FormSection = () => {
  let currentPage = "Contact Us"
  window.top.document.title = `${currentPage} || Fixxo`

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target

    switch (id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
      default:
        // Expected a default case
        break
    }

    setErrors({ ...errors, [id]: validate(e) })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFailedSubmit(false)
    setSubmitted(false)


    setErrors(validate(e, { name, email, comments }))

    if (errors.name === null && errors.email === null && errors.comments === null) {

      let json = JSON.stringify({ name, email, comments })

      setName('')
      setEmail('')
      setComments('')
      setErrors({})

      if (await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)) {
        setSubmitted(true)
        setFailedSubmit(false)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)
      }


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
            </div>) : (<></>)
        }

        {
          failedSubmit ? (
            <div className="alert alert-danger text-center mb-5" role="alert">
              <h3>Something went wrong!</h3>
              <p>We couldn't submit your comment right now.</p>
            </div>) : (<></>)
        }

        <h1>Come in Contact with Us</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label id="name-label" htmlFor="name">Name</label>
            <input className={(errors.name ? 'errorFrame' : '')} id="name" type="text" name="name" placeholder="Your Name" value={name} onChange={handleChange} />
            <div className="userError">{errors.name}</div>
            <div className="userSuccess"></div>
          </div>
          <div>
            <label id="email-label" htmlFor="email">Email</label>
            <input className={(errors.email ? 'errorFrame' : '')} id="email" type="email" name="email" placeholder="Your Email" value={email} onChange={handleChange} />
            <div className="userError">{errors.email}</div>
            <div className="userSuccess"></div>
          </div>
          <div className="comment">
            <label id="comment-label" htmlFor="comment">Comment</label>
            <textarea className={(errors.comments ? 'errorFrame' : '')} id="comments" type="text" name="comment" placeholder="Comments" value={comments} onChange={handleChange}></textarea>
            <div className="userError">{errors.comments}</div>
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