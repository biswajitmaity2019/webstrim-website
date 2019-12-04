
           import React from 'react';
           import Header from '../header/header';
           import BodyHeader from '../body/bodyHeader';
           import BodyContent from '../body/bodyContent';
           import Footer from '../footer/Footer';

           class home extends React.Component{
               render(){
                   return(
                       
                       <React.Fragment>
                      
                       <Header/>
                       <BodyHeader/>
                       <BodyContent/>
                       <Footer/>

                       </React.Fragment>
                       
                   );
               }
           }
     
export default home;