import React from 'react';
import './App.css';

function NumberTIle(props){
    let {tileNum} = props
    let cssStyle = "Cell"

    if (tileNum === ""){
        cssStyle += ' empty'
    }

    return (
        <div className={cssStyle}>
            {tileNum}
        </div>
    );
}
export default NumberTIle