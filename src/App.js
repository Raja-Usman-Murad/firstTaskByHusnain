import React from "react";
import { Route, Routes } from "react-router-dom";
import ListState from "./context/lists/ListState";
import Navbar from "./components/navbar";
import Error from "./components/Error";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import List from "./components/List";
import UpdatePassword from "./components/UpdatePassword";
import UpdateUser from "./components/UpdateUser";
import ResetPassword from "./components/ResetPassword";
import ShareList from "./components/ShareList";

function App() {
  return (
    <>
      <ListState>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword/:id" element={<ResetPassword />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
          <Route path="/updateuser" element={<UpdateUser />} />
          <Route path="/list" element={<List />} />
          <Route path="/sharelist" element={<ShareList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ListState>
    </>
  );
}

export default App;
