import React from 'react'
import './component.css'

export default function Books() {
  return (
    <div>
        <section id="books-section">
            <h2 className="head">Books</h2>
            
            <table>
              <thead>
                <tr>
                  <th>Book ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Genre</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <table className="nested-table">
                       <thead>
                            <tr>
                              <th>Publication Date</th>
                              <th>Page Count</th>
                              <th>ISBN</th>
                            </tr>
                       </thead>
                       <tbody>
                        <tr>
                          <td>2021-05-15</td>
                          <td>320</td>
                          <td>978-1234567890</td>
                        </tr>
                       </tbody>
                    </table>
                  </td>
                  <td>Jane Smith</td>
                  <td>Mystery</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <table className="nested-table">
                      <thead>
                        
                        <tr>
                          <th>Publication Date</th>
                          <th>Page Count</th>
                          <th>ISBN</th>
                        </tr>
                      </thead>
                       <tbody>
                        <tr>
                          <td>2020-11-01</td>
                          <td>256</td>
                          <td>978-0987654321</td>
                        </tr>
                       </tbody>
                    </table>
                  </td>
                  <td>John Doe</td>
                  <td>Fantasy</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <table className="nested-table">
                       <thead>
                         
                          <tr>
                            <th>Publication Date</th>
                            <th>Page Count</th>
                            <th>ISBN</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                            <td>2019-07-20</td>
                            <td>432</td>
                            <td>978-9876543210</td>
                          </tr>
                       </tbody>
                    </table>
                  </td>
                  <td>Lisa Johnson</td>
                  <td>Romance</td>
                  <td>Unavailable</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <table className="nested-table">
                       <thead>
                          
                          <tr>
                            <th>Publication Date</th>
                            <th>Page Count</th>
                            <th>ISBN</th>
                          </tr>
                       </thead>
                        <tbody>
                            <tr>
                            <td>2022-03-10</td>
                            <td>192</td>
                            <td>978-5432109876</td>
                          </tr>
                        </tbody>
                    </table>
                  </td>
                  <td>Michael Brown</td>
                  <td>Thriller</td>
                  <td>Available</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <table className="nested-table">
                       <thead>
                          
                          <tr>
                            <th>Publication Date</th>
                            <th>Page Count</th>
                            <th>ISBN</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr>
                            <td>2018-09-05</td>
                            <td>400</td>
                            <td>978-2468135790</td>
                          </tr>
                       </tbody>
                    </table>
                  </td>
                  <td>Sarah Adams</td>
                  <td>Drama</td>
                  <td>Available</td>
                </tr>
              </tbody>
            </table>
            
          </section>       
          
    </div>
  )
}





// import React from 'react';
// import './component.css';

// export default function Books() {
//   return (
//     <div>
//       <section id="books-section">
//         <h2 className="head">Books</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Book ID</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>Genre</th>
//               <th>Availability</th>
//             </tr>
//           </thead>
//           <tbody> {/* Add tbody element here */}
//             <tr>
//               <td>1</td>
//               <td>
//                 <table className="nested-table">
//                   <thead>
//                     <tr>
//                       <th>Publication Date</th>
//                       <th>Page Count</th>
//                       <th>ISBN</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>2021-05-15</td>
//                       <td>320</td>
//                       <td>978-1234567890</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </td>
//               <td>Jane Smith</td>
//               <td>Mystery</td>
//               <td>Available</td>
//             </tr>
//             {/* Add similar structure for the remaining rows */}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// }

