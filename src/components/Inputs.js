import React from 'react';
import '../index.css';

export default function Inputs(props){
    return(
        <div className={props.myCss}>
          <h2>{props.titleText}</h2>
          <input type="text" placeholder="You can drag me" onChange={(e)=>{props.handleInputChange(e.target.value)}}></input>
        </div>
    )
}