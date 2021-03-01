import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // Equivalent to defining a construtor and defining state inside constructor.
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define a render method
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    else {
      return <Spinner  />
    }
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));