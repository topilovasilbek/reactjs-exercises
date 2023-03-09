import React, { Component } from "react";

class OneRow extends Component {
  constructor(props) {
    super();
    this.state = {
      editable: false,
      data: props.data,
      extraData: props.data,
    };
  }

  render() {
    const handleChange = ({ target: { name, value } }) => {
      this.setState({
        extraData: { ...this.state.extraData, [name]: value },
      });
    };

    const handleSave = () => {
      this.setState({ data: this.state.extraData, editable: false });
    };

    const handleCancel = () => {
      this.setState({
        extraData: this.state.data,
        editable: false,
      });
    };

    const {
      extraData: { id, name, username, email, website },
    } = this.state;
    const { editable } = this.state;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            readOnly={!editable}
          />
        </td>
        <td>
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            readOnly={!editable}
          />
        </td>
        <td>
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
            readOnly={!editable}
          />
        </td>
        <td>
          <input
            type="text"
            value={website}
            name="website"
            onChange={handleChange}
            readOnly={!editable}
          />
        </td>
        <td>
          {editable ? (
            <>
              <button type="button" onClick={handleSave}>
                Save
              </button>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => this.setState({ editable: true })}
            >
              Edit
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default OneRow;
