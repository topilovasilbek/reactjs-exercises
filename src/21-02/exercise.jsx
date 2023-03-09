import React, { Component } from "react";
import "./style.css";

class Exercise extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
    };
  }

  render() {
    const handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const { name, surname } = this.state;
    return (
      <div>
        <h2>
          Birinchi input value'si {name.trim().length ? "-" : null} {name}
        </h2>
        <h2>
          Ikkinchi input value'si {surname.trim().length ? "-" : null} {surname}
        </h2>
        <input
          onChange={handleChange}
          name="name"
          placeholder="Name"
          type="text"
          value={name}
        />
        <input
          onChange={handleChange}
          name="surname"
          placeholder="Surname"
          type="text"
          value={surname}
        />
      </div>
    );
  }
}

export default Exercise;
