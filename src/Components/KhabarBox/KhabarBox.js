import React from "react";
import './KhabarBox.css';

function KhabarBox (props) {
    return (
        <div className=' khabarBoxBase col-12 col-md-4 col-lg-3'>
            <img src={props.img} className=' khabarBoxImg img-fluid' />
            <div className='khabarBoxItem'>
                <h6 className='mb-4 text-center'>{props.title}</h6>
                <span className='descShadow'></span>
                <p className='khabarBoxText'>{props.text}</p>
            </div>
        </div>
    );
}

export default KhabarBox;