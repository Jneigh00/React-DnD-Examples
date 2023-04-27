import React, {useState} from "react";
import NumberTIle from "./NumberTIle";

 function Number (){

     const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, ""])

    return(
        <div className="NumberPuzzle">
            {numbers.map((number, index) => (
                    <NumberTIle key = {index} tileNum = {number} ></NumberTIle>
                ))
            }
        </div>
    )
}

export default Number