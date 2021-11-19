import React from "react";

function LevelsCard (props) {
    return (
        <div>
            <div className='top-title'>
              <h4 className='my-4'>{props.title}</h4>
            </div>
            <div>
              <p className='title-text my-4 '>
                {props.text}
              </p>
            </div>
            <div>
              <img src={props.img} className='my-4' />
            </div>
            <div>
              <ul id='LevelsUL'>
                <li id='needBefor' className='my-3'>{props.firstList}</li>
                <li id='needBefor' className='my-3'>{props.secondList}</li>
                <li id='needBefor' className='my-3'>{props.thirdList}</li>
              </ul>
            </div>
          </div>
    );
}

export default LevelsCard;