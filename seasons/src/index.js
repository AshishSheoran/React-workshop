import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS is the ONLY TIME we do direct assignment to "this.state"
    this.state = {
      lat: null,
      errorMessage: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // To update lat object, We called "setState"
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  // React says we have to define a render method
  render() {
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage} </div>
      } 
      else if (!this.state.errorMessage && this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>
      }
      else {
        return <div>Loading!</div>
      }
  }
};

ReactDOM.render(<App />, document.querySelector('#root'));