import React, { Component } from "react";
import users from "./data";
import "./style.css";
import OneRow from "./one-row";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users,
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Table with fixed header, fixed first and last columns</h2>
        <div className="wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Website</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <OneRow key={item.id} data={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;
