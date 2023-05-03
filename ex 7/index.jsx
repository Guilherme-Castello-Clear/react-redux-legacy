import React from "react";
import ReactDOM from "react-dom";
import Family from "./Family";
import Member from "./Member";

ReactDOM.render(
    <Family lastName='Castello'>
        <Member name="Guilherme"></Member>
        <Member name="Lucia"></Member>
        <Member name="Rosa"></Member>

        
    </Family>
, document.getElementById('app'))