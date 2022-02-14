import React, {useState} from 'react';
import questions_data from '../../Resources/constants/questions.json';
import './FAQ.css';
import '../../Containers/Terminal/Terminal.css'

const ContactMe = () =>{
   
    const { jobSelector, curJob } = JobSelector();

    return(
    <div className = "experience main">
        <div>
            <div className="container">
                <span className="title">
                    <h1>FAQ</h1>
                </span>
                <ul className="jobSelector">
                    {jobSelector}
                </ul>
                    <div className="individualExperience">
                        <h3>{questions_data[curJob].title} </h3>
                        <p>{questions_data[curJob].duration}</p>
                        <ul className="jobDescription">
                            {questions_data[curJob].description.map((item,index)=>{
                                return <li key={`job-description-${index}`}>{item}</li>
                            })}
                        </ul>
                    </div>
            </div>
        </div>
    </div>
    );
}

const JobSelector = () =>{
    let [curJob, selectJob] = useState(0);
    let jobSelector = questions_data.map((job,index)=>{
        let result = <li onClick={()=>{selectJob(index)}} key={index}>{job.company}</li>;
        if(index === curJob)
            result =  <li onClick={()=>{selectJob(index)}} className = "jobSelected" key={index}>{job.company}</li>
        return result
    })
    return {jobSelector,curJob};
}


export default ContactMe;
