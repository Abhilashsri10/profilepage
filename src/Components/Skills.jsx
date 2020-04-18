import React,{Component} from 'react';



class Skills extends Component {
    render() {
        return (
           <div className="skillbox">
            <h1 className="skillheader" id="skillhead">My Skills</h1>
              <ul> 
               <li><span>Mulesoft</span></li>
               <li><span>ReactJs</span></li>
               <li><span>Flask</span></li>
            </ul>
           </div>
        )
    }
}
export default Skills;