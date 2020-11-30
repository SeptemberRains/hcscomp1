import React, {useState} from "react";
import "./Project.css";

export default function Project(props) {
    const [isOpen, setOpen] = useState(false);

    let dropdown;

    let content = [];
    for (let i = 0; i < props.list.length; i++) {
        content.push(<h3> {props.list[i]} </h3>);
    }

    dropdown = (
            <div className={isOpen ? "dropdown" : "dropdown closed"}>
                <ul>
                    {content}
                </ul>
            </div>
    );


    return (
        <div className="projects">
            <div>
                <a onClick={() => setOpen(isOpen ? false : true)}>
                    <h1>{isOpen ? "Close Projects" : "See Projects"}</h1>
                </a>
            </div>
            {dropdown}
        </div>
    );
}
