import React from "react";
import '../PlayInput/PlayInput.styles.css';

export const PlayInput = props => (

      <div id="inputgrid">
        
        <input 
          type="number" 
          placeholder="enter bid..." 
          id="bid" 
          onChange={ props.inputprop }
        />

        <button 
          id="gamestart" 
          onClick={props.buttonprop}
        >PLAY!</button>
        
      </div>

)