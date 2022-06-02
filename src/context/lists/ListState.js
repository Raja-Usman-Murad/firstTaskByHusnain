import React, { useState } from "react";
import ListContext from "./ListContext";

const ListState = (props) => {
  const listInitial = [];
  const [lists, setlists] = useState(listInitial)
//Get ALL Lists
const getAllnotes = async () => {
    //TODO API CALL
    const res = await fetch(`http://localhost:5000/fetchalllists`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token" : localStorage.getItem('token')
      },
    });
    const data = await res.json();
    console.log(data);


  setlists(data)
}


  //Add a Lists
 const addList = async (title, description , date) =>{
      //TODO API CALL
      const res = await fetch(`http://localhost:5000/addlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, date }),
      });
      const data = await res.json();
     let list = data.data
    setlists(lists.concat(list))
  }
 //deleteNote a Lists
 const deleteList = async(id)=>{
      //TODO API CALL
      const res = await fetch(`http://localhost:5000/deletelist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
      });
      const data = await res.json();
      console.log(data);

      let newList = lists.filter((list)=>{
          return list._id !== id
      })
      setlists(newList);
  }

   //update a Lists
   const  editList = async(id, title, description , date)=>{
    //TODO API CALL
    const res = await fetch(`http://localhost:5000/updatelist/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, date }),
      });
      const data = await res.json();
      console.log(data);
      let newLists = JSON.parse(JSON.stringify(lists))
    for (let index = 0; index < newLists.length; index++) {
        const element = newLists[index];
        if(element._id === id){
            newLists[index].title = title
            newLists[index].description = description
            newLists[index].date = date
            break;
        }  
    }
    setlists(newLists)
  }
  return <ListContext.Provider value={{lists,addList,deleteList,editList,getAllnotes}}>{props.children}</ListContext.Provider>;
};
export default ListState;
