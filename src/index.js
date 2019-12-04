import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Signin from './components/sign-page/signin';
import Signup from './components/sign-page/signup';
import Home from './components/home/home';
import About from './components/about/about';
import Service from './components/service/service';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import Marketing from './components/serviceProduct/marketing/marketing';
import Care from './components/serviceProduct/care/care';
import Development from './components/serviceProduct/development/development';
import * as serviceWorker from './serviceWorker';
import Reducer from './store/reducer';

const store = createStore(Reducer);

const Routing =(
    <Provider store= {store}>
       <Router>
        <React.Fragment>
          
            <Route exact path="/" component={App}/>
            <Route  path="/signin" component={Signin}/>
            <Route  path="/signup" component={Signup}/>
            <Route  path="/home" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/service" component={Service}/>
            <Route  path="/blog" component={Blog}/>
            <Route  path="/contact" component={Contact}/>
            <Route  path="/care" component={Care}/>
            <Route  path="/development" component={Development}/>
            <Route  path="/marketing" component={Marketing}/>
            
        </React.Fragment>
      </Router>
    </Provider>
)
ReactDOM.render(Routing, document.getElementById('root'));

serviceWorker.unregister();
