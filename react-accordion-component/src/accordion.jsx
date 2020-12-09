import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ showContent: !this.state.showContent });
  }

  render() {
    return (
      <div>
        <div className="title" onClick={this.handleToggle}>{this.props.title}</div>
        {this.state.showContent ? (
          <div className="content">
            {this.props.children}
          </div>
        ) : null}
      </div>
    );
  }
}

export default class Accordion extends React.Component {
  render() {
    return (
      <div>
        <App title="Hypertext Markup Language">
          <div className="content">
            <p>Hypertext Markup Language (HTML) is the standard Markup
            language for creating web pages and web applications. With Cascading Style Sheets (CSS) and Javascript, it forms a triad of cornerstone technologies for the World Wide Web.</p>
          </div>
        </App>
        <App title="Cascading Style Sheets">
          <div className="content">
            <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and Javascript.</p>
          </div>
        </App>
        <App title="Javascript">
          <div className="content">
            <p>avascript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
          </div>
        </App>
      </div>
    );
  }
}
