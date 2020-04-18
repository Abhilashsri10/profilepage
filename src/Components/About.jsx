import React, {Component} from 'react';
import biologo from '../public/image/abhi.jpg';

class About extends Component {
    render (){
        return (
            <section id="container-about" classname="container-about">
                <h1>About me</h1>

                <img src={biologo} width="180" height="180" alt="abtimg"/>
                <p>
                    Ahoy!, this is Abhilash Srivastava, a B.tech grad from VIT vellore,
                    with a experience of 11 months in IT industry with mulesoft developement 
                </p>
            </section>
        )
    }
}

export default About;