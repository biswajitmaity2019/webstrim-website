import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/Footer';

class contact extends Component{
    render()
    {
        return(
            <div>
            <Header/>
            <h1>Submit your Contact details</h1>

            <label>
              Name :
              <br/>
              <input type="text" name="name"  />
            </label>
            <br/><br/>
            <label>
              Phone Number :
              <br/>
              <input type="number" name="phone"  />
            </label>
            <br/><br/>
            <label>
            Email Address :
              <br/>
              <input type="email" name="email"  />
            </label>
            <br/><br/>
            <label>
            Current position of the company :
              <br/>
              <input type="text" name="position"  />
            </label>
            <br/><br/>
            <label>
              Your adderss :
              <br/>
              <textarea type="text" name="adderss"  />
            </label>
            <br/><br/>
            <label>
              <input type="submit" value="Submit"/>
            </label>
            <br/><br/>


              <h2><b> Profile details :</b></h2>
              <br/><br/>
            <label>
              Name
              &emsp;&emsp;&emsp;&emsp;&emsp;
              <input type="text" name="name" value={this.props.ctrlName} />
            </label>
            <br/> <br/>
            <label>
              Age
              &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
              <input type="number" value={this.props.ctrlAge} name="age" />
            </label>
            <br/> <br/>
            <label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Sex
              &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
              <input type="text" name="gender"  value={this.props.ctrlGender} />
             
              &emsp;&emsp;
            </label>
            <br/> <br/>
            <label>
              Phone No
              &emsp;&emsp;&emsp;
              <input type="number" name="phone" value={this.props.ctrlPhone} />
            </label>
            <br/> <br/>
            <label>
              User Name
              &emsp;&emsp;&nbsp;&nbsp;&nbsp;
              <input type="text" name="username" value={this.props.ctrlUsernae}  />
            </label>
            <br/> <br/>
            <label>
              Password
              &emsp;&emsp;&emsp;&nbsp;
              <input type="text" name="password" value={this.props.ctrlpassword}   />
            </label>
            <br/> <br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
            <br/><br/>
          
          
            
           <Footer/>

            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.username);
    return {
      ctrlName : state.name,
      ctrlAge : state.age,
      ctrlGender : state.gender,
      ctrlPhone : state.phone,
      ctrlUsernae : state.username,
      ctrlpassword : state.password
    };
  }


export default connect(mapStateToProps) (contact);