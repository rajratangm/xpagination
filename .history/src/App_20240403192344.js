// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css'; // Import CSS file

// function App() {
//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
//       setData(response.data);
//       setError(null)
//     } catch (error) {
//       alert('fetchDataFailed');
//       setData([])
//     }
//   };

//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="container">
//       {error && <div className="error">{error}</div>}
//       <table>
//         <thead className="table-head">
//           <tr>
//             <th className="bold" style={{ color: 'red' }}>Name</th>
//             <th className="bold" style={{ color: 'red' }}>Email</th>
//             <th className="bold" style={{ color: 'red' }}>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.slice((currentPage - 1) * 10, currentPage * 10).map((item, index) => (
//             <React.Fragment key={index}>
//               <tr>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.role}</td>
//               </tr>
//               <tr className="line"></tr>
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//         <span className="current-page">Page {currentPage}</span>
//         <button onClick={handleNextPage}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default App;