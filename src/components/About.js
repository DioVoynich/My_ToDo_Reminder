import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className={"about"}>
            <u>Version 1.0.0</u>
            <p>
                This is my first Front-End Project. It is a reminder list that allows the users to
                add and organize their schedules. I made this website because I want to learn React.js,
                and it is also for my other web design project that I have been doing in parallel,
                "Tale of Voynich."
            </p>
            <br/>
            <p>
                If you want to know more about me, please access the link below.
                Thank you for using this website!
            </p>
            <br/>
            <a href={"https://github.com/DioVoynich"}>
                Information about Dio Voynich
            </a>
            <br/>
            <Link to={"/"}>Go Back</Link>
        </div>
    )
}

export default About