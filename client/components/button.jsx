import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classStyle: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  // componentDidMount() {
  //   document.addEventListener("keydown", this.handleKeyDown, false);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener("keydown", this.handleKeyDown, false);
  // }

  handleClick() {
    console.log('shit been handled');
    this.setState({ classStyle: "button-pressed" });
    setTimeout(() => this.setState({ classStyle: "" }), 70);
    console.log(this.state.classStyle);
  }

  handleKeyDown(event) {
    // if (event.keyCode === 65) {
    //   console.log('im in');
    // }
    switch (event.keyCode) {
      case 65:
        if (this.props.keyboard === "A") {
          console.log('a');
          this.handleClick();
        }
        break;
      default:
        console.log('default');
    }
  }

  render() {
    return (
      <div onKeyDown={() => this.handleKeyDown(event)}>
        <button className={this.state.classStyle} onClick={() => this.handleClick()}>
          <div style={{ "fontWeight": "bold", "fontSize": "20px" }}>{this.props.keyboard}</div>
          <div style={{ "color": "gold", "textShadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>{this.props.sound}</div>
        </button>
      </div>
    )
  }
}

export default Button;
