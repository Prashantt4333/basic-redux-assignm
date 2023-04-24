// console.log("okkkkkk")

const redux = require("redux");

const {legacy_createStore } = require('redux');


console.log("legacy_createStore===>",legacy_createStore);

 const ADDBYVALUE = "addValueBy1"
 const SUBTRACTVALUEBY1 = "SubtractValuBy1"
// 1. Action 

/* 
    Action are JS object which must contain "type" Property  many payload
    {
        "type": "",
        payload:""
    }
*/

// 2. Action Creator
    /* 
        Action creator are function wich return action 
        function myFunction(){
            return {type:""}
     
             }
    */


        // lets define some action creator

        /*       let login = () =>{
                    return {
                        type:"LOGIN",
                        payload:{
                            username:"abcd",
                            password:"123"
                        }
                    }
                }
                let logout = () =>{
                    return{
                        type:"LOGOUT"
                    }
                }
        */
        
        let AddValueBy1 = () =>{
            return {
                type:ADDBYVALUE,
                payload:{
                 value:1
                }
            }
        }
        
        let SubtractValuBy1 = () =>{
            return {
                type:SUBTRACTVALUEBY1,
                payload:{
                 value:1
                }
            }
        }

//3. ReducerFunction 
     /* 
        accept oldState 
        accept actions
        and return newState

    */

        let oldState = {
            value:0
        }

        // Lets define the reducerFunction rootreduce

        const rootReducer  = (state=oldState ,action) => {
            let newState = state;
               switch(action.type){
                        case ADDBYVALUE :
                            return{
                                    ...newState,
                                    value:newState.value+action.payload.value
                                }
                                break;
                            case SUBTRACTVALUEBY1 :
                                return{
                                    ...newState,
                                    value:newState.value-action.payload.value
                                }
                                break;
                            case '' :
                    break;
                default:
           }
        
        return newState;
        }

   

//4. Store Global Object

//  lets create the store object 

let storeObject = legacy_createStore(rootReducer)


console.log("store -------->",storeObject)
console.log("curruntState  before dispatch --- -->",storeObject.getState());



console.log("AddValueBy1  -->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(AddValueBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(SubtractValuBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(SubtractValuBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(SubtractValuBy1()));
console.log("AddValueBy1  -->",storeObject.dispatch(SubtractValuBy1()));
// // console.log("AddValueBy1  -->",store.dispatch({type:"AddValueBy1",payload:1}));

console.log("curruntState afte dipatch -->",storeObject.getState());
