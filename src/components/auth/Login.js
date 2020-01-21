import React, { useState,useEffect } from "react";
import { connect } from 'react-redux';
import Footer from '../layout/Footer'
import {loginUserRequest, loginUserSucess} from '../../actions/auth';
const Login = ({loginUserRequest}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {


    // eslint-disable-next-line
  }, []);

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill in all fields', 'danger');
    } else {

      loginUserRequest({
        email,
        password,
      });

      setUser({ ...user, email: '', password: '' });
    }
  };
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

      <section class="section section-login" style={{marginBottom:'100px'}}>
        <div class="container">
          <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3">
              <div class="card-panel login blue darken-1 white-text center">
                <h2>Admin Login</h2>
                <form action="index.html" onSubmit={onSubmit}>
                  <div class="input-field">
                    <i class="material-icons prefix">email</i>
                    <input type="email" id="email" name="email" value={email} onChange={onChange} />
                    <label class="white-text" for="email">
                      Email
                    </label>
                  </div>
                  <div class="input-field">
                    <i class="material-icons prefix">lock</i>
                    <input type="password" id="password" name="password" value={password} onChange={onChange}/>
                    <label class="white-text" for="password">
                      Password
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    style={{width:'80%'}}
                    class="btn btn-large btn-extended grey lighten-4 black-text"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
      <Footer />
      </div>

    </div>
  );
};

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.login.isAuthenticated,
//   error: state.login.error,
// }); 

export default connect(null, { loginUserRequest })(Login);
