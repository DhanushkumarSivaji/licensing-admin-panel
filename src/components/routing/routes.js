import React from "react";
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
// import Register from "../auth/Register";
import ForgetPassword from "../auth/ForgetPassword";
// import UserDashboard from "../users/userDashboard";
import UserList from "../users/UsersList";
import Dashboard from "../users/Dashboard";
import UserDetail from "../users/UserDetail";
import test from '../auth/test'
import test1 from '../auth/test1'
import test2 from '../auth/test2'
import Form from '../Form/form'
import Hooks from '../hooksForm/HooksForm'


// import PrivateRoute from "./PrivateRoute";
import NotFound from '../errorPage';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registers" component={Register} />
          <Route exact path="/users" component={UserList} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/userdetail" component={UserDetail} />
          <Route exact path="/test" component={Hooks} />
          <Route exact path="/login" component={test1} />
          <Route exact path="/register" component={test2} />
          <Route exact path="/forgetpassword" component={ForgetPassword} />
          {/* <Route exact path="/register" component={Register} />
          
          <PrivateRoute exact path="/user" component={UserDashboard} />
          <PrivateRoute exact path="/userdetails" component={UserDetails} /> */}
          <Route exact path="*" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
