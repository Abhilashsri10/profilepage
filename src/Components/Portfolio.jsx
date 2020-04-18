import React, {Component} from 'react';
import ProjectCards from '../Components/Project.jsx';


const content1="this is a web app to maintain driscolls inventory";



class Portfolio extends Component {
    render() {
        return (
            <section className="projects">
                <h1 id="Portfolio"></h1>
                <p>Some of my Projects</p>
                
                 <div className="container">
                    <ProjectCards projectName="LCI" content={content1}></ProjectCards>
                    <ProjectCards projectName="Balanced Scorecard" content={content1}></ProjectCards>
                    <ProjectCards projectName="Facts" content={content1}></ProjectCards>
                    <ProjectCards projectName="FSP" content={content1}></ProjectCards>
                 </div>
            </section>
        )
    }
}

export default Portfolio;