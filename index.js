import React from 'react';
import HelloWorld from './hello_world.jsx';
import ReactDOM from 'react-dom';

// run the function when the webpage finishes loading
document.addEventListener("DOMContentLoaded", (event) => {
  ReactDOM.render(<HelloWorld />,
    document.getElementById("react-container"));
});
