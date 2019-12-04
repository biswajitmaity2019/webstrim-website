import React from 'react';
//import { Link } from 'react-router-dom';
import Signin from './components/sign-page/signin';
//import Api from '../src/test/testapi/api';
//import ReactDOM from 'react-dom';
import './App.css'; 


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
     name:props.name,
    age:props.age
    }
  }
  render() {
    return <Signin/>   
  }
}

export default App;
