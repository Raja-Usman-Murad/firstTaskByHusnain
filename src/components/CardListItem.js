import React from "react";
const CardListItem = ({title, description, date}) => {
    return (
        <>
        <div className="noteCard card my-2 mx-2" >
        <div className="card-body">
          <input type="text" disabled value={title} className="card-title"></input>
          <input type="text" disabled value={description} className="card-title"></input>
          <input type="text" disabled value={date} className="card-title"></input>
          <p className="card-text"></p>
          <button  className="btn btn-secondary m-2">Edit list</button>
          <button  className="btn btn-danger">Delete list</button>
        </div>
      </div>
        </>
    )
}
export default CardListItem;