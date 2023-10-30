import React from 'react';
import '../index.css';

export default function Inputs(props){
    return(
        <div className={props.myCss}>
          <h2>{props.titleText}</h2>
          <input type="range" step="1" min="20" max="60" onChange={(e)=>{props.handleRangeChange(e.target.value)}}></input>
        </div>
    )
}