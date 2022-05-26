import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const submitData = async (e) => {
        console.log("it is submit section");
        e.preventDefault();
        if (!email || !password) {
          alert("fill all the fields");
        } else {
          const res = await fetch("/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 400 || !data) {
            alert("invalid credentials");
          } else {
            alert("valid credentials");
            history("/list");
          }
        }
      };

    return(
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
                      Sign <span id="logohalfcolorchange">In</span>
                    </h1>
                    <form method="POST" className="mt-3" onSubmit={submitData}>
                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-email zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>

                      <div className="mb-3 d-flex flex-row justify-content-center align-items-center">
                        <div className="mr-2">
                          <i className="zmdi zmdi-lock zmdi-hc-3x mr-3"></i>
                        </div>
                        <input
                          // required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Your Password"
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
    )
}
export default Login