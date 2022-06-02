import React, { useEffect } from "react";

import AddListItem from "./AddListItem";
import MyLists from "./MyLists";


const List = () => {

  // const userAuthentication = async () => {
  //   console.log('listtts');
  //   try {
  //     const res = await fetch("http://localhost:5000/getuser", {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "auth-token" : localStorage.getItem('token')
  //       },
  //     });
  //     const data = await res.json();
  //     console.log('fetch all data',data);
  //     // setLists(data)
  //     if (!res.status === 200) {
  //       throw new Error(res.error);
  //     }
  //   } catch (error) {
  //     console.log(error, "unauthorized no token");
  //     history("/login");
  //   }
  // };


  useEffect(() => {
    // userAuthentication();
    // eslint-disable-next-line
  });
  return (
    <>
      <AddListItem />
      <MyLists />

      {/* secondContainer End */}
      {/* MAIN CONTAINER END */}
    </>
  );
};
export default List;
