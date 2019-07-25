import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('shit been handled');

  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          <div style={{ "fontWeight": "bold", "fontSize": "20px" }}>{this.props.keyboard}</div>
          <div style={{ "color": "gold", "textShadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>{this.props.sound}</div>
        </button>
      </div>
    )
  }
}

export default Button;
