import React, {useState} from "react";
import Disc from "./Disc";
import Tower from "./Tower";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function TowersOfHanio(){
    const [discs, setDiscs] = useState([
        { id: 1, size: 100 },
        { id: 2, size: 75 },
        { id: 3, size: 50 },
    ]);
    const [tower1, setTower1] = useState([
        { id: 1, size: 100 },
        { id: 2, size: 75 },
        { id: 3, size: 50 },
    ]);
    const [tower2, setTower2] = useState([]);
    const [tower3, setTower3] = useState([]);


    const checkWin = () =>{
        alert("WORKS")
    }

    return(
        <div className="center">
            <h1>Welcome to Towers of Hanoi</h1>
            <div className="game">
                <Tower discs={tower1}></Tower>
                <Tower discs={tower2}></Tower>
                <Tower discs={tower3}></Tower>
            </div>
        </div>
    )
}
export default TowersOfHanio