import React from "react";
const CardListItem = ({ title, description, date, onDelete, id , onUpdateList,list }) => {
  return (
    <>
      <div id="notes" className="row container-fluid">
        <div className="noteCard card my-2 mx-2">
          <div className="card-body">
            <input
              type="text"
              disabled
              value={title}
              className="card-title"
            ></input>
            <input
              type="text"
              disabled
              value={description}
              className="card-title"
            ></input>
            <input
              type="text"
              disabled
              value={date}
              className="card-title"
            ></input>
            <p className="card-text"></p>
            <button className="btn btn-secondary m-2" onClick={()=>{onUpdateList(list)}} id={id}>
              Edit list
            </button>
            <button className="btn btn-danger" id={id} onClick={onDelete}>
              Delete list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardListItem;
