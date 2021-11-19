import React from "react";
import './BoxTitle.css';

function BoxTitle(props) {
  return (
    <div id='baseTitle' className=" w-100 text-center">
        <h4 id='mainTitle'>{props.title}</h4>
    </div>
  );
}

export default BoxTitle;
