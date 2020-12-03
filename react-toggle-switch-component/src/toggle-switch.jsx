import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: true };
    this.clickToChange = this.clickToChange.bind(this);
  }

  clickToChange() {
    this.setState(state => ({ isClicked: false }));
  }

  render() {
    return (
      <div>
        <h2>Toggle Switch</h2>
        <label className ={'switch'}>
          <input type={'checkbox'} checked={this.state.isClicked}
            onChange={this.clickToChange}/>
          <span className={'slider rounded'}/>
        </label>
        <p>{this.state.isClicked ? 'ON' : 'OFF'}</p>
      </div>
    );
  }

}
