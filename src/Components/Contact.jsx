import React, {Component} from 'react';
import contact from '../public/image/contactlogo.png';
import mailme from '../public/image/mailmeimg.png';



class Contact extends Component {
    render() {
        return (
            <section className="container-1">
                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3 > <strong >Abhilash Srivastava</strong></h3>
                <h4>Zany Geek</h4>
                <h4>Email id: abhi.srivastava456@gmai.com</h4>
                <a id="mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=abhi.srivastava456@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click here to Send mail</a>
                <h4>Contact info: 8072344306</h4>
                <a href="https://www.facebook.com/abhilash.srivastava.7927">
                        <span classname="icon fa fa-facebook" style={{color:'antiquewhite'}}></span>
                </a>
                    <a href="https://github.com/Abhilashsri10">
                        <span className="icon fa fa-github" style={{color:'black'}}></span>
                    </a>
                    <a href="https://www.linkedin.com/in/abhilash-srivastava-55829b115/">
                        <span className="icon fa fa-linkedin" style={{color:'antiquewhite'}}></span>
                    </a>
            </section>
        )
    }
}
export default Contact;
