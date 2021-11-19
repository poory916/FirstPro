import React from "react";
import './KhadamatBox.css';

function KhadamatBox(props) {
  return (
    <div id='khadamatBoxBase' className="col-12 col-md-5 col-lg-3">
      <h6 className='text-center mb-4'>{props.title}</h6>
      <p id='khadamatBoxText' className='w-75 m-auto'>{props.text}</p>
    </div>
  );
}

export default KhadamatBox;