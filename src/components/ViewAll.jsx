import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewAll = () => {
  const [data, changeData] = useState([]);
  const fetchData = () => {
    axios
      .get("http://localhost:3000/view-data")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">
          <b>View Data</b>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">department</th>
              <th scope="col">semester</th>
              <th scope="col">course</th>
              <th scope="col">systemnumber</th>
              <th scope="col">logintime</th>
              <th scope="col">logouttime</th>
              <th scope="col">date</th>
            </tr>
          </thead>

          <tbody>
  {data
    .filter((item) => item.name)
    .map((value, index) => (
      <tr key={value._id}>
        <td>{value.name}</td>
        <td>{value.department}</td>
        <td>{value.semester}</td>
        <td>{value.course}</td>
        <td>{value.systemnumber}</td>
        <td>{value.logintime}</td>
        <td>{value.logouttime}</td>
        <td>{value.date}</td>
      </tr>
    ))}
</tbody>
        </table>
      </div>
    </div>
         

  );
};

export default ViewAll;