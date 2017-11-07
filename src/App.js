import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div>
          <RaisedButton label="Primary" primary={true} />
      </div>
    );
  }
}

export default App;
