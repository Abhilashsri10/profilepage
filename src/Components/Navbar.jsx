import React,{Component} from 'react';
import './css/Main.css';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#home"><i className="fa fa-fw fa-user"></i>About</a>
                <a href="#skillhead"><i className="fa fa-fw fa-xing"></i>Skills</a>
                <a id="#protofolio-link" href="#Portfolia"><i className="fa fa-github-alt"></i>Projects</a>
                <a href="#contactimg"><i className="fa fa-fw fa-envelope"></i>Contact</a>
            </nav>
        )
    }
}

export default Navbar;