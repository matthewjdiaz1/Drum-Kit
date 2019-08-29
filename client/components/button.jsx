import React from 'react';

import Tone from 'tone';
import kickSoundFile from '../../public/assets/sounds/fateKick02.mp3';
import snareSoundFile from '../../public/assets/sounds/monsterSnareHard1.wav';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleButton: {},
      kick: null,
      snare: null,
      test: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);

    // let loadKick = new Audio(kickSoundFile);
    this.setState({ kick: kickSoundFile });
    this.setState({ snare: snareSoundFile });
    let testSample = new Tone.Player({
      "url": this.state.kick,
      "autostart": true,
    }).toMaster();
    this.setState({ test: testSample })
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleClick(note) {
    this.setState({ scaleButton: { "transform": "scale(1.1)", "borderColor": "gold" } });
    setTimeout(() => this.setState({ scaleButton: {} }), 100);

    // var sound = new Audio(require('../../public/assets/sounds/Fate_kick_02.mp3'));
    // sound.play();

    // var synth = new Tone.Synth().toMaster();
    // //play a middle 'C' for the duration of an 8th note
    // synth.triggerAttackRelease(note, '8n')
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case 65:
        if (this.props.keyPressed === "A") {
          this.handleClick("C4");
        }
        break;
      case 83:
        if (this.props.keyPressed === "S") {
          this.handleClick("Db4");

        }
        break;
      case 68:
        // kick
        if (this.props.keyPressed === "D") {
          this.handleClick("E4");
          let player = new Tone.Player({
            "url": this.state.kick,
            "autostart": true,
          }).toMaster();
        }
        break;
      case 70:
        if (this.props.keyPressed === "F") {
          this.handleClick("F4");
          console.log('test');
          this.state.test.start();
        }
        break;
      case 71:
        if (this.props.keyPressed === "G") {
          this.handleClick("G4");
        }
        break;
      case 72:
        if (this.props.keyPressed === "H") {
          this.handleClick("Ab4");
        }
        break;
      case 74:
        if (this.props.keyPressed === "J") {
          this.handleClick("B4");
          let player = new Tone.Player({
            "url": this.state.snare,
            "autostart": true,
          }).toMaster();
        }
        break;
      case 75:
        if (this.props.keyPressed === "K") {
          this.handleClick("C5");
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
        <button style={this.state.scaleButton} onClick={() => this.handleClick()}>
          <div style={{ "fontWeight": "bold", "fontSize": "20px" }}>{this.props.keyPressed}</div>
          <div style={{ "color": "gold", "textShadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black" }}>{this.props.sound}</div>
        </button>
      </div >
    )
  }
}

export default Button;
