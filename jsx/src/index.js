// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = { text: 'Click Me' };
    const labelText = 'Enter Name: ';
    return (
        <div>
            <label className="label" forName="name"> {labelText} </label>

            <input id="name" type="text" />

            <button style={{ backgroundColor: 'lightblue', color: 'white', border: 'none', cursor: 'pointer' }}> {buttonText.text} </button>
        </div>
    );
}

// Take the react component and show it on screen
ReactDOM.render(
    <App />,                                    // Take this react component
    document.querySelector('#root')             // and show this component on HTML page's (#root) id.
);