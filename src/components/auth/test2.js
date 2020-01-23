import React from "react";
import { useForm } from "react-hook-form";
const Register = () => {
  const { handleSubmit, register, errors, watch } = useForm({
    mode: "onChange"
  });

  console.log(errors)
  const onSubmit = values => {
      alert(JSON.stringify(values))
  };
  return (
    <div>
      <nav class="blue darken-1" style={{ marginBottom: "50px" }}>
        <div class="container">
          <div class="nav-wrapper">
            <a href="index.html" class="brand-logo">
              RealInfo
            </a>
          </div>
        </div>
      </nav>
      <div class="row">
        <div class="col s12 m8 l4 offset-m2 offset-l4">
          <div class="card">
            <div class="card-action blue darken-1 white-text">
              <h3 className="center">Register</h3>
            </div>

            <div class="card-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="input-field">
                  <i class="material-icons prefix">account_circle</i>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className={errors.username ? "invalid" : "valid-field"}
                    ref={register({
                      required: "This field is required.",
                      pattern: {
                        value: /^[a-z0-9]{3,15}$/,
                        message: "Please enter a valid username."
                      }
                    })}
                  />
                  <label htmlFor="username">Enter username</label>
                  {errors.username && (
                    <span class="helper-text">{errors.username.message}</span>
                  )}
                </div>
                <div class="input-field">
                  <i class="material-icons prefix">email</i>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={errors.email ? "invalid" : "valid-field"}
                    ref={register({
                      required: "This field is required.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Please enter a valid email address."
                      }
                    })}
                  />
                  <label htmlFor="email">Enter email</label>
                  {errors.email && (
                    <span class="helper-text">{errors.email.message}</span>
                  )}
                </div>

     
                <div class="input-field">
                  <i class="material-icons prefix">lock</i>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className = {errors.password ? ("invalid"):("valid-field")}
                    ref={register({
                      required: "This field is required.",
                      pattern: {
                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                        message: "Please enter a valid password."
                      }
                    })}
                  />
                  <label htmlFor="password">Enter password</label>
                  {errors.password && <span class="helper-text" >{errors.password.message}</span>}
                </div>

                <div class="input-field">
                  <i class="material-icons prefix">vpn_key</i>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    ref={register({
                      required: true,
                      validate: value => value === watch("password")
                    })}
                  />
                  <label htmlFor="password2">Confirm password</label>
                  {errors.password2 && errors.password2.type === "required" && <span class="helper-text" >Field is required</span>}
                  {errors.password2 && errors.password2.type === "validate" && <span class="helper-text" >Password mismatch</span>}
                </div>
                <div class="input-field">
                  <button
                    class="btn-large blue darken-1 waves-effect waves-dark"
                    style={{ width: "100%" }}
                  >
                    Register
                  </button>
                </div>
              </form>
              <div class="row">
                <p class="right">
                  Already have an account?{" "}
                  <a href="#login" class="modal-trigger">
                    login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
