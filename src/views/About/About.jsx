import React from "react";
import Project from "../../components/Project/Project.jsx";
import "./About.css";

export default function AboutScreen() {
  return (
    <>
        <h3 id="description">
            Hi! Sorry about this website being so simple. I got really interested in learning more about React and dug myself into a hole reading the React manual pages. I ended up creating a new React version of my existing portfolio website but then realized that I wouldn't be able to finish it in the way I wanted it before the comp deadline, so I'm planning on finishing it over winter break. In the meantime, I still wanted to turn in <i>something</i> for the workshop so I created this submission which meets the criteria for the workshop project with its two new components, each taking props and having internal states:
            <ul>
                <li>The hamburger menu above takes a list of links and produces a component that has open and closed states.</li>
                <li>The Project drop down below takes a list of projects and produces a component that also has open and closed states.</li>
            </ul>
            I really appreciate these workshops and I'm inspired to do more with what we've learned so far! Thank you guys for hosting these! Again, sorry about the simplicity of this one, I just didn't know what to do considering I wanted to take on a bigger project with React but still had to keep the comp deadline in mind!
        </h3>

        <Project list={["First Project", "Second Project", "Third Project"]}/>
    </>
  );
}
