import React from 'react';
import Tree_left from "../images/tree-left.png";
import Tree_right from "../images/tree-right.png";
import Gate_right from "../images/gate-right.png";
import Gate_left from "../images/gate-left.png";
import Grass from "../images/grass.png";
import "../style/header.css";


const Header = () => {

    function f() {
        let value = window.scrollY;
        let text = document.getElementsByClassName("text")[0];
        let treeLeft  = document.getElementsByClassName("tree-left")[0];
        let treeRight = document.getElementsByClassName("tree-right")[0];
        let gateLeft = document.getElementsByClassName("gate-left")[0];
        let gateRight = document.getElementsByClassName("gate-right")[0];

        text.style.marginTop = value * 2.5 + "px";
        treeLeft.style.left = value * -1.5 + "px";
        treeRight.style.left = value * 1.5 + "px";
        gateLeft.style.left = value * .5 + "px";
        gateRight.style.left = value * -.5 + "px";
    }
    window.addEventListener("scroll",f)

    return (
        <div className="parallax">
            <h2 className="text"> Parallax Scroll </h2>
            <img src={Tree_left} alt="tree-left" className="tree-left"/>
            <img src={Tree_right} alt="tree-right" className="tree-right"/>
            <img src={Gate_left} alt="gate-left" className="gate-left"/>
            <img src={Gate_right} alt="gate-right" className="gate-right"/>
            <img src={Grass} alt="grass" className="grass"/>
        </div>
    );
};

export default Header;