import React from 'react'
import './component.css'
import { Link,useNavigate  } from 'react-router-dom'

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    event.preventDefault();
    navigate('/about');
  };

  return (
    // <div>
    //       <nav className="navbar">
    //           <div>
    //             <div>
    //                   <ul>
    //                   <li className="logo-item">
    //                     <Link to="/">
    //                       Typography
    //                     </Link>
    //                   </li>

    //                   <li>
    //                     <Link to="/books">
    //                           Books
    //                       </Link>
    //                   </li>

                    
    //                   <li>
    //                     <Link to="/register">
    //                             Register
    //                         </Link>
    //                   </li>

    //                   <li>
    //                     <Link to="/apply">
    //                             Apply
    //                         </Link>
    //                     </li>

    //                   <li>
    //                     <Link to="/complex-form">
    //                           Complex_Form
    //                         </Link>
    //                   </li>

    //                   <li>
    //                   <a href="/about" onClick={handleNavigation}>
    //                       About
    //                   </a>
    //                     {/* <Link to="/about">
    //                             About
    //                         </Link> */}
    //                     </li>
                      
    //                 </ul>
                  
    //                </div>
                  
    //           </div>
    //       </nav>
    //       <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    //                       <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="toggle" />
    //                       <label  htmlFor="toggle" className="toggle-label" style={{display:'hidden'}}></label>
    //                   </div>
    // </div>

    <div>
          <nav className="navbar">
              <div>
                <div>
                      <ul>
                      <li className="logo-item">
                        <Link to="React_Resume/">
                          Typography
                        </Link>
                      </li>

                      <li>
                        <Link to="React_Resume/books">
                              Books
                          </Link>
                      </li>

                    
                      <li>
                        <Link to="React_Resume/register">
                                Register
                            </Link>
                      </li>

                      <li>
                        <Link to="React_Resume/apply">
                                Apply
                            </Link>
                        </li>

                      <li>
                        <Link to="React_Resume/complex-form">
                              Complex_Form
                            </Link>
                      </li>

                      <li>
                      <a href="/about" onClick={handleNavigation}>
                          About
                      </a>
                        {/* <Link to="React_Resume//about">
                                About
                            </Link> */}
                        </li>
                      
                    </ul>
                  
                   </div>
                  
              </div>
          </nav>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="toggle" />
                          <label  htmlFor="toggle" className="toggle-label" style={{display:'hidden'}}></label>
                      </div>
    </div>
  )
}
