return (
  <div>
    <NavBar />

    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Add Data</h2>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Department</label>
                <select
                  className="form-select"
                  name="department"
                  value={input.department}
                  onChange={inputHandler}
                >
                  <option value="">Select Department</option>
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="EC">EC</option>
                  <option value="ME">ME</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Semester</label>
                <select
                  className="form-select"
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

              <div className="col-md-6">
                <label className="form-label">Course</label>
                <select
                  className="form-select"
                  name="course"
                  value={input.course}
                  onChange={inputHandler}
                >
                  <option value="">Select Course</option>
                  <option value="MCA">MCA</option>
                  <option value="iMCA">iMCA</option>
                  <option value="CSE">CSE</option>
                  <option value="MECH">MECH</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">System Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="systemnumber"
                  value={input.systemnumber}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Login Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="logintime"
                  value={input.logintime}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Logout Time</label>
                <input
                  type="time"
                  className="form-control"
                  name="logouttime"
                  value={input.logouttime}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
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
                <button
                  className="btn btn-primary px-5"
                  onClick={submitHandler}
                >
                  Add Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);