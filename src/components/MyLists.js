import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import listContext from "../context/lists/ListContext";
import ListItem from "./ListItem";

const MyLists = () => {
const history = useNavigate();
  const ref = useRef(null);
  const refClose = useRef(null);
  const context = useContext(listContext);
  const { lists, getAllnotes, editList } = context;
  const [list, setlist] = useState({
    eId:'',
    etitle: "",
    edescription: "",
    edate: "",
  });

  const updateList = (currentList) => {
    ref.current.click();
    setlist({
        eId:currentList._id,
        etitle:currentList.title,
        edescription:currentList.description,
        edate:currentList.date,
    })
  };

  const OnChangeHandler = (e) => {
    e.preventDefault();
    setlist({ ...list, [e.target.name]: e.target.value });
  };

  const onclickHandler = async (e) => {
    e.preventDefault();
    if (list.title === "" || list.description === "" || list.date === "") {
      alert("fill all fields");
      return;
    }
    editList(list.eId,list.etitle,list.edescription,list.edate)
    refClose.current.click();
  
  };

  useEffect(() => {
      if(localStorage.getItem('token')){
          getAllnotes();
      }else{
        history("/login");
      }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="etitle"
                        value={list.etitle}
                        onChange={OnChangeHandler}
                        rows="3"
                        required
                      ></input>
                    </div>
                    <h5 className="card-title">description</h5>
                    <div className="form-group">
                      <input
                        className="form-control"
                        name="edescription"
                        value={list.edescription}
                        onChange={OnChangeHandler}
                        rows="3"
                        required
                      ></input>
                    </div>
                    <h5 className="card-title">Date</h5>
                    <div className="form-group">
                      <input
                        name="edate"
                        value={list.edate}
                        onChange={OnChangeHandler}
                        className="form-control"
                        type="date"
                        rows="3"
                        required
                      ></input>
                    </div>
                    <br></br>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                onClick={onclickHandler}
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {lists.map((list) => {
        return (
          <ListItem
            list={list}
            key={list._id}
            updateList={updateList}
            // list={list}
            // id={list.id}
            // title={list.title}
            // description={list.description}
            // date={list.date}
            // onDelete={deleteHandler}
            // onUpdateList={updateHandler}
          ></ListItem>
        );
      })}
    </>
  );
};

export default MyLists;
