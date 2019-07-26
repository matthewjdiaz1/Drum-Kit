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

  //////////////////////////
  // TODO - instead of sending thru props, perhaps component mounting would 
  // listen always and would be able to activate the handle slick with a 
  // switch statement
  ///////////////////////////

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleClick() {
    this.setState({ classStyle: "button-pressed" });
    setTimeout(() => this.setState({ classStyle: "" }), 70);
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case 65:
        if (this.props.keyPressed === "A") {
          this.handleClick();
        }
        break;
      case 83:
        if (this.props.keyPressed === "S") {
          this.handleClick();
        }
        break;
      case 68:
        if (this.props.keyPressed === "D") {
          this.handleClick();
        }
        break;
      case 70:
        if (this.props.keyPressed === "F") {
          this.handleClick();
        }
        break;
      case 71:
        if (this.props.keyPressed === "G") {
          this.handleClick();
        }
        break;
      case 72:
        if (this.props.keyPressed === "H") {
          this.handleClick();
        }
        break;
      case 74:
        if (this.props.keyPressed === "J") {
          this.handleClick();
        }
        break;
      case 75:
        if (this.props.keyPressed === "K") {
          this.handleClick();
        }
        break;
      case 76:
        if (this.props.keyPressed === "L") {
          this.handleClick();
        }
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div onKeyDown={() => this.handleKeyDown(event)}>
        <button className={this.state.classStyle} onClick={() => this.handleClick()}>
          <div style={{ "fontWeight": "bold", "fontSize": "20px" }}>{this.props.keyPressed}</div>
          <div style={{ "color": "gold", "textShadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>{this.props.sound}</div>
        </button>
      </div>
    )
  }
}

export default Button;
