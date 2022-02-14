import React from 'react';
import './About.css';
import '../../Containers/Terminal/Terminal.css'

const About = () =>{
    return(
    <section className = "main section">
        <div className="about">
            <div className="text">
                <div  className="header">
                    <h1>About the project</h1>
                </div>
                <p>Bored Pandas Club is created for the people who never settle down.<br/><br/></p>
                <p>If you aim big and follow your dreams, regardless how crazy they are, this is the right place to be.
                    The main purpose of the community is to connect like-minded people who never stop exploring, like adrenaline and think outside of the box. 
                    We want to discuss disturbing ideas while waiting in a plane to do sky-diving or jump out of helicopter with an action camera and snowboard.
                <br/>
                <br/>
                </p>
                <p>Here are a few of our characteristics:<br/><br/></p>
                {getTechnologies()}
            </div>
            <div className="avatar"></div>
        </div>
    </section>
    );
}

const getTechnologies = () =>{
    return <ol className="technologies">
                <li>Accept challenges</li>
                <li>Learn from mistakes</li>
                <li>Support innovation</li>
                <li>Help each other</li>
                <li>Grow outside comfort zone</li>
                <li>Strive to be the best</li>
                <li>Be brave to take risk</li>
                <li>Build your future</li>
            </ol>
}
export default About;