import React from 'react'

const FormSection = () => {
  return (
    <section className="container form-middle">
      <div className="form">
        <h1>Come in Contact with Us</h1>
        <form onSubmit="onSubmit(event)" className="contact" noValidate>
          <div className="name_email">
            <div>
              <label id="userName-label" htmlFor="userName">Name</label>
              <input type="text" name="userName" id="userName" placeholder="Your Name" onKeyUp="validate(event)" required data-required-min="2" />
              <div id="userName-error"></div>
              <div id="userName-success"></div>
            </div>
            <div>
              <label id="userEmail-label" htmlFor="userEmail">Email</label>
              <input type="email" name="userEmail" id="userEmail" placeholder="Your Email" onKeyUp="validate(event)" required data-required-min="5" />
              <div id="userEmail-success"></div>
              <div id="userEmail-error"></div>
            </div>
          </div>
          <div className="comment">
            <label id="userComment-label" htmlFor="userComment">Comment</label>
            <textarea type="text" name="userComment" id="userComment" placeholder="Comments" onKeyUp="validate(event)" required data-required-min="10"></textarea>
            <div id="userComment-success"></div>
            <div id="userComment-error"></div>
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