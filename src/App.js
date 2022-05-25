import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Error from "./components/Error";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import List from "./components/List";
import ShareList from "./components/ShareList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/sharelist" element={<ShareList />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
