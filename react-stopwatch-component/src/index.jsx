import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondElapsed: 0, secondsAtPaused: null };
    this.myInterval = null;
    this.clickToStart = this.clickToStart.bind(this);
    this.clickToPause = this.clickToPause.bind(this);
    this.clickToReset = this.clickToReset.bind(this);
  }

  clickToStart() {
    this.myInterval = setInterval(() => {
      this.setState({ secondElapsed: this.state.secondElapsed + 1 });
    }, 1000);
  }

  clickToPause() {
    clearInterval(this.myInterval);
    this.setState({ secondsAtPaused: this.myInterval });
  }

  clickToReset() {
    clearInterval(this.myInterval);
    this.setState({ secondElapsed: 0 });
  }

  render() {
    return (
      <div>
        <div className="circle" onClick={this.clickToReset}>
          <h1 className="seconds">{this.state.secondElapsed}</h1>
        </div>
        <div className="play-pause-button">
          {this.state.secondElapsed === 0 || this.myInterval === this.state.secondsAtPaused
            ? <button onClick={this.clickToStart}>
              <i className="fa fa-play"></i>
            </button>
            : <button onClick={this.clickToPause}>
              <i className="fa fa-pause"></i>
            </button>}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
