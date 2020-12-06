import React from 'react';

export default class Validatedinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.prventDeault();
  }

  render() {
    const inputPassword = this.state.password;
    if (inputPassword.length === 0) {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Password</h2>
          <label>
            <input type="password" value={this.state.value} onChange={this.handleChange}></input>
            <i className="x-mark">&#10006;</i>
          </label>
          <p className="text-color">A password is required</p>
        </form>
      );
    } else if (inputPassword.length < 8) {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Password</h2>
          <label>
            <input type="password" value={this.state.value} onChange={this.handleChange}></input>
            <i className="x-mark">&#10006;</i>
          </label>
          <p className="text-color">A password is too short</p>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <h2>Password</h2>
          <label>
            <input type="password" value={this.state.value} onChange={this.handleChange}></input>
            <i className="check-mark">&#10006;</i>
          </label>
        </form>
      );
    }
  }
}
