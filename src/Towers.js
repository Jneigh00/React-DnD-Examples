import React, {useState} from "react";
import Disc from "./Disc";

function Towers(){
    const [discs, setDiscs] = useState([
        { id: 1, size: 100 },
        { id: 2, size: 75 },
        { id: 3, size: 50 },
    ]);
    const [tower1, setTower1] = useState([
        { id: 1, size: 100 },
        { id: 2, size: 75 },
        { id: 50, size: 50 },
    ]);
    const [tower2, setTower2] = useState([]);
    const [tower3, setTower3] = useState([]);


    return(
        <div className="center">
            <h1>Welcome to Towers of Hanoi</h1>
            <div className="game">
                <Disc discs={tower1} move={null} setTower={null} checkWin={null} ></Disc>
                <Disc discs={tower2} move={null} setTower={null} checkWin={null} ></Disc>
                <Disc discs={tower3} move={null} setTower={null} checkWin={null} ></Disc>
            </div>
        </div>
    )
}
export default Towers