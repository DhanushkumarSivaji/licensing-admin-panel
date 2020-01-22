import React from "react";

export default function test() {
  return (
    <div>
      <nav class="blue darken-1" style={{marginBottom:'50px'}}>
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
              <form>
                <div class="input-field">
                  <i class="material-icons prefix">account_circle</i>
                  <input type="text" name="username" id="username" />
                  <label htmlFor="username">Enter username</label>
                </div>
                <div class="input-field">
                  <i class="material-icons prefix">email</i>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="validate"
                  />
                  <label htmlFor="email">Enter email</label>
                </div>

                <div class="input-field">
                  <i class="material-icons prefix">lock</i>
                  <input type="password" name="pass1" id="pass1" />
                  <label htmlFor="pass1">Enter password</label>
                </div>

                <div class="input-field">
                  <i class="material-icons prefix">vpn_key</i>
                  <input type="password" name="pass2" id="pass2" />
                  <label htmlFor="pass2">Confirm password</label>
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
}
