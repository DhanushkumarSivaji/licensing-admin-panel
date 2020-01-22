import React, { useState } from "react";
import validation from "../utils/validation";
import Footer from "../layout/Footer";
export default function Test() {

  const [errors, setError] = useState({
    usernameErr: null,
    emailErr: null,
    passErr: null,
    confirmPassErr: null
  });
  const [RegisterData, setData] = useState({
    username: "",
    email: "",
    pass1: "",
    pass2: ""
  });

  let checkValidation = e => {
    let value = validation(e.target.name, e.target.value);
    switch (e.target.name) {
      case "username":
        setError({
            ...errors,
          usernameErr: value
        });
        setData({
            ...RegisterData,
          username: e.target.value
        });
        break;
      case "email":
        setError({
            ...errors,
          emailErr: value
        });
        setData({
            ...RegisterData,
          email: e.target.value
        });
        break;
      case "pass1":
        setError({
            ...errors,
          passErr: value
        });
        setData({
            ...RegisterData,
          pass1: e.target.value
        });
        break;
      case "pass2":
        setData({
            ...RegisterData,
          pass2: e.target.value
        });
        if (e.target.value !== RegisterData.pass1) {
          setError({
            ...errors,
            confirmPassErr: "Password not matched."
          });
        } else if (e.target.value === RegisterData.pass1) {
          setError({
            ...errors,
            confirmPassErr: null
          });
        }
        break;
      default:
        break;
    }
  };
  let submitForm=(e)=>{
        e.preventDefault();
      let userError=validation("username",RegisterData.username);
      let emailError=validation("email",RegisterData.email);
      let passError=validation("pass1",RegisterData.pass1);
      setError({
        usernameErr:userError,
        emailErr:emailError,
        passErr:passError,
    })
      if(passError==null && RegisterData.pass1!==RegisterData.pass2){
          setError({
              usernameErr:userError,
              emailErr:emailError,
              passErr:passError,
              confirmPassErr:"Password not matched"
          })
      }
      if(userError==null && emailError==null && passError==null && Error.confirmPassErr==null){
          console.log("success")
      }
  }
  return (
    <div>
      <nav class="blue darken-1">
        <div class="container">
          <div class="nav-wrapper">
            <a href="index.html" class="brand-logo">
              RealInfo
            </a>
          </div>
        </div>
      </nav>
      <section class="section section-login" style={{ marginBottom: "100px" }}>
        <div class="container">
          <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
              <form onSubmit={submitForm} >
                <div class="card-panel z-depth-5">
                  <h5 class="center">Register</h5>
                  <p class="center">Join to our community now !</p>
                  <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <input
                      type="text"
                      onChange={checkValidation}
                      onBlur={checkValidation}
                      name="username"
                      id="username"
                    />
                    <label htmlFor="username">Enter username</label>
                    <p>{Error.usernameErr}</p>
                  </div>

                  <div class="input-field">
                    <i class="material-icons prefix">email</i>
                    <input
                      type="email"
                      name="email"
                      onChange={checkValidation}
                      onBlur={checkValidation}
                      id="email"

                    />
                    <label htmlFor="email">Enter email</label>
                    <p>{Error.emailErr}</p>
                  </div>

                  <div class="input-field">
                    <i class="material-icons prefix">lock</i>
                    <input
                      type="password"
                      onChange={checkValidation}
                      onBlur={checkValidation}
                      name="pass1"
                      id="pass1"
                    />
                    <label htmlFor="pass1">Enter password</label>
                    <p>{Error.passErr}</p>
                  </div>

                  <div class="input-field">
                    <i class="material-icons prefix">vpn_key</i>
                    <input
                      type="password"
                      name="pass2"
                      onChange={checkValidation}
                      onBlur={checkValidation}
                      id="pass2"
                    />
                    <label htmlFor="pass2">Confirm password</label>
                    <p>{Error.confirmPassErr}</p>
                  </div>
                  <p class="right">
                    Already have an account?{" "}
                    <a href="#login" class="modal-trigger">
                      login
                    </a>
                  </p>
                  <input
                    type="submit"
                    name="submit"
                    value="register"
                    class="btn left col s12"
                  />

                  <div class="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
