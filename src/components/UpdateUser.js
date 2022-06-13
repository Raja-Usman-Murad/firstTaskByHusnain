import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import listContext from "../context/lists/ListContext";
const UpdateUser = () => {
  const context = useContext(listContext);
  console.log(context, "context");
  const { userDetail, getUser } = context;
  const [user, setUser] = useState(userDetail);
  const history = useNavigate();

  const handleInputs = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const handlePhoto = (e) => {
    let { files } = e.target;
    function encodeImageFileAsURL(file) {
      var reader = new FileReader();
      reader.onloadend = function () {
        setUser({ ...user, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
    encodeImageFileAsURL(files[0]);
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, photo } = user;
    if (!name || !email || !phone || !work || !photo) {
      alert("fill all the data");
      // history.push("/registration");
    } else {
      const res = await fetch("http://localhost:5000/updateUser", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ name, email, phone, work, photo }),
      });
      const data = await res.json();
      if (data.status === "success") {
        alert("Data Updated Successfully");
        history("/");
        window.location.reload(true);
      } else {
        alert(`fail ${data.message}`);
      }
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
    getUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <section className="mt-5" id="text_shadow">
              <div className="container-fluid" id="registration_main_container">
                <div className="row">
                  <div className="col-md-6 col-10 order-sm-1 order-md-0">
                    <h1 className="mt-5" id="signup-heading">
                      Update <span id="logohalfcolorchange">User</span>
                    </h1>
                    <form className="mt-3">
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-3">
                          <i className="zmdi zmdi-account zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.name}
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.email}
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-phone-in-talk zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.phone}
                          type="number"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Your Phone"
                        />
                      </div>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-slideshow zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          required
                          onChange={handleInputs}
                          value={user.work}
                          type="text"
                          className="form-control"
                          id="work"
                          name="work"
                          placeholder="Your Profession"
                        />
                      </div>

                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          accept="image/*"
                          required
                          onChange={handlePhoto}
                          type="file"
                          className="form-control"
                          id="photo"
                          name="photo"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          onClick={postData}
                          type="submit"
                          name="registration"
                          value="Update User Data"
                          id="registration"
                          className="form-submit btn btn-primary p-2 btn-lg "
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-10 order-sm-0 order-md-1 d-flex flex-column align-items-center justify-content-center ">
                    <NavLink
                      exact
                      className="navbar-brand text-dark"
                      to="/list"
                    >
                      Lists Page
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateUser;
