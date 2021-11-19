import React from "react";
import './SlickImage.css';

function SlickImage (props) {
    return (
        <div>
          <img id='imageSlick' src={props.image} />
        </div>
    );
};

export default SlickImage;