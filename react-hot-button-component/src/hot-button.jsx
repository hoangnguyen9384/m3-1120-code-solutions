import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: 0 };
    this.clickToChange = this.clickToChange.bind(this);
  }

  clickToChange() {
    this.setState(state => ({ clicked: this.state.clicked + 1 }));
  }

  render() {
    const numberOfClicks = this.state.clicked;
    let button;
    if (numberOfClicks <= 3) {
      button = 'purple';
    } else if (numberOfClicks > 3 && numberOfClicks <= 6) {
      button = 'lightPurple';
    } else if (numberOfClicks > 6 && numberOfClicks <= 9) {
      button = 'red';
    } else if (numberOfClicks > 9 && numberOfClicks <= 12) {
      button = 'orange';
    } else if (numberOfClicks > 12 && numberOfClicks <= 15) {
      button = 'yellow';
    } else if (numberOfClicks > 15 && numberOfClicks <= 18) {
      button = 'white';
    } else {
      button = 'white';
    }
    return (
      <div>
        <button className={button} onClick={this.clickToChange}>Hot Button</button>
      </div>
    );
  }
}
