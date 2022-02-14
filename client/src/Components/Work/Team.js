import React, { Fragment } from 'react';
import './Team.css';
import '../../Containers/Terminal/Terminal.css'

import {ReactComponent as ExternalLink} from "../../Resources/icons/external-link.svg";
import {ReactComponent as Folder} from "../../Resources/icons/dakata_7.svg";

const content = (props)=>{
    let result = <ul>
    {props.repos.map((obj,index) =>{
        if(props.getLoad || index < 6)
            return(<li key={`work-element-${index}`}>
                <div className="insideContainer">
                    <div className="logo">
                        <Folder className="folder"/>
                    </div>
                    
                    <div className="title">{obj.name}</div>

                    <div className="description">{obj.description}</div>

                    <footer>{obj.languages}</footer>
                </div>
            </li>)
        else
            return <Fragment key={`work-element-${index}`}></Fragment>
    })}
    </ul>
    if (props.test)
        return <></>
    return result
}

const Work = (props) =>{
    let currentContent = content(props)
    return(
    <div className = "main">
        <div className="projects">
            <div className="workHeader">
                <h3>Meet the team</h3>
            </div>
            {currentContent}
          
        </div>
    </div>
    );
}



export default Work;
