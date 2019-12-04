import React from 'react'; 
import {connect} from 'react-redux';
import * as ActionType from '../../store/action';
import { Link } from 'react-router-dom';
import Axios from 'axios';
//import ReactDOM from 'react-dom';
//import {Link} from 'react-router';
//import Signin from './signin';
import './signup.css';

// const user={
//   name:"",
//         age:"",
//         gender:"",
//         phone:"",
//         username:"",
//         password:""
// }

class signup extends React.Component{

  // constructor(props){
  //   super(props);
    state={
      
        name:"",
        age:"",
        gender:"",
        phone:"",
        username:"",
        password:""
      
        
    
    //this.stateChange=this.stateChange.bind(this);
   // this.handleSubmit=this.handleSubmit.bind(this);
  };

  stateChange=event=> {
    this.setState({[event.target.name]:event.target.value});
    //console.log(this.state.name);
  };

  handleSubmit=event=> {
     event.preventDefault();
     //let reciveData={};
     const datavalue={name:this.state.name, age:this.state.age, gender:this.state.gender, phone:this.state.phone, username:this.state.username, password:this.state.password};
   
    Axios.post('http://localhost:8000/product/',datavalue)
    .then(res=>console.log(res.data))
    .catch(err=>alert(err.response.data));
    // //let inputData=e.target.map(values=>values.value);
     //console.log(event.target.get(this.user));
     console.log(this.state);
     
    this.props.onNewUserAdd(this.state);
    if(this.props.UserData){
     // alert("Create new user");
      console.log("create");
      this.setState({name:"", age:"",gender:"",phone:"",username:"",password:""});
    }
  };
   
    render(){
     
        return(
            <div className="signup-contain">
              <h2><b>Signup your details :</b></h2>
              <br/><br/>
            <label>
              Name
              &emsp;&emsp;&emsp;&emsp;&emsp;
              <input type="text" name="name" value={this.state.name} onChange={this.stateChange}/>
            </label>
            <br/> <br/>
            <label>
              Age
              &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;
              <input type="number" value={this.state.age} name="age" onChange={this.stateChange}/>
            </label>
            <br/> <br/>
            <label>
              Sex
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              Male
              <input type="radio" name="gender" value="male" onClick={this.stateChange}  />
              &nbsp;
              Female
              <input type="radio" name="gender" value="female" onClick={this.stateChange} />
              &emsp;&emsp;
            </label>
            <br/> <br/>
            <label>
              Phone No
              &emsp;&emsp;&emsp;
              <input type="number" name="phone" value={this.state.phone} onChange={this.stateChange}/>
            </label>
            <br/> <br/>
            <label>
              User Name
              &emsp;&emsp;&nbsp;&nbsp;&nbsp;
              <input type="text" name="username" value={this.state.username}  onChange={this.stateChange}/>
            </label>
            <br/> <br/>
            <label>
              Password
              &emsp;&emsp;&emsp;&nbsp;
              <input type="text" name="password" value={this.state.password}  onChange={this.stateChange} />
            </label>
            <br/> <br/>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
            <br/><br/>
            Please &nbsp;<Link type='button' className="link" to='./signin'>login</Link>
          
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    UserData:state.newDataStore
    

  }
}

const mapDispatchToProps = dispatch => {
  console.log('enter dispatch');
  return {
    
        onNewUserAdd: (newUser) => dispatch({type : ActionType.NEW_USER_DATA, newData: newUser})
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (signup);