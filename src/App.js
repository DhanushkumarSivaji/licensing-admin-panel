import React,{useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Login from './components/auth/Login'
import Routes from "./components/routing/routes";
const App = () => {

  useEffect(() => {
    // Init Materialize JS
    
  });
  return (
    <div className="App">
    <Routes/>
    </div>
  );
}

export default App;
