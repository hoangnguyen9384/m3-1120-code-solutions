import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isClicked: true }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Thanks!' : 'Click Me!'}
      </button>
    );
  }

}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);

// testing "button at step 9":
// class CustomButton extends React.Component{
//   render(){
//     return <button>{this.props.text}</button>;
//   }
// }

// const elements =(
//   <div>
//     <CustomButton text="Click Me!" />
//   </div>
// );

// ReactDOM.render(
//   elements,
//   document.getElementById('root')
// );
