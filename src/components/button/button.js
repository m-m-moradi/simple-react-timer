import React from "react";
import style from "./button.module.css";

export default function Button({ text, onClick }) {
    return (
        <button className={(style["button-pushable"])} onClick={onClick}>
            <span className={style["button-shadow"]}></span>
            <span className={style["button-edge"]}></span>
            <span className={style["button-front"]}>{text}</span>
        </button>
    );
}
