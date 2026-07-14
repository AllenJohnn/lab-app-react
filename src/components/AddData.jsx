import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

const AddData = () => {
  const [input, changeInput] = useState({
    name: "",
    department: "",
    semester: "",
    course: "",
    fuel_type: "",
    systemnumber: "",
    logintime: "",
    logouttime: "",
    date: "",
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = () => {
    axios
      .post("https://host-demo-app.onrender.com/api/add-car", input)
      .then((response) => {
        console.log(response.data);
        alert("Car Added Successfully!");

        changeInput({
          name: "",
          department: "",
          semester: "",
          course: "",
          systemnumber: "",
          logintime: "",
          logouttime: "",
          date: "",
        });
      })
      .catch((error) => {
        console.log(error.response?.data);
        console.log(error.response?.status);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Add Data</h2>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Department</label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  value={input.department}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Semester</label>
                <select
                  className="form-control"
                  name="semester"
                  value={input.semester}
                  onChange={inputHandler}
                >
                  <option value="">Select Semester</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Course</label>
                <input
                  type="text"
                  className="form-control"
                  name="course"
                  value={input.course}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">System Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="systemnumber"
                  value={input.systemnumber}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Login Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="logintime"
                  value={input.logintime}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Logout Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="logouttime"
                  value={input.logouttime}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={input.date}
                  onChange={inputHandler}
                />
              </div>

              
              <div className="col-12 text-center mt-3">
                <button className="btn btn-primary" onClick={submitHandler}>
                  Add Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;