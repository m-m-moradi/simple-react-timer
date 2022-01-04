import { React, useState } from "react";
import Button from "../button/button.js";
import style from "./frame.module.css";

export default function Frame() {
    const [count, setCount] = useState(0);
    const [direction, setDirection] = useState(true);
    const [counter, setCounter] = useState(null);


    const deleteCounter = () => {
        console.log("removing counter");
        if (counter) {
            clearInterval(counter);
            setCounter(null);
        }
    }

    const createUpwardCounter = () => {
        if (counter) deleteCounter()
        setDirection(true)
        console.log("create Upward counter");
        const newCounter = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        setCounter(newCounter);
    }

    const createDownwardCounter = () => {
        if (counter) deleteCounter()
        setDirection(false)
        console.log("create Downward counter");
        const newCounter = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        setCounter(newCounter);
    }


    const pause = () => {
        console.log("pause")
        deleteCounter()
    };

    const start = () => {
        console.log("start");
        createUpwardCounter()
    };

    const reset = () => {
        console.log("reset");
        setCount(0);
        pause()
    };


    return (
        <div className={style.frame}> 
            <div className={style.count}>Count: {count}</div>
            <div style={{"display": "flex", "justify-content": "center"}}>
                <div className={style["button-spacer"]}><Button text="Reset" onClick={reset}/></div>
                {counter ?
                    <div className={style["button-spacer"]}><Button text="Pause" onClick={pause}/></div>:
                    <div className={style["button-spacer"]}><Button text="Start" onClick={start}/></div>
                }
                {direction ?
                    <div className={style["button-spacer"]}><Button text="Down Counting" onClick={createDownwardCounter}/></div>:
                    <div className={style["button-spacer"]}><Button text="Up Counting" onClick={createUpwardCounter}/></div>
                }
            </div>
        </div>
    );
}
