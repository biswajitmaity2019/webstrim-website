import React,{Component} from 'react';
//import {Link} from 'react-router-dom';
import './Footer.css';
import FacebookLogo from '../../assect/facebook-icon.png';
import LinkedinLogo from '../../assect/linkedin-icon.png';
import TwitterLogo from '../../assect/twitter-icon.png';
import InstagramLogo from '../../assect/instagram-icon.png';

class service extends Component{
    render()
    {
        return(
            <div >
                <table className="footerBody">
                    <tr>
                        <td>
                        <p>
                             © 2019 WEBSTRIM DESIGN GROUP. ALL RIGHTS RESERVED   |   PRIVACY POLICY
                        </p>
                        </td>
                        <td>
                        <a href="https://www.facebook.com/biswajit.maity.7792052" >
                            <button ><img src={FacebookLogo} alt="facebook.com" className="facebook"/>    </button>
                        </a>

                        <a href="https://www.linkedin.com/in/biswajit-11111/" >
                            <button ><img src={LinkedinLogo} alt="linkedin.com" className="linkedin"/>    </button>
                        </a>

                        <a href="https://twitter.com/Biswaji11736029" >
                            <button ><img src={TwitterLogo} alt="twitter.com" className="twitter"/>    </button>
                        </a>

                        <a href="https://www.instagram.com/biswajit11111/?hl=en">
                            <button  ><img src={InstagramLogo} alt="instagram.com" className="instagram"/>    </button>
                        </a>
                        </td>
                    </tr>
                </table>
           

           
            </div>
        );
    }
}
export default service;