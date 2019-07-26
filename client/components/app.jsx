import React from 'react';
import Button from './button.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumkit: [
        "CLAP",
        "HIHAT",
        "KICK",
        "OPENHAT",
        "BOOM",
        "RIDE",
        "SNARE",
        "TOM",
        "TINK"
      ],
      keys: [
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L"
      ]
    }
    this.mapDrumSet = this.mapDrumSet.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress() {
    ///////////////////
    // TODO - send keypress this.state.keys[index] to button thru props?
  }

  mapDrumSet(sound, index) {
    return (
      <div key={index}>
        <Button sound={sound} keyboard={this.state.keys[index]} handleKeyPress={this.handleKeyPress()} />
      </div>
    )
  }

  render() {
    return (
      <div className="drumkit-container">
        {this.state.drumkit.map(this.mapDrumSet)}
      </div>
    )
  }
}

export default App;