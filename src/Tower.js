import React, {useEffect, useState} from 'react';
import {useDrop} from 'react-dnd';
import Disc from "./Disc";

function Tower({discs, index, moveDisc}) {


    return (
        <div className="tower">
            <div className="peg"></div>
            {discs.sort((a, b) => a.size - b.size).map((disc) => (
                <Disc key={disc.id} size={disc.size} />
            ))}
        </div>
    );
}

export default Tower;