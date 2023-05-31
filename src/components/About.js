import React from 'react'
import './component.css'
import image from './photo.jpg'
export default function About() {
  return (
    <div>
     <section id="about">
          <h2>Raju Singh</h2>
          <span>Contact: </span><a href="mailto:rajuofficialk@gmail.com">rajuofficialk@gmail.com</a><br/>
          <span>LinkedIn: </span><a href="https://www.linkedin.com/in/raju-singh-a65124207/">https://www.linkedin.com/in/raju-singh-a65124207/</a><br/>
          <span>GitHub: </span><a href="https://github.com/rajusingh99">https://github.com/rajusingh99</a>

          <table className="about">
             <tbody>
                <tr>
                  <td><img src={image} alt="Raju Singh" width="100" height="100" /></td>
                  <td></td>
                  <td className="colData"> I am a <b>software Developer engineer</b> in <a href="https://www.walkweltech.com/">Walkwel Technology</a>. I love to explore 
                      various technologies and frameworks to develop efficient and 
                      scalable solutions with foundation of data structure and algorithm.
                      I am costantly expanding my skills and staying up-to-date 
                      with the latest advancements in the field of software development. 

                      Overall, my goal as a software developer engineer is to create efficient, reliable, and user-centric software solutions. I am driven by the desire to make a positive impact through technology and contribute to the advancement of the field.
                  </td>
                </tr>
             </tbody>
          </table>

          <h2>Education</h2>
            <ul>
              <li><a href="https://www.pturesults.in/">I.K. Gujral Punjab Technical University Jalandhar Punjab </a></li>
              <li><a href="https://www.bseb.org.in/index.html">BSEB PATNA</a> Passed institute by <a href="https://www.exambazaar.com/c/omega-study-centre/hospital-road-muzaffarpur">Omega Study Centre</a> </li>
              <li>R.S.R High School Bariyarpur,Sitamarhi</li>
            </ul>

            <h2>Work Experience</h2>
            <p><b>Software Dedveloper Intern</b></p>
            <p> Jan 2023 - Current</p>
                <ul>
                  <li>Developed intern management website using Html,Css,Php,SQL.</li>
                  <li>Developed Weather App using Html,css, js,React.</li>
                  <li>Developed To Do App.</li>
                  <li>Learning React and IndexedDB.</li>
                  <li>Worked on TokoGame Live Project.</li>
                </ul>
                <div className="skill">
                  <h2>Skills</h2>
                  <ul>
                    <li>C++</li>
                    <li>SQL</li>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>IndexedDB</li>
                    <li>Php</li>
                  </ul>
                </div>
                <div className="achievement">
                  <h2>Achievements</h2>
                  <ul>
                    <li>Got 2nd rank in coding competition in 2nd years</li>
                    <li>Got 3rd rank in logical and mathematical competition.</li>
                    <li>Got 2,800+ follower on <a href="https://www.linkedin.com/in/raju-singh-a65124207/">LinkedIn</a> .</li>
                    <li>Solved 170+ questions in LeetCode. <a href="https://leetcode.com/RajusinghofficialIND/">LeetCode profile</a></li>
                  </ul>
                </div>
                <div className="projects">
                  <h2>Projects</h2>
                  <ul>
                    <li>
                      <div>
                        <h3>PG Life Project</h3>
                          <div className="project1">
                            <ul>
                              <li>Created PG life website having 4 major cities and used 100+ images as facility of PG.</li>
                              <li>Used may be by Signup and Login. Signup will take 6 and Login take 2 data as input.</li>
                              <li>Created 7 tables inside PG Life database. SQL is used for create 7 tables.</li>
                              <li>Communicated database to server by PHP. There are 6 files of PHP.</li>
                              <li>Show 2 things in dashboard 1st
                                is my profile and 2nd is Interested PG.</li>
                              <li>Created by 7 languages and having 2 ends 1st is front-end and 2nd is back-end.</li>
                            </ul>
                            <p>Git Hub Link: <a href="https://github.com/rajusingh99/PGLife">https://github.com/rajusingh99/PGLife</a></p>

                          </div>
                      </div>
                    </li>
                    <li>
                      <div className="project2">
                        <h3>Weather App</h3>
                        <ul>
                          <li>Built this project using “HTML 5”, “JavaScript”, & “React.js” and hosted live on netlify.</li>
                          <li>Developed this project using the Real-World API to fetch current weather data for more 10000 + cities.</li>
                          <li>Developed this project to display 5 data temperature, humidity, sunset time, wind speed, & pressure.</li>
                          <li>Created this project so that users can search their city among 10000 + cities to get weather report.</li>
                          <li>Generated data by user request will also display 2 more entities that are Data & Time of the city.</li>
                          <li>Used visual studio code for this project as a tool because it has 10,000+ features available in form of
                            extensions.</li>
                        </ul>
                        <p>Git Hub Link: <a href="https://github.com/rajusingh99/Weatherapp">https://github.com/rajusingh99/Weatherapp</a></p>
                      </div>
                    </li>
                  </ul>
                </div>
        </section>
     
    
    </div>
  )
}
