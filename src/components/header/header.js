import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class header extends React.Component{

    render(){
        return(
           
               <table className="table">
                   <tr>
                       <td className="td1">
                         <i className="webName">WEBSTRIM</i>
                       </td>
                       <td className="td2">
                         <input type="search" name="intsearch"/>
                         <input type="submit" className="butSearch" value="search"/>
                       </td>
                       <td className="td3">
                       <Link to="./home">
                          <button className="home">Home</button>
                          </Link>
                       </td>
                       <td  className="td4">
                       <Link to="./about">
                         <button className="about">About</button>
                         </Link>
                       </td>
                       <td className="td5">
                       <Link to="./service">
                         <button className="service">Service</button>
                         </Link>
                       </td>
                       <td className="td6">
                       <Link to="./blog">
                         <button className="blog">Blog</button>
                         </Link>
                       </td>
                       <td  className="td7">
                       <Link to="./contact">
                         <button className="contact">Contact</button>
                         </Link>
                       </td>
                       
                       <td className="tdLast">
                         <p >                         
                           <b>
                       <Link to='/signin' className="sign">Sign out</Link>
                          </b>
                       </p>

                       </td>
                   </tr>
               </table>
           
        );
    }
}
export default header;