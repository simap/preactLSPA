import { h } from "preact";
import { useState, useEffect } from 'react'

import "./App.css";
import test from "/images/test.jpg"

export default function() {
    console.log("app render");

    let [time, setTime] = useState((new Date()).toLocaleTimeString())

    useEffect(() => {
        var t = setInterval(() => setTime((new Date()).toLocaleTimeString()), 200)
        return () => {
            clearInterval(t);
        }
    })

    return <div>
        <h1 class="App">App Time: {time}</h1>
        <img src={test} />
    </div>
}