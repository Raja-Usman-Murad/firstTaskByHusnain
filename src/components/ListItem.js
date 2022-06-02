import React, { useContext } from "react";
import listContext from "../context/lists/ListContext";
const ListItem = (props) => {
  const {list,updateList} = props
  const context = useContext(listContext)
  const {deleteList} = context;

  const deleteHandler = (id) => {
    deleteList(id);
  };
  return (
    <>
      <div id="notes" className="row container-fluid">
        <div className="noteCard card my-2 mx-2">
          <div className="card-body">
            <input
              type="text"
              disabled
              value={list.title}
              className="card-title"
            ></input>
            <input
              type="text"
              disabled
              value={list.description}
              className="card-title"
            ></input>
            <input
              type="text"
              disabled
              value={list.date}
              className="card-title"
            ></input>
            <p className="card-text"></p>
            <button className="btn btn-secondary m-2" onClick={() => {updateList(list)}}>
              Edit list
            </button>
            <button className="btn btn-danger"  onClick={() => {deleteHandler(list._id)}}>
              Delete list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListItem;
