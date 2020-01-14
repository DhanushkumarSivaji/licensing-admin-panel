import React,{useState} from 'react'
import Charts from './charts'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import FloatingActionButton from '../layout/FloatingActionButton'

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            
    <div >
    <FloatingActionButton/>
    <section className="section section-stats center">
    <div className="row">
      <div className="col s12 m6 l3">
        <div className="card-panel blue lighten-1 white-text center">
          <i className="material-icons medium">insert_emoticon</i>
          <h5>Monthly Visitors</h5>
          <h3 className="count">28300</h3>
          <div className="progress grey lighten-1">
            <div className="determinate white" style={{width:'40%'}}></div>
          </div>
        </div>
      </div>
      <div className="col s12 m6 l3">
        <div className="card-panel center">
          <i className="material-icons medium">mode_edit</i>
          <h5>Blog Posts</h5>
          <h3 className="count">105</h3>
          <div className="progress grey lighten-1">
            <div className="determinate blue lighten-1" style={{width:'20%'}}></div>
          </div>
        </div>
      </div>
      <div className="col s12 m6 l3">
        <div className="card-panel blue lighten-1 white-text center">
          <i className="material-icons medium">mode_comment</i>
          <h5>Comments</h5>
          <h3 className="count">1200</h3>
          <div className="progress grey lighten-1">
            <div className="determinate white" style={{width:'40%'}}></div>
          </div>
        </div>
      </div>
      <div className="col s12 m6 l3">
        <div className="card-panel center">
          <i className="material-icons medium">supervisor_account</i>
          <h5>Users</h5>
          <h3 className="count">350</h3>
          <div className="progress grey lighten-1">
            <div className="determinate blue lighten-1" style={{width:'10%'}}></div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
  <section className="section section-visitors blue lighten-4">
    <div className="row">
      <div className="col s12 m6 l8">
        <div className="card-panel">
          <div id="chartContainer" >
              <Charts/>
          </div>
        </div>
      </div>
      <div className="col s12 m6 l4">
    
        <ul className="collection with-header latest-comments">
          <li className="collection-header">
            <h5>Latest Comments</h5>
          </li>
          <li className="collection-item avatar">
            <img src="img/person1.jpg" alt="" className="circle"/>
            <span className="title">John Doe</span>
            <p className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae
              explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore.</p>
            <a href="" className="approve green-text">Approve</a> |
            <a href="" className="deny red-text">Deny</a>
          </li>
          <li className="collection-item avatar">
            <img src="img/person2.jpg" alt="" className="circle"/>
            <span className="title">Steve Smith</span>
            <p className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae
              explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore.</p>
            <a href="" className="approve green-text">Approve</a> |
            <a href="" className="deny red-text">Deny</a>
          </li>
          <li className="collection-item avatar">
            <img src="img/person3.jpg" alt="" className="circle"/>
            <span className="title">Ellen Williams</span>
            <p className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima dolor error laboriosam autem ad beatae
              explicabo pariatur maxime fuga sed quod quo voluptas, adipisci illum aspernatur est, fugit tempore.</p>
            <a href="" className="approve green-text">Approve</a> |
            <a href="" className="deny red-text">Deny</a>
          </li>
        </ul>
      </div>
    </div>
  </section>


  <section className="section section-recent">
    <div className="row">
      <div className="col s12 l8 m6">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Recent Posts</span>
            <table className="striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Post One</td>
                  <td>Web Development</td>
                  <td>
                    <a href="details.html" className="btn blue lighten-2">Details</a>
                  </td>
                </tr>
                <tr>
                  <td>Post Two</td>
                  <td>Graphic Design</td>
                  <td>
                    <a href="details.html" className="btn blue lighten-2">Details</a>
                  </td>
                </tr>
                <tr>
                  <td>Post Three</td>
                  <td>Web Development</td>
                  <td>
                    <a href="details.html" className="btn blue lighten-2">Details</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Quick Todos</span>
            <form id="todo-form">
              <div className="input-field">
                <input id="todo" type="text" placeholder="Add Todo..."/>
              </div>
            </form>
            <ul className="collection todos">
              <li className="collection-item">
                <div>Todo One
                  <a href="#!" className="secondary-content delete">
                    <i className="material-icons">close</i>
                  </a>
                </div>
              </li>
              <li className="collection-item">
                <div>Todo Two
                  <a href="#!" className="secondary-content delete">
                    <i className="material-icons">close</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
        </div>
        <Footer/>  
        </div>
    )
}

export default Dashboard;