import React from 'react'

export default function test() {
    return (

        <section class="section section-login" style={{marginBottom:'100px'}}>
        <div class="container">
          <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
            
                <form action="" method="POST">
                 <div class="card-panel z-depth-5">
                  <h5 class="center">Register</h5>
                  <p class="center">Join to our community now !</p>
                   <div class="input-field">
                    <i class="material-icons prefix">account_circle</i>
                    <input type="text" name="username" id="username"/>
                    <label  htmlFor="username">Enter username</label>
                  </div>
                  
                   <div class="input-field">
                    <i class="material-icons prefix">email</i>
                    <input type="email" name="email" id="email" class="validate"/>
                    <label htmlFor="email">Enter email</label>
                  </div>
                  
                   <div class="input-field">
                    <i class="material-icons prefix">lock</i>
                    <input type="password" name="pass1" id="pass1"/>
                    <label htmlFor="pass1">Enter password</label>
                  </div>
                  
                    
                   <div class="input-field">
                    <i class="material-icons prefix">vpn_key</i>
                    <input type="password" name="pass2" id="pass2"/>
                    <label htmlFor="pass2">Confirm password</label>
                  </div>
                  <p class="right">Already have an account? <a href="#login" class="modal-trigger">login</a></p>
                  <input type="submit" name="submit" value="register" class="btn left col s12"/>
                
                  <div class="clearfix"></div>
               </div>
            </form>
        
            </div>
          </div>
        </div>
      </section>

   
    )
}
