import React, { Component } from 'react';

import Axios from 'axios';
//import axios from 'axios';
class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]   // it is use for jsonholder.typicode
      // name:"Mohit",
      // course:" html",
      // message:""
    };
  }
  componentDidMount() {
    var datavalue={name:"Ajeet kumar"}

    //fetch('https://jsonplaceholder.typicode.com/posts')
   // fetch('http://localhost:8000/product',{method : "POST", body:name})
    //fetch("http://localhost:8000/product/search-user")
    // fetch("http://localhost:8000/product")
    
      // .then(res => res.json())
      // .then(data =>this.setState({ data}));
     
      
      // .then(res => {
      //   console.log(res);
      //   console.log(typeof(res.data));
      // });


    //   Axios.post('http://localhost:8000/product',datavalue)
    // .then(res=> console.log(res))
    // .catch(err=>console.log(err.response.data));

    Axios.patch('http://localhost:8000/product/search-user',datavalue)
    .then(res=> console.log(res))
    .catch(err=>console.log(err.response.data));

    // Axios.get('http://localhost:8000/product/')
    // .then(res=> console.log(res))
    // .catch(err=>console.log(err.response.data));

  }
  render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My data</h1>
        {this.state.data.map((val,index)=>(
          <div className="card">
            <div className="card-body">
    <h5 className="card-title">Name : {val.name} <br/>
                               Age  : {val.age}<br/>
                               Sex  : {val.sex}<br/>
                               Phone No. : {val.phone}<br/>
                               User Nmae : {val.username}<br/>
                               Password  : {val.password}
                               </h5>
              <h6 className="card-subtitle mb-2 text-muted">
             
              </h6>
            </div>
          </div>
         ))}
        </div>
       </div>
    );
  }  
}
export default Api;