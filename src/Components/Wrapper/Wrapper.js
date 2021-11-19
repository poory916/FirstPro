import React from "react";
import './Wrapper.css'

function Wrapper(props) {
  return (
    <div id="wrapperbBase">
      <div id="wrapperCon">
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;
