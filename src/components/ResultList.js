// import React from "react";

// function ResultList(props) {
  
//   return (
//     <ul className="list-group">
//       {props.results.map(result => (
//     <li className="list-group-item" key={result.login.uuid}>
//       <img alt={result.title} className="img-fluid" src={result.picture.thumbnail} />
//       <p>Name: {result.name.first} {result.name.last}</p>
//       <p>Phone: {result.phone}</p>
//       <p>DOB: {result.dob.date}</p>
//     </li>
//   ))}
//     </ul>
//   );
// }

// export default ResultList;

import React from "react";
// import './styles.css'



function ResultList(props) {

return (
    <table className="list-group mx-4">
      <thead>
        <tr className="title d-flex justify-content-between align-items-center">
          <td><button name="" onClick={props.handleButtonPush}>Picture</button></td>
          <td><button name="result.name.last" onClick={props.handleButtonPush}>name</button></td>
          <td><button name="result.phone" onClick={props.handleButtonPush}>phone</button></td>
          <td><button name="result.email" onClick={props.handleButtonPush}>email</button></td>
          <td><button name="result.dob.date" onClick={props.handleButtonPush}>D.O.B.</button></td>
        </tr>
        </thead>
        <tbody>
      {props.results.map(result => (
        <tr 
        className="d-flex align-items-center justify-content-between"
        key={result.name.first+result.name.last}>
            <td><img src={result.picture.large} alt={result.name.first + result.name.last}/></td>
            <td>{result.name.first} {result.name.last}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.dob.date.slice(0,10)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default ResultList;