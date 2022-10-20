import React from 'react'

const FormSection = () => {
  return (
    <section class="container form-middle">
      <div class="form">
        <h1>Come in Contact with Us</h1>
        <form onsubmit="onSubmit(event)" class="contact" novalidate>
          <div class="name_email">
            <div>
              <label id="userName-label" for="userName">Name</label>
              <input type="text" name="userName" id="userName" placeholder="Your Name" onkeyup="validate(event)" required data-required-min="2" />
              <div id="userName-error"></div>
              <div id="userName-success"></div>
            </div>
            <div>
              <label id="userEmail-label" for="userEmail">Email</label>
              <input type="email" name="userEmail" id="userEmail" placeholder="Your Email" onkeyup="validate(event)" required data-required-min="5" />
              <div id="userEmail-success"></div>
              <div id="userEmail-error"></div>
            </div>
          </div>
          <div class="comment">
            <label id="userComment-label" for="userComment">Comment</label>
            <textarea type="text" name="userComment" id="userComment" placeholder="Comments" onkeyup="validate(event)" required data-required-min="10"></textarea>
            <div id="userComment-success"></div>
            <div id="userComment-error"></div>
          </div>
          <div class="submitbutton">
            <button type="submit" class="button bg-red">Post Comments</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default FormSection