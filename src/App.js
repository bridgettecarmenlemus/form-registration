import React from "react";
import "./index.css"

export default function basicForm() {
  return (
    <div className="form-container">
      <form className="register-form">
        <input
        id="first-name"
        class="form-field"
        type="text"
        placeholder="First Name"
        name="firstName"
        />
        <input
        id="last-name"
        class="form-field"
        type="text"
        placeholder="Last Name"
        name="lastName"/>
      </form>
    </div>
  )
}