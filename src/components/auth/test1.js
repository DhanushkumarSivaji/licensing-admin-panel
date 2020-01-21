import React from 'react'

export default function test() {
    return (

        
     
          <div class="row">
            <div class="col s12 m6 offset-m3 l6 offset-l3">
            
               <div className="card">
                   <div className="card-action teal lighten-1 white-text">
                       <h3>Login form</h3>
                   </div>
                   <div className="card-content">

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
                  
                    
                  <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
                  <input type="submit" name="submit" value="register" class="btn left col s12"/>
                
                  <div class="clearfix"></div>
               

                   </div>
               </div>
        
            </div>
          </div>

 

   
    )
}
