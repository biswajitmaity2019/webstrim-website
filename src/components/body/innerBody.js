import React from 'react';
import {Link} from 'react-router-dom';
import './innerBody.css';
//import Logo from './stockphoto.jpg';

class innerBody extends React.Component{
    

    render(){
        
        return(
            <table className="main-table">
                <tr>
            {this.props.data.map((data)=>(
            <React.Fragment >
                <td className="main-td">

</td>
                <td>
                 <table className="inner-table">
                     <tr>
                       <td className="inner-td1">
                                 #{data.id} - {data.name}
                       </td>
                       </tr>
                      <tr> 
                       <td className="inner-td2">
                       {data.description}
                       <br/><br/><br/>
                       <hr/>
                       
                       </td>

                     </tr>
                     <tr>
                       <td className="inner-td3">
                       <Link to={data.className} className="service-products-link">...more</Link>
                       </td>
                       </tr>
                 </table>  
                        
                </td>
                <td className="main-td">

                </td>
                   
               
                    
         </React.Fragment>
         
         ))}
          </tr>
          </table>
        );
   
    }
}
export default innerBody;