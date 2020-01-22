/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useForm } from "react-hook-form";
const test = () => {
  const { handleSubmit, register, errors,watch } = useForm();



  const onSubmit = values => {
    console.log(values.email,values.password);
  };
  return (
    <div>
      <nav class="light-blue accent-4" style={{marginBottom:'50px'}}>
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
            <div class="card-action light-blue accent-4 white-text">
              <h3 className="center">Login</h3>
            </div>

            <div class="card-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="input-field">
                  <i class="material-icons prefix">email</i>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                      }
                    })}
                  />
                  <label htmlFor="email">Enter email</label>
                  {errors.email && <span class="helper-text" data-error="wrong">{errors.email.message}</span>}
                </div>

                <div class="input-field">
                  <i class="material-icons prefix">lock</i>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
                        message: "invalid password"
                      }
                    })}
                  />
                  <label htmlFor="password">Enter password</label>
                  {errors.password && <span class="helper-text" data-error="wrong">{errors.password.message}</span>}
                </div>

                <div class="input-field">
                  <i class="material-icons prefix">vpn_key</i>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    ref={register({
                        validate: (value) => value === watch('password')
                      })
                    }
                  />
                  <label htmlFor="password2">Confirm password</label>
                  {errors.password2 && <span class="helper-text" data-error="wrong">Password mismatch</span>}
                </div>

                <p style={{ marginLeft: "6px" }}>
                  <label>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                </p>
                <div class="input-field">
                  <button
                    class="btn-large light-blue accent-4 waves-effect waves-dark"
                    style={{ width: "100%" }}
                  >
                    Login
                  </button>
                </div>
              </form>
              <div class="row">
                <div class="input-field col s6 m6 l6">
                  <p class="margin medium-large">
                    <a href="#">Register Now!</a>
                  </p>
                </div>
                <div class="input-field col s6 m6 l6">
                  <p class="margin right-align medium-large">
                    <a href="#">Forgot password?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
