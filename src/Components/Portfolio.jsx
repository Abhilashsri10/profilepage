import React, {Component} from 'react';
import ProjectCards from '../Components/Project.jsx';
import logo1 from '../public/image/driscolls.jpg';
import logo2 from '../public/image/driscolls1.jpg';
import logo3 from '../public/image/driscolls2.jpg';
import logo4 from '../public/image/driscolls3.jpg';

const content1="developed APIs for this web APP";
const content2="developed APIs for this web APP";
const content3="developed APIs for this web APP";


class Portfolio extends Component {
    render() {
        return (
            <section className="projects">
                <h1 id="Portfolio"></h1>
                <p><strong>Some of my Projects</strong></p>
                
                 <div className="container">
                    <ProjectCards projectName="LCI" content={content1} logo={logo1} style={{justifyContent: 'space-between'}}></ProjectCards>
                    <ProjectCards projectName="Balanced Scorecard" content={content1} logo={logo2}></ProjectCards>
                    <ProjectCards projectName="Facts" content={content1} logo={logo3}></ProjectCards>
                    <ProjectCards projectName="FSP" content={content1} logo={logo4}></ProjectCards>
                    <ProjectCards projectName="QMP" content={content1} logo={logo2}></ProjectCards>
                 </div>
            </section>
        )
    }
}

export default Portfolio;