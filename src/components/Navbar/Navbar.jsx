import React, { useEffect, useState } from "react";
import "./Navbar.css";
import hamburger from "../../assets/bars-solid.svg"
import close from "../../assets/times-solid.svg"

export default function Navbar(props) {
    const [isOpen, setOpen] = useState(false);

    let dropdown;

    let content = [];
    for (let i = 0; i < props.links.length; i++) {
        content.push(<li><a href='#'> {props.links[i]} </a></li>);
    }
    dropdown = (
            <div className={isOpen ? "navbar" : "navbar closed"}>
                <ul>
                    {content}
                </ul>
            </div>
    );

    return (
        <div className="navbar">
            <div>
                <a onClick={() => setOpen(isOpen ? false : true)}>
                    <img
                        src={isOpen ? close : hamburger}
                        alt="menu button"
                        height="50px"
                        width="50px"   />
                </a>
            </div>
            {dropdown}
        </div>
    );
}
