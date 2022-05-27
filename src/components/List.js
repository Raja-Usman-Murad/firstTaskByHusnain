import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CardListItem from "./CardListItem";
import AddCard from "./AddListItem";

const List = () => {
  const history = useNavigate();
  const ref = useRef(null)

  const [tdd , setTdd] = useState({
    title:'',
    description:'',
    date:''
  })
  const [etdd , seteTdd] = useState({
    etitle:'',
    edescription:'',
    edate:''
  })

  const [lists, setLists] = useState([]);


  const userAuthentication = async () => {
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
      console.log(data);
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error, "unauthorized no token");
      history("/login");
    }
  };
  const ChangeHandler = (e) => {
    console.log('changed occur tdd');
    setTdd({...tdd , [e.target.name]: e.target.value});
  };
  const ChangeHandlerE = (e) => {
    console.log(e.target.value , e.target.name);
    console.log('changed occur E');
    seteTdd({...etdd , [e.target.name]: e.target.value});
  };

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (tdd.title === "" || tdd.description === "" || tdd.date === "") {
      alert("fill all fields");
      return;
    }
    setLists((prevList) => {
      setTdd({
        title:'',
        description:'',
        date:'',
      })
      const currentList = {...tdd , id:Math.random()}

      return prevList.concat(currentList);
    });
  };

  const deleteHandler = (e) => {
    console.log('deleted');
    setLists((prevlist) => {
      console.log(prevlist);
      const updatedLists = prevlist.filter((list) => {
        console.log(list.id , e.target.id);
        // console.log(+list.id != +e.target.id);
        return +list.id != +e.target.id;
      });
      // localStorage.setItem();
      return updatedLists;
    });
  };

  const updateHandler = (list) => {
    ref.current.click();
    seteTdd({etitle:list.title,edescription:list.description,edate:list.date , id:list.id});
  };

const editSaveHandler = () => {
  let newEtdd = lists.filter(({id})=>{
return id == etdd.id
  })
  console.log(newEtdd);
  newEtdd.push(etdd);
  setLists(newEtdd)
  console.log('edit save',etdd , etdd.id);
 
}

  useEffect(() => {
    userAuthentication();
  });
  return (
    <>
      <AddCard
        onclick={addNoteHandler}
        title={tdd.title}
        description={tdd.description}
        date={tdd.date}
        onChange = {ChangeHandler}
      />

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
                      <input className="form-control" name="etitle" value={etdd.etitle} onChange={ChangeHandlerE} rows="3" required></input>
                    </div>
                    <h5 className="card-title">description</h5>
                    <div className="form-group">
                      <input className="form-control" name="edescription" value={etdd.edescription} onChange={ChangeHandlerE} rows="3" required></input>
                    </div>
                    <h5 className="card-title">Date</h5>
                    <div className="form-group">
                      <input
                      name="edate"
                      value={etdd.edate}
                      onChange={ChangeHandlerE}
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
              >
                Close
              </button>
              <button type="button" onClick={editSaveHandler} className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {lists.map((list, index) => {
        return (
          <CardListItem
            list={list}
            key={list.id}
            id={list.id}
            title={list.title}
            description={list.description}
            date={list.date}
            onDelete={deleteHandler}
            onUpdateList={updateHandler}
          ></CardListItem>
        );
      })}
      {/* secondContainer End */}
      {/* MAIN CONTAINER END */}
    </>
  );
};
export default List;
