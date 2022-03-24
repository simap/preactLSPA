import { h } from "preact";

import "./foo.css";
import test from "/images/test.jpg"

export default function() {
    console.log("app render");
    return <div>
        <h1>stuff</h1>
        <img src={test} />
    </div>
}