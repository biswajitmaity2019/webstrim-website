import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
//import ReactDOM from 'react-dom';
//import {Link} from 'react-router';
import './signin.css';
import * as ActionType from '../../store/action';
class signin extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
        username:"",
        pwd: "",
        usernameData:"",
        passwordData:"",
        responceData:{}
        }
       this.fetchData=this.fetchData.bind(this);
  }
  
  handleValue= event=> {
    this.setState({[event.target.name]: event.target.value});
  }
  
 fetchData= (e)=> {
  const datavalue={username:this.state.username};
  //var usernameData="", passwordData="";
   Axios.post('http://localhost:8000/product/search-user',datavalue)
   .then(res=>{ 
     console.log("Responce data : "+res.data[0].name);
     
     this.setState({usernameData:res.data[0].username,passwordData:res.data[0].password, responceData:res.data[0]}) ;
     this.props.onNewUserAdd(this.state.responceData);
    })
    .catch(err=>{console.log(err);e.preventDefault();});

 }

  
  
  submitHandler = event => {
    this.fetchData(event);
  
    
      if(this.state.username!==this.state.usernameData)
    {
     // console.log(this.state.uname);
      event.preventDefault();
    }
     if (this.state.pwd!==this.state.passwordData) {
      event.preventDefault();
    } 
   
    console.log("out "+this.state.username,this.state.pwd, this.state.responceData);
    
    //event.preventDefault();
  }

    render(){
        return(
            <div className="login-contain">
              <h2><b>Signin your credential :</b></h2>
              <br/><br/>
            <label>
              User Name   
              &emsp;
              <input type="text" name="username" onChange={this.handleValue} placeholder={this.props.centralUsername}/>
            </label>
            <br/><br/>
            <label>
            Password   
            &emsp;&emsp;
              <input type="password" name="pwd" onChange={this.handleValue} placeholder={this.props.centralpassword}/>
            </label>
            <br/><br/>
            &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <Link to='./home' onClick={this.submitHandler}>
            <input type="submit"    value="Submit"  /> 
            </Link>
            <br/><br/>
            <div>
            <Link className='link' type='button' to='/signup'>Signup</Link>
          </div>
          </div>
          
          
        );
    }
}

const mapStateToProps = state => {
  console.log(state.username);
  return {
    centralUsername : state.username,
    centralpassword : state.password
  };
}

const mapDispatchToProps = dispatch => {
  console.log('enter dispatch');
  return {
    
        onNewUserAdd: (newUser) => dispatch({type : ActionType.NEW_USER_DATA, newData: newUser})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(signin);