import React from "react";


function sConComponent(props) {
  return (
    <div>
      <div className='py-3'>
        <img src={props.img} />
      </div>
      <div className="my-3">
        <h6>{props.title}</h6>
      </div>
      <div className="p-4">
        <p className="card-text">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default sConComponent;
