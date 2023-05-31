import React from 'react'
import './component.css'

export default function Apply() {
  return (
    <div>
        <section id="Apply">
            <h2 className="head">Job Application</h2>
                <form> 
                     <label htmlFor="name">Name:</label>
                     <input type="text" id="name" required /> <br/>
  
                     <label htmlFor="email">Email:</label>
                     <input type="email" id="email" required /> <br/>
  
                     <label htmlFor="phone">Phone No:</label>
                     <input  type="tel" id="phone" name="phone"
                     required /> <br/>
  
                     <label htmlFor="file">Resume:</label>
                     <input type="file" id="file" required /><br/><br/>
  
                     <label htmlFor="Occupation">Occupation:</label>
                       <select name="occupation" id="occupation" required>
                         <option value="Student">Student</option>
                         <option value="professor"selected>professor</option>
                         <option value="Teacher">Teacher</option>
                       </select> <br/>
                       <br/> <br/>
  
                       <label htmlFor="counter">Experience (in years):</label>
                       <input type="number" name="counter" id="counter" min="0" max="10" />
                       <br/> <br/>
                       <fieldset>
                        <legend>
                          Skills
                        </legend> 
                        
                         <label htmlFor="html">Html</label>
                         <input type="checkbox" id="html"/>
                         <label htmlFor="css">Css</label>
                         <input type="checkbox" id="css"/>
                         <label htmlFor="js">Javascript</label>
                         <input type="checkbox" id="js"/>
                       </fieldset>
                       <br/>
                      <label htmlFor="educationType">Highest Education:</label>
                        <select name="educationType" id="educationType">
                          <option value="option1">High School</option>
                          <option value="option2" selected>Graduation</option>
                          <option value="option3">Master</option>
                        </select>
                          <br/><br/>
                    <fieldset>  
                        <legend htmlFor="fulltime">Availability</legend>
                        <input type="radio" id="fulltime" name="availability"/>
                        <label htmlFor="fulltime"  >Full Time</label>
  
                        <input type="radio" id="parttime" name="availability"/>
                        <label htmlFor="parttime" >Part Time</label>
                    </fieldset>
                       <br/><br/>
                       <label htmlFor="">Comments:</label>
                       <textarea name="comment" id="comment" cols="30" rows="10" >
                       </textarea> <br/>
                       <input type="submit" value="submit Application"/>
  
                </form>
          </section>
    </div>
  )
}
