import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

      <App/>
      {/* <div id="squaregrid">
        <div class="square" id="square1"></div>
        <div class="square" id="square2"></div>
        <div class="square" id="square3"></div>
      </div> */}

      {/* <div id="inputgrid">
        <input type="number" placeholder="enter bid..." id="bid"/>
        <button id="gamestart">PLAY!</button>
      </div>

      <div>Your money: <span class="wallet">X</span> $</div>

      <div id="resultgrid"> 
        <span class="result"></span>
        You played 
        <span class="number"> 0 </span> times, you won
        <span class="win"> 0 </span> times and lost
        <span class="loss"> 0 </span> times
      </div> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
