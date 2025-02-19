import React from "react";
import {Link} from "react-router-dom";

const About = () => {
    return <div>about
        <a href="hello">hello anchor</a>
        <Link to={"/hello"} >Hello</LINK>
        <Link to={"/hi"}>Hi</Link>
        </div>;
};

export default About;
