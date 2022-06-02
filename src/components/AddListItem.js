import React, { useContext, useState } from "react";
import listContext from "../context/lists/ListContext";
const AddListItem = (props) => {
  const context = useContext(listContext)
  const {addList } = context;
  const [list, setlist] = useState(
    {
      title:'',
      description:'',
      date:''
    }
  )

  const OnChangeHandler = (e) => {
    e.preventDefault();
    setlist({...list  , [e.target.name]: e.target.value});
  };

  const onclickHandler = async(e) => {
    e.preventDefault();
    if (list.title === "" || list.description === "" || list.date === "") {
      alert("fill all fields");
      return;
    }
    addList(list.title,list.description,list.date)
    //clear All Fields
    setlist({
      title:'',
      description:'',
      date:''
    });
  };
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
                  <input className="form-control" rows="3" name='title' value={list.title} onChange={OnChangeHandler} required></input>
                </div>
                <h5 className="card-title">description</h5>
                <div className="form-group">
                  <input className="form-control" rows="3" name='description' value={list.description} onChange={OnChangeHandler} required></input>
                </div>
                <h5 className="card-title">Date</h5>
                <div className="form-group">
                  <input
                  name='date'
                  onChange={OnChangeHandler}
                    className="form-control"
                    type="date"
                    rows="3"
                    required
                    value={list.date}
                  ></input>
                </div>
                <br></br>
                <button
                  className="btn btn-primary"
                  onClick={onclickHandler}
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
  export default AddListItem;
