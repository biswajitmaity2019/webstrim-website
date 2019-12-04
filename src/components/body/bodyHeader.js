import React from 'react';
import './bodyHeader.css';
import Logo from '../../assect/web-seo.jpg';

class bodyHeader extends React.Component{
    render(){
        return(
         <React.Fragment>
             <table className="tb">
                 <tr>
                     <td>
                     <img src={Logo } alt="web logo"  />
                     </td>
                 </tr>
                 <tr>
                     <td>
                     <p className="p1">
                         <h3>
                     Webstrim was founded in 2004. We are a web development and digital marketing consulting agency based on the Central Coast of California. Experienced in web and mobile technologies, our team can design, develop and deploy the online solutions that provide a flexible, consistent experience for users across platforms and drive business value.

Subsequently, we provide business strategy development, marketing analysis and pay-per-click management to poise your company for success. We create actionable data-driven digital marketing strategies for your business and help you plan, implement and optimize the revenue generating digital campaigns. Our clients benefit from solid, measurable results our agency delivers, and enjoy our straightforward approach and simple collaboration process.
                         </h3>
                     </p>
                     </td>
                 </tr>
                
             </table>
         </React.Fragment>
        );
    }
}
export default bodyHeader;