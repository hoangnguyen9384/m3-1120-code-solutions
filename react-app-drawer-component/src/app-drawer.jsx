import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className="container-menu">
          <ul>
            <h2>Menu</h2>
            <li>About</li>
            <li>Get started</li>
            <li>Sign In</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className= "container-menu-icon" onClick={this.handleClick}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </div>

      );
    }
  }
}
