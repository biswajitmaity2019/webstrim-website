import * as ActionType from './action';
//import { stat } from 'fs';
const initialState = {
    
        name:"",
        age:"",
        gender:"",
        phone:"",
        username:"",
        password:"",
        newDataStore:false
    
};

const reducer = (statedata = initialState,action) =>{
    switch (action.type)
    {
        case ActionType.NEW_USER_DATA :
                console.log(action.newData);
                //alert("")
            return {
                   ...statedata,
                                      
                     name: action.newData.name,
                     age: action.newData.age,
                     gender: action.newData.gender,
                     phone: action.newData.phone,
                     username: action.newData.username,
                     password: action.newData.password,
                     newDataStore:true
            };
        case ActionType.SEARCH_USER_DATA :
            return{

            };
        case ActionType.DELETE_USER_DATA :
            return{
                        
            };
        case ActionType.FORGATE_USER_DATA :
            return{
                                
            };
        default:
            return{

            };
    }
};

export default reducer;