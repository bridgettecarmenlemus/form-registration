import React, { useState } from "react";
import "./index.css"

export default function BasicForm() {
  const [values, setValues] = useState({
      firstName:"",
      lastName:"",
      email:"" 
     })

  const [submitted, setSubmitted] = useState(false)

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted ?  <div className="success-message">Success! Thank you for registering</div> : null}
        <input
        onChange={handleFirstNameInputChange}
        value={values.firstName}
        id="first-name"
        class="form-field"
        type="text"
        placeholder="First Name"
        name="firstName"
        />
        {submitted && !values.firstName? <span>Please enter a first name</span> : null}
        <input
        onChange={handleLastNameInputChange}
        value={values.lastName}
        id="last-name"
        class="form-field"
        type="text"
        placeholder="Last Name"
        name="lastName"
        />
        {submitted && !values.lastName? <span>Please enter a last name</span> : null} 
        <input
        onChange={handleEmailInputChange}
        value={values.email}
         id="email"
         class="form-field"
         type="text"
         placeholder="Email"
         name="email"
         />
         {submitted && !values.email?<span>Please enter a first name</span> : null}
         <button 
         class="form-field" 
         type="submit">Register
         </button>
      </form>
    </div>
  )
}