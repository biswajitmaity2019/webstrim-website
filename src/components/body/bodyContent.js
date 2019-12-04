import React from 'react';
import './bodyContent.css';
//import Logo from './stockphoto.jpg';
import InnerBody from './innerBody';
//import {Link} from 'react-router-dom';
//import Development from '../serviceProduct/development/development';

class bodyContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id: "1",
                    name: "DEVELOPMENT",
                    className: "Development",
                    heading: "Custom Web Design & Development",
                    description: "Today, a mobile-friendly website is critical to overall success of your business. We build custom responsive sites that offer a seamless user experience and deliver the marketing message that resonates with your audience." 

                },
                {
                    id: "2",
                    name: "MARKETING",
                    className: "marketing",
                    heading: "Digital Marketing & Strategy Development",
                    description: "A website must do two things: attract visitors and compel them to take action. Our carefully crafted digital strategies and marketing campaigns can achieve both, and increase your online traffic and conversion rates." 

                },
                {
                    id: "3",
                    name: "CARE",
                    className: "care",
                    heading: "Website Care, Maintenance & Updates",
                    description: "One of the most critical components to any solid website strategy is ongoing maintenance and upkeep. Our web care plans are tailored to fit your specific needs and designed to keep your site safe, secure, and up-to-date." 

                }
            ]
        }
    }
    render(){
        return(
         <React.Fragment>
             <table className="con-tb">
                 <tr>
                     <td>
                         <br/>
                     <p>
                         <h3 className="con-h3">
                         WHY DO YOU NEED A WEBSITE?
                         </h3>
                         <h1 className="con-h1">
                         Website Is Your 24/7 Conversion Tool
                         </h1>
                     </p>
                     <p>
                         <h3 className="conBody-h3">
                         A successful website must support all your business needs, whether that means enhanced visibility, improved market positioning, lead generation or a new revenue stream. We are here to help you develop such a professional website, and then conceptualize and execute effective marketing campaigns that consistently convert your site visitors into customers.
                         </h3>
                     </p>
                     </td>
                 </tr>
                 <tr>
                     <td className="td-data-field">
                        <hr/>
                        <br/>
                        <InnerBody data={this.state.data}/>
                        <br/> <br/>
                        <hr/>   
                     
                     </td>
                 </tr>
                
                
             </table>
         </React.Fragment>
        );
    }
}
export default bodyContent;