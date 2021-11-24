import React from "react";
import '../SquaresGrid/SquaresGrid.styles.css';

export const SquaresGrid = props => (

    <div id="squaregrid">
      <div style={{background: props.colorsprop[0]}} className="square"></div>
      <div style={{background: props.colorsprop[1]}} className="square"></div>
      <div style={{background: props.colorsprop[2]}} className="square"></div>
    </div>

);