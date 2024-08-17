import React, { useState } from "react";
import './incre.css'
function Incre() {
    const [Counter, setCounter] = useState(0);
    const IncrementDecrement = (isIncrement) => {
        setCounter((Counter) => {
            return (isIncrement ? Counter + 1 : Counter - 1);
        });
    }
    return <>
        <div className="Card">
            <div className="container">
                <p>the Counter is {Counter}</p><br />
                <button className="Button" onClick={() => IncrementDecrement(true)}>+</button>
                <br />
                <button className="Button" onClick={() => IncrementDecrement(false)}>-</button>
            </div>
        </div>
    </>
}
export default Incre;