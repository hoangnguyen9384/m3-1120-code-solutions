import React from 'react';
import Switch from 'react-switch';

export default class ToggleSwitch extends React.Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.clickToChange = this.clickToChange.bind(this);
  }

  clickToChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <h2>Toggle Switch</h2>
        <Switch className="react-switch"
          onChange={this.clickToChange}
          checked={this.state.checked}
        />
        <p className='on-off'>{this.state.checked ? 'ON' : 'OFF'}</p>
      </div>
    );
  }

}
