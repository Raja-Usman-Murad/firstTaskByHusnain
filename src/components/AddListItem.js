import React from "react";
const AddCard = ({title , description, date, onChange, onclick}) => {
  return (
    <>
          {/* MAIN CONTAINER */}
          <h1 className="text-center">ADD LIST</h1>
          {/* firstContainer */}
          <form>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name/Title</h5>
                <div className="form-group">
                  <input className="form-control" rows="3" name='title' value={title} onChange={onChange} required></input>
                </div>
                <h5 className="card-title">description</h5>
                <div className="form-group">
                  <input className="form-control" rows="3" name='description' value={description} onChange={onChange} required></input>
                </div>
                <h5 className="card-title">Date</h5>
                <div className="form-group">
                  <input
                  name='date'
                  onChange={onChange}
                    className="form-control"
                    type="date"
                    rows="3"
                    required
                    value={date}
                  ></input>
                </div>
                <br></br>
                <button
                  className="btn btn-primary"
                  onClick={onclick}
                  id="addBtn"
                >
                  Add List{" "}
                </button>
              </div>
            </div>
          </form>
          {/* firstContainer End */}
          <hr />
          <h2>Your Lists</h2>
          <hr />
          {/* secondContainer */}
          </>
    );
  };
  export default AddCard;
