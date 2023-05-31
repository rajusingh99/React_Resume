import React from 'react'
import './component.css'

export default function ComplexForm() {
  return (
    <>
          <section id="ComplexForm">
            <h2 className="head">Complex Form</h2>
            <fieldset>
              <legend>Personal Information</legend>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name"/>

              <label htmlFor="email">Email:</label>
              <input type="text" id="email"/>
              
              <label htmlFor="email">Email:</label>
              <input type="text" id="email"/>
              
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone"/>

              <label htmlFor="Date">Date:</label>
              <input type="date" id="Date"/>

              <label htmlFor="gender">Gender:</label>
              <input type="radio" id="male" name="gender"/>
              <label htmlFor="male">Male</label>

              <input type="radio" id="female" name="gender"/>
              <label name="male" htmlFor="female">Female</label><br/>

              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                  <option value="option1">India</option>
                  <option value="option2">United States</option>
                  <option value="option3">Nepal</option>
                  <option value="option4" selected>japan</option>
              </select>
            </fieldset>

            <fieldset>
              <legend>Address</legend>
              <span htmlFor="street">Street</span>
              <input type="text" id="street"/>

              <span htmlFor="city">City</span>
              <input type="text" id="city"/>

              <span htmlFor="state">State</span>
              <input type="text" id="state"/>

              <span htmlFor="Zip">Zip Code</span>
              <input type="number" id="Zip"/>
              
            </fieldset>

            <fieldset>
             <legend>Other Information</legend>

             <span htmlFor="comments">Comments:</span>
             <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
              <br/><br/>
             <label htmlFor="consent">I agree to all information is correct</label>
             <input type="checkbox" id="consent"/>
           </fieldset>

           <input type="submit" value="submit" id="button"/>
     </section> 
    </>
  )
}
