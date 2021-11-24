import React from "react";
import '../MyStats/MyStats.styles.css';

export const MyStats = props => (

  <div id="resultgrid">
    <div>Your money: {props.walletprop} $</div>
    <div>{props.lastgamescoreprop}</div>
    You played {props.statsprop[0]} times, 
    you won {props.statsprop[1]} times 
    and lost {props.statsprop[2]} times
  </div>

);