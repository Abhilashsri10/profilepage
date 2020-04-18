import React, {Component} from 'react';
import logo from '../public/image/abhi.jpg';
import cse from '../public/image/mulesoft.png';
import Background from '../public/image/back5.jpg';


var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${ Background })`
  };

class Banner extends Component {
    render() {
        return (
            <section className="container-banner" style={sectionStyle}>
                <a href="#home"><img id="profilepic" src={logo} width="170" height="170" alt="profilepic"/></a>
                <h1> Ahoy! This is Abhilash srivastava</h1>
                <p id="paragraph1"> Mulesoft<br/>
                developer</p>
                <a id="logo" href="https://www.mulesoft.com/"><img src={cse} width="30" height="30" alt="cselogo"/></a>
            </section>
        )
    }
}

export default Banner;