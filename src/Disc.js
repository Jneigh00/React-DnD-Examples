import React, {useRef} from 'react';
import { useDrag } from 'react-dnd';


function Disc({ id, size,}){

    return(
        <div
            className="disc"
            style={{ width: size * 5}}
        ></div>
    )
}

export default Disc