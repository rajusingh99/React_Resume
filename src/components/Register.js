import React from 'react'
import './component.css'

export default function Register() {
  return (
    <div>
      <section id="register-section">
            <h2 className="head">Register</h2>
           
            <form>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input type="date" id="date-of-birth" name="date-of-birth" required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" min="5" max="100" required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>
              </div>
              
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>
              </div>
              
              <button type="submit">Register</button>
            </form>
          </section>
    </div>
  )
}
