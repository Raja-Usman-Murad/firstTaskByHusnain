import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const UpdatePassword = () => {
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPasswordConfirm, setnewPasswordConfirm] = useState("");
  const history = useNavigate();
  const submitData = async (e) => {
    e.preventDefault();
    console.log("update password");
    if (!currentPassword || !newPassword || !newPasswordConfirm) {
      alert("fill all the fields");
    } else {
      const res = await fetch("http://localhost:5000/updatePassword", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          passwordCurrent: currentPassword,
          password: newPassword,
          cpassword: newPasswordConfirm,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.status === "success") {
        // save the auth token and redirect
        localStorage.setItem("token", data.authToken);
        alert("Password Updated And you are now logged In");
        history("/list");
      } else {
        alert(`Sorry Try Again ${data.message}`);
      }
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
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
                  <div className="col-md-6 col-10 order-sm-1 order-md-0 d-flex flex-column align-items-center justify-content-center ">
                    <NavLink
                      exact
                      className="navbar-brand text-dark"
                      to="/signup"
                    >
                      Create An Account
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-10 order-sm-0 order-md-1">
                    <h1 className="mt-5" id="signup-heading">
                      Update <span id="logohalfcolorchange">Password</span>
                    </h1>
                    <form className="mt-3" onSubmit={submitData}>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required
                          value={currentPassword}
                          onChange={(e) => setcurrentPassword(e.target.value)}
                          type="currentPassword"
                          className="form-control"
                          id="currentPassword"
                          name="currentPassword"
                          placeholder="currentPassword"
                        />
                      </div>

                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-lock zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required
                          value={newPassword}
                          onChange={(e) => setnewPassword(e.target.value)}
                          type="newPassword"
                          className="form-control"
                          id="newPassword"
                          name="newPassword"
                          placeholder="newPassword"
                        />
                      </div>

                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-lock zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required
                          value={newPasswordConfirm}
                          onChange={(e) =>
                            setnewPasswordConfirm(e.target.value)
                          }
                          type="newPasswordConfirm"
                          className="form-control"
                          id="newPasswordConfirm"
                          name="newPasswordConfirm"
                          placeholder="newPasswordConfirm"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="submit"
                          name="login"
                          value="SignIn"
                          id="login"
                          className="form-submit btn btn-primary p-2 btn-lg "
                        />
                      </div>
                    </form>
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
export default UpdatePassword;
