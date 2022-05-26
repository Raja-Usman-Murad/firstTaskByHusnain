import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardListItem from "./CardListItem";

const List = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [lists, setLists] = useState([])
  const history = useNavigate();
  const userList = async () => {
    try {
      const res = await fetch("/list", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data, "data from contact front end");
      //   setUserData(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error, "unauthorized no token");
      history("/login");
    }
  };
 const titleChangeHandler = (e) => {
    setTitle(e.target.value);
 }
 const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
 }
 const dateChangeHandler = (e) => {
    setDate(e.target.value);
 }
  const addNoteHandler = (e) => {
e.preventDefault()
if(title === '' || description === '' || date === '') {
    alert('fill all fields')
    return;
}
    const currentList = {
        title:title,
        description: description,
        date:date
    }
    console.log(currentList);
    setLists((prevList) => {
        setDate('');
        setDescription('')
        setTitle('')
        return (
            prevList.concat(currentList)
        )
    }
         
)
    // console.log(lists,'final list');
  };
  useEffect(() => {
    userList();
  },);
  return (
    <>
      {/* MAIN CONTAINER */}
      <div className="container my-3">
        <h2>Enter Your List</h2>
        {/* firstContainer */}
        <form>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Name/Title</h5>
              <div className="form-group">
                <input className="form-control" rows="3" value={title} onChange={titleChangeHandler} required></input>
              </div>
              <h5 className="card-title">description</h5>
              <div className="form-group">
                <input className="form-control" rows="3" value={description} onChange={descriptionChangeHandler} required></input>
              </div>
              <h5 className="card-title">Date</h5>
              <div className="form-group">
                <input
                onChange={dateChangeHandler}
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
                onClick={addNoteHandler}
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
        <div id="notes" className="row container-fluid">

      {lists.map((list, index) => {
            return (
              <CardListItem
                key={index}
                title={list.title}
                description={list.description}
                date={list.date}
              ></CardListItem>
            );
          })}
   
        
        </div>
        {/* secondContainer End */}
      </div>
      {/* MAIN CONTAINER END */}
    </>
  );
};
export default List;
