import React from 'react';


function Disc({discs, move, setTower, checkWin}){

    return(
        <div className= "tower" style={{display: "inline"}}>
            <div className="peg"></div>
            {discs
                .sort((a, b) => a.size - b.size)
                .map((disc) =>(
                <div
                    key = {disc.id}
                    id  = {disc.id}
                    className="disc"
                    style={{width: disc.size * 5, bottom: disc.size}}
                ></div>
            ))}
        </div>
    )
}

export default Disc