import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function UserDetail() {
  return (
    <div>
      <Navbar />
      <section class="section section-details grey lighten-4">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <div class="card">
                <div class="card-content">
                  <div class="row">
                    <div class="col s12 m6">
                      <span class="card-title">Profile Details</span>
                    </div>
                    <div class="col s12 m6 center">
                      <img
                        src="img/person1.jpg"
                        alt=""
                        class="responsive-img circle"
                        style={{ width: "90px", marginLeft: "10px" }}
                      />
                    </div>
                  </div>

                  <form>
                    <div class="input-field">
                      <input type="text" id="name" value="Dhanush" />
                      <label for="name">Name</label>
                    </div>
                    <div class="input-field">
                      <input
                        type="email"
                        id="email"
                        value="dhanushkumar.s@icloud.com"
                      />
                      <label for="email">Email</label>
                    </div>
                    <div class="input-field">
                      <input type="text" id="role" value="Admin" />
                      <label for="role">Role</label>
                    </div>
                    <div class="input-field">
                      <select>
                        <option value="" disabled>
                          Select option
                        </option>
                        <option value="1" selected>
                          Web Development
                        </option>
                        <option value="2">Graphic Design</option>
                        <option value="3">Tech Gadgets</option>
                        <option value="4">Other</option>
                      </select>
                      <label>Category</label>
                    </div>
                  </form>
                </div>
                <div class="card-action">
                  <button class="btn blue">Save</button>
                  <button class="btn red">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
