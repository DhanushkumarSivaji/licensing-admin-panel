import React from 'react'

export default function ForgetPassword() {
    return (
        <div>
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
      
    <h2 class="header">Forget Password</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="img/person1.jpg"/>
      </div>
      <div class="card-stacked">
      <div class="card-content">
              <form>
           
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
                  <button
                    class="btn-large blue darken-1 waves-effect waves-dark"
                    style={{ width: "100%" ,height:'20%'}}
                  >
                    Reset Password
                  </button>
                </div>
              </form>
        </div>
      </div>

  </div>
        </div>
      </div>
    </div>
      </div>
    )
}
