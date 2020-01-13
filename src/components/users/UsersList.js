import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const UserDetail = () => {
  return (
    <div>
      <Navbar/>
        <section className="section section-users grey lighten-4">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Users</span>
              <table className="striped">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Registered</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="70">
                      <img src="img/person1.jpg" alt="" className="responsive-img circle" style={Imgstyle}/>
                    </td>
                    <td>John Doe</td>
                    <td>jdoe@gmail.com</td>
                    <td>Jan, 1 2018</td>
                    <td>
                      <a href="details.html" className="btn blue lighten-2">Details</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="70">
                      <img src="img/person2.jpg" alt="" className="responsive-img circle" style={Imgstyle}/>
                    </td>
                    <td>Larry Watters</td>
                    <td>lwatters@gmail.com</td>
                    <td>Jan, 3 2018</td>
                    <td>
                      <a href="details.html" className="btn blue lighten-2">Details</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="70">
                      <img src="img/person3.jpg" alt="" className="responsive-img circle" style={Imgstyle}/>
                    </td>
                    <td>Susan Williams</td>
                    <td>susan@gmail.com</td>
                    <td>Jan, 5 2018</td>
                    <td>
                      <a href="details.html" className="btn blue lighten-2">Details</a>
                    </td>
                  </tr>
                  <tr>
                    <td width="70">
                      <img src="img/person4.jpg" alt="" className="responsive-img circle" style={Imgstyle}/>
                    </td>
                    <td>Jeff Burke</td>
                    <td>jburke@gmail.com</td>
                    <td>Jan, 10 2018</td>
                    <td>
                      <a href="details.html" className="btn blue lighten-2">Details</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-action">
              <ul className="pagination">
                <li className="disabled">
                  <a href="#!" className="blue-text">
                    <i className="material-icons">chevron_left</i>
                  </a>
                </li>
                <li className="active blue lighten-2">
                  <a href="#!" className="white-text">1</a>
                </li>
                <li className="waves-effect">
                  <a href="#!" className="blue-text">2</a>
                </li>
                <li className="waves-effect">
                  <a href="#!" className="blue-text">3</a>
                </li>
                <li className="waves-effect">
                  <a href="#!" className="blue-text">4</a>
                </li>
                <li className="waves-effect">
                  <a href="#!" className="blue-text">5</a>
                </li>
                <li className="waves-effect">
                  <a href="#!" className="blue-text">
                    <i className="material-icons">chevron_right</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<Footer/>
    </div>
  )
}


const Imgstyle = {
  width:'40px',
  marginLeft:"10px"
};

export default UserDetail;